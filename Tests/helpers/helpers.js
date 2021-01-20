const supertest = require("supertest");
const app = require('../../myApp.js')

class Helper {
  constructor(model) {
    this.apiServer = supertest(app)
  }
}

module.exports = Helper
