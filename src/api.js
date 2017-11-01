/**
 * Created by OXOYO on 2017/10/23.
 */

import compose from 'koa-compose'
import Router from 'koa-router'

// 导入配置信息
import { Api as ApiConfig } from './config'
// 导入路由表
import routers from './routers'

export default function api () {
  let router = new Router({ prefix: ApiConfig.prefix })
  Object.keys(routers).forEach(name => routers[name](router))
  // 添加根路由
  router.get('/', async (ctx, next) => {
    await next()
    ctx.status = 200
    ctx.body = {}
  })

  return compose([
    router.routes(),
    router.allowedMethods({
      throw: true
    })
  ])
}
