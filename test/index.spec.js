var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../dist');

var API = 'https://api.pocketsmith.com/v2';

describe('PocketSmith', function () {
	before(function () {
		this.smith = (new PocketSmith('TOKEN'));
	});

	describe('instance', function () {
		var methods = [
			'Accounts',
			'Categories',
			'Institutions',
			'Users',
			'Transactions',
			'Scenarios'
		];

		methods.forEach((method) => {
			it(`should have a ${method} method`, function () {
				expect(this.smith[method]).to.exist;
			})
		});

		it(`should have a token defined`, function () {
			expect(this.smith.token)
				.to.exist
				.to.be.equal('TOKEN');
		});

		describe('Client', function () {
			afterEach(function () {
				nock.cleanAll();
			});

			it('should fail when error sent', function (done) {
				var req = nock(API)
					.get('/users/1/accounts')
					.reply(404, 'Error');

				this.smith.Accounts.getAll(1)
					.then(function (e) {
					}, function (e) {
						done();
					});
			});
		})
	});
});
