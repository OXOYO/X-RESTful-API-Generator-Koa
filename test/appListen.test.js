/**
 * Created by OXOYO on 2017/11/1.
 */

var superagent = require('supertest')
var should = require('should')

var app = require('../build/index')

describe('appListen', function () {
  it('listen success', function (done) {
    superagent(app.listen())
      .get('/')
      .expect(200)
      .end(function (err, res) {
        // console.log('err', err)
        // console.log('res', res)
        res.status.should.equal(200)
        done()
      })
  })
})
