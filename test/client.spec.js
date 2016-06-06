var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../dist');

var API = 'https://api.pocketsmith.com/v2';

describe('Client', function () {
	before(function () {
		this.smith = (new PocketSmith('TOKEN'));
	});

	afterEach(function () {
		nock.cleanAll();
	});

	it('should fail when error sent', function (done) {
		var req = nock(API)
			.get('/users/1/accounts')
			.replyWithError('Error');

		this.smith.Accounts.getAll(1)
			.catch(function (e) {
				done();
			});
	});
})
