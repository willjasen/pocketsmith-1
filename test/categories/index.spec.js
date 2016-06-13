"use strict";

var expect = require('chai').expect,
	nock = require('nock');

var PocketSmith = require('../../dist');

var API = 'https://api.pocketsmith.com/v2';

describe('Categories', function () {
	before(function () {
		this.categories = (new PocketSmith('TOKEN')).Categories;
	});

	describe('instance', function () {
		var methods = [
			'get',
			'getAllByUser'
		];

		methods.forEach((method) => {
			it('should have a ' + method + ' method', function () {
				expect(this.categories[method])
					.to.exist
					.to.be.an.instanceOf(Function);
			})
		});
	});

	describe('@get', function () {
		afterEach(function () {
			nock.cleanAll();
		});

		it('should GET to /categories/{id}', function (done) {
			var req = nock(API)
				.get('/categories/1')
				.reply(200);

			this.categories.get(1)
				.then(() => {
					expect(req.isDone()).to.be.true;
					done();
				});
		});

		it('should have a token header', function (done) {
			var req = nock(API)
				.get('/categories/1')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.categories.get(1)
				.then(() => {
					expect(req.isDone()).to.be.true;
					done();
				});
		});

		it('should return data in the then', function (done) {
			var data = { test: 'test' };

			var req = nock(API)
				.get('/categories/1')
				.reply(200, data);

			this.categories.get(1)
				.then((resp) => {
					expect(resp)
						.to.be.an.instanceOf(Object);

					expect(resp.length)
						.to.equal(data.length);

					expect(resp.test)
						.to.equal(data.test);

					done();
				})
		});

		it('should accept a callback', function (done) {
			var req = nock(API)
				.get('/categories/1')
				.reply(200);

			this.categories.get(1, function () {
				done();
			});
		});

		it('should return a promise', function (done) {
			var req = nock(API)
				.get('/categories/1')
				.reply(200);

			this.categories.get(1)
				.then(done.bind(null, null))
				.catch(done.bind(null, null))
		});
	});
	
	describe('@getAllByUser', function () {
		afterEach(function () {
			nock.cleanAll();
		});

		it('should GET to //users/{id}/categories', function (done) {
			var req = nock(API)
				.get('/users/1/categories')
				.reply(200);

			this.categories.getAllByUser(1)
				.then(() => {
					expect(req.isDone()).to.be.true;
					done();
				});
		});

		it('should have a token header', function (done) {
			var req = nock(API)
				.get('/users/1/categories')
				.matchHeader('Authorization', 'Key TOKEN')
				.reply(200);

			this.categories.getAllByUser(1)
				.then(() => {
					expect(req.isDone()).to.be.true;
					done();
				});
		});

		it('should return data in the then', function (done) {
			var data = [{ test: 'test' }];

			var req = nock(API)
				.get('/users/1/categories')
				.reply(200, data);

			this.categories.getAllByUser(1)
				.then((resp) => {
					expect(resp)
						.to.be.an.instanceOf(Object);

					expect(resp.length)
						.to.equal(data.length);

					expect(resp[0].test)
						.to.equal(data[0].test);

					done();
				})
		});

		it('should accept a callback', function (done) {
			var req = nock(API)
				.get('/users/1/categories')
				.reply(200);

			this.categories.getAllByUser(1, function () {
				done();
			});
		});

		it('should return a promise', function (done) {
			var req = nock(API)
				.get('/users/1/categories')
				.reply(200);

			this.categories.getAllByUser(1)
				.then(done.bind(null, null))
				.catch(done.bind(null, null))
		});
	});
});
