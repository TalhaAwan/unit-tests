const expect = require('chai').expect;
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const helpers = require('./helpers');


describe('helpers', function() {
	describe('generateRandomNum', function() {
		it('should generate num bewteen min and max exclusive', function(done) {
			expect(helpers.generateRandomNum(1, 1)).to.equal(1);
			done();
		});
	});
	
	describe('convertArrToStatment', function() {
		it('should return first element of an array of one', function(done) {
			expect(helpers.convertArrToStatment(["apples"])).to.equal("apples");
			done();
		});
		it('should return "undefined" for falsy and non array values', function(done) {
			const expected = undefined;
			expect(helpers.convertArrToStatment(undefined)).to.equal(expected);
			expect(helpers.convertArrToStatment("")).to.equal(expected);
			expect(helpers.convertArrToStatment(null)).to.equal(expected);
			expect(helpers.convertArrToStatment(0)).to.equal(expected);
			expect(helpers.convertArrToStatment("hello")).to.equal(expected);
			expect(helpers.convertArrToStatment(NaN)).to.equal(expected);
			expect(helpers.convertArrToStatment({message: "hello"})).to.equal(expected);
			done();
		});

		it('should return array values as comma delimited string with "and" before the last element', function(done) {
			expect(helpers.convertArrToStatment(["apples", "oranges"])).to.equal("apples and oranges");
			expect(helpers.convertArrToStatment(["apples", "oranges", "grapes"])).to.equal("apples, oranges, and grapes");
			expect(helpers.convertArrToStatment([1, 2, 3, 4])).to.equal("1, 2, 3, and 4");
			done();
		});

	});

	describe('logger', function() {
		it('should return a function', function(done) {
			expect(typeof helpers.logger() === "function").to.equal(true);
			done();
		});
		it('should console a message with file name passed', sinon.test(function() {
			const fileName = "test-file.js";
			const logMessage = "test message";
			const log = helpers.logger(fileName);

			this.stub(console, 'log');
			log(logMessage);
			sinon.assert.calledWith(console.log, fileName, logMessage);
		}));
		
	});
});

