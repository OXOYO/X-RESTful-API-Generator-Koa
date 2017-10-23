/**
 * Created by OXOYO on 2017/10/23.
 */

import compose from 'koa-compose'
import convert from 'koa-convert'
import helmet from 'koa-helmet'
import logger from 'koa-logger'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import KoaStatic from 'koa-static'

import { System as SystemConfig } from '../config'

export default function middleware (app) {
  return compose([
    logger(),
    helmet(),
    KoaStatic('static'),
    // 跨域处理
    convert(cors({
      origin: function (request) {
        let host = request.header.origin
        let isIncludes = false
        // FIXME 安全起见，上线时需注掉如下判断
        if (!host) {
          return '*'
        }
        for (let i in SystemConfig.accessHost) {
          if (host.includes(SystemConfig.accessHost[i])) {
            isIncludes = true
            break
          }
        }
        if (isIncludes) {
          return host
        }
        return SystemConfig.host
      },
      exposeHeaders: [],
      maxAge: 5,
      credentials: true,
      allowMethods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Content-Length', 'Authorization', 'Accept', 'X-Requested-With', 'Origin']
    })),
    convert(bodyParser({
      strict: false,
      jsonLimit: '20mb',
      formLimit: '10mb',
      textLimit: '20mb'
    })),
    convert(session(app))
  ])
}
