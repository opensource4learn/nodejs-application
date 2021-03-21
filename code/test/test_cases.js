var request = require('request');
var expect = require('chai').expect;

it('Applicatins main page', function(done) {
	request('http://localhost:3000', function(error, response, body) {
		expect(response.statusCode).to.equal(200);
		done();
	});
});


it('Customers page', function(done) {
	request('http://localhost:3000/customers', function(error, response, body) {
		expect(response.statusCode).to.equal(200);
		done();
	});
});

it('Add customer page', function(done) {
	request('http://localhost:3000/customers/add', function(error, response, body) {
		expect(response.statusCode).to.equal(200);
		done();
	});
});
