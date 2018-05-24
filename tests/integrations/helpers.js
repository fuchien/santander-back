const supertest = require('supertest')
const app = require('../../src/server')
const chai = require('chai')

global.app = app
global.request = supertest(app)
global.expect = chai.expect