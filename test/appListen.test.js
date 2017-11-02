/**
 * Created by OXOYO on 2017/11/1.
 */

var request = require('supertest')

var app = require('../dist/app')
var server = app.listen()

describe('appListen', function () {
  it('listen success', function (done) {
    request(server)
      .get('/x-restful-api-generator-koa/')
      .expect(200)
      .end(function () {
        server.close()
        done()
      })
  })
})
