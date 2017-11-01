/**
 * Created by OXOYO on 2017/11/1.
 */

var request = require('supertest')
var should = require('should')
// var expect = require('chai').expect

var app = require('../build/index')

// request = request.agent(app.listen())

describe('appListen', function () {
  it('listen success', function (done) {
    request(app.listen())
      .get('/x-restful-api-generator-koa/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err)
        done()
      })
  })
})
