var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../../dist');

var API = 'https://api.pocketsmith.com/v2';

describe('Accounts', function () {
	before(function () {
		this.accounts = (new PocketSmith('TOKEN')).Accounts;
	});

	describe('instance', function () {
		var methods = [
			'get',
			'getAll',
			'create',
			'update',
			'delete'
		];

		methods.forEach((method) => {
			it('should have a ' + method + ' method', function () {
				expect(this.accounts[method])
					.to.exist
					.to.be.an.instanceOf(Function);
			})
		});
	});

	describe('@getAll', function () {
		afterEach(function () {
			nock.cleanAll();
		});

		it('should GET to /users/{id}/accounts', function (done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.accounts.getAll(1)
				.then(() => {
					expect(req.isDone()).to.be.true;
					done();
				});
		});

		it('should have a token header', function (done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.accounts.getAll(1)
				.then(function () {
					expect(req.isDone()).to.be.true;
					done();
				});
		});

		it('should return data in the then', function (done) {
			var data = [{ test: 'test' }];

			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200, data);

			this.accounts.getAll(1)
				.then((resp) => {
					expect(resp)
						.to.be.an.instanceOf(Array);

					expect(resp.length)
						.to.equal(data.length);

					expect(resp[0].test)
						.to.equal(data[0].test);

					done();
				})
		});

		it('should accept a callback', function (done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.accounts.getAll(1, function () {
				done();
			});
		});

		it('should return a promise', function (done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.accounts.getAll(1)
				.then(done.bind(null, null))
				.catch(done.bind(null, null))
		});

		// It should catch errors to the cath promise
	});
});
