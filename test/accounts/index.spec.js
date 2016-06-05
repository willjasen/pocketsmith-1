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

		methods.forEach(function (method) {
			it('should have a ' + method + ' method', function () {
				expect(this.accounts[method])
					.to.exist
					.to.be.an.instanceOf(Function);
			})
		});
	});

	describe('getAll', function () {
		afterEach(function () {
			nock.cleanAll();
		});

		it('shoudl GET to /users/{id}/accounts', function (done) {
			var req = nock(API)
				.get('/users/1/accounts')
				.reply(200);

			this.accounts.getAll(1)
				.then(function () {
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
		})
	});
});
