var expect = require('chai').expect;

var PocketSmith = require('../../dist');

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
});
