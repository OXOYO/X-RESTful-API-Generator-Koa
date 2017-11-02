/**
 * Created by OXOYO on 2017/11/2.
 */
require('babel-register')
require('babel-polyfill')

var app = require('./app')
var SystemConfig = require('./config').System

var server = app.listen(SystemConfig.port, function () {
  let serverPath = SystemConfig.protocol + SystemConfig.host + (SystemConfig.port ? ':' + SystemConfig.port : SystemConfig.port)
  console.log('RESTful API Server is listening to ' + serverPath)
})

exports = module.exports = server
