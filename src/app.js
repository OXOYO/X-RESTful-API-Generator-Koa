/**
 * Created by OXOYO on 2017/10/23.
 */

import Koa from 'koa'

import { System as SystemConfig } from './config'
import middleware from './middleware'
import api from './api'

const app = new Koa()
const env = process.env.NODE_ENV || 'development'

// 注册路由
app.use(api())
// 注册中间件
app.use(middleware(app))

if (env === 'development') { // logger
  app.use((ctx, next) => {
    const start = new Date()
    return next().then(() => {
      const ms = new Date() - start
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
    })
  })
}

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

app.listen(SystemConfig.port, function () {
  let serverPath = SystemConfig.protocol + SystemConfig.host + ( SystemConfig.port ? ':' + SystemConfig.port : SystemConfig.port )
  console.log('RESTful API Server is listening to ' + serverPath)
})

export default app
