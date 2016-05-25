var expect = require('chai').expect;

var PocketSmith = require('../dist');

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

		methods.forEach(function (method) {
			it('should have a ' + method + ' method', function () {
				expect(this.smith[method])
					.to.exist
					.to.be.an.instanceOf(Function);
			})
		});

		it('should have a token defined', function () {
			expect(this.smith.token)
				.to.exist
				.to.be.equal('TOKEN');
		});
	});
});
