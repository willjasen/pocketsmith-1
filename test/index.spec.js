"use strict";

var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../dist');

var API = 'https://api.pocketsmith.com/v2';

var methods = [
	'Accounts',
	'Categories',
	//'Institutions',
	//'Users',
	//'Transactions',
	//'Scenarios',
	'init'
];

describe('PocketSmith', function() {
	before(function() {
		this.smith = (new PocketSmith('TOKEN'));
	});

	describe('instance', function() {
		methods.forEach((method) => {
			it(`should have a ${method} method`, function() {
				expect(this.smith[method]).to.exist;
			})
		});
	});

	describe('@init', function() {
		beforeEach(function() {
			var req = nock(API)
				.get('/me')
				.reply(200);
		});
		
		afterEach(function() {
			nock.cleanAll();
			this.smith.Me = void 0;
		});

		it('should expose the same methods', function(done) {
			this.smith.init().then(function(smith) {
				methods.forEach((method) => {
					expect(smith[method]).to.exist;
				});

				done();
			});
		})

		it('should return a promise', function(done) {				
			this.smith.init()
				.then(done.bind(null, null))
				.catch(done.bind(null, null))
		});
	});
});
