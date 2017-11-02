/**
 * Created by OXOYO on 2017/11/2.
 */

import { configure, getLogger } from 'log4js'
import { Log as LogConfig } from '../config'

// 格式化响应日志
const formatRes = (ctx, ms) => {
  let tmpArr = []

  tmpArr.push('\n' + '********** RESPONSE START **********' + '\n\n')
  tmpArr.push(formatReq(ctx.request, ms) + '\n')
  tmpArr.push('  response status: ' + ctx.status + '\n')
  tmpArr.push('  response body: ' + '\n  ' + JSON.stringify(ctx.body) + '\n\n')
  tmpArr.push('********** RESPONSE END **********' + '\n')

  return tmpArr.join('')
}

// 格式化错误日志
const formatError = (ctx, err, ms) => {
  let tmpArr = []

  tmpArr.push('\n' + '********** ERROR START **********' + '\n\n')
  tmpArr.push(formatReq(ctx.request, ms))
  tmpArr.push('  err name: ' + err.name + '\n')
  tmpArr.push('  err message: ' + err.message + '\n')
  tmpArr.push('  err stack: ' + err.stack + '\n\n')
  tmpArr.push('********** ERROR END **********' + '\n')

  return tmpArr.join('')
}

// 格式化请求日志
const formatReq = (req, ms) => {
  let tmpArr = []

  tmpArr.push('  request method: ' + req.method + '\n')
  tmpArr.push('  request originalUrl: ' + req.originalUrl + '\n')
  tmpArr.push('  request client ip: ' + req.ip + '\n')
  if (req.method === 'GET') {
    tmpArr.push('  request query: ' + JSON.stringify(req.query) + '\n')
  } else {
    tmpArr.push('  request body: ' + '\n  ' + JSON.stringify(req.body) + '\n')
  }
  tmpArr.push('  response time: ' + ms + '\n')

  return tmpArr.join('')
}

// 加载配置文件
configure(LogConfig)

// log 中间件
export const log = {
  error: (ctx, error, ms) => {
    if (ctx && error) {
      getLogger('error').error(formatError(ctx, error, ms))
    }
  },
  response: (ctx, ms) => {
    if (ctx) {
      getLogger('result').info(formatRes(ctx, ms))
    }
  }
}
