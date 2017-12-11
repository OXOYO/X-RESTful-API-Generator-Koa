/**
 * Created by OXOYO on 2017/10/23.
 */

import Koa from 'koa'

import middleware from './middleware'
import utils from './utils'
import api from './api'

const app = new Koa()
const env = process.env.NODE_ENV || 'development'

// 注册log
app.use(async (ctx, next) => {
  let startTime = new Date()
  let ms
  try {
    await next()
    ms = new Date() - startTime
    utils.log.response(ctx, ms)
  } catch (err) {
    ms = new Date() - startTime
    utils.log.error(ctx, err, ms)
  }
})

// 注册qs
require('koa-qs')(app)
// 注册路由
app.use(api())
// 注册中间件
app.use(middleware(app))

if (env === 'development') {
  // logger
  app.use((ctx, next) => {
    const start = new Date()
    return next().then(() => {
      const ms = new Date() - start
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
    })
  })
}

app.on('error', function (err, ctx) {
  console.log('Service error', err)
})

exports = module.exports = app
