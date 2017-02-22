var request = require('supertest')

var app = require('../devops.js')

describe("mainpage", function() {
	it ("prints the right message to user", function (done) {
		request(app).get("/")
		.expect(200)
		.expect(/Hello World!/, done)
	})

})