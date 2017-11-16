/**
 * Created by OXOYO on 2017/10/23.
 */

import jsonwebtoken from 'jsonwebtoken'
import { Cookie as CookieConfig } from './config'

export default {
  // 生成token
  sign: function (data) {
    let token = jsonwebtoken.sign(data, CookieConfig.keys.secret, { expiresIn: '1d' })
    return token
  },
  // token 验证
  verify: async function (ctx, next) {
    // 支持多种方式传递token
    let key = CookieConfig.keys.token
    console.log('ctx.query', typeof ctx.query, ctx.query.hasOwnProperty)
    let token
    let decoded
    // 校验结果
    let verifyRes = {
      // 标识
      flag: false,
      // 数据
      data: {}
    }
    if (ctx.body && Object.prototype.hasOwnProperty.call(ctx.body, key)) {
      token = ctx.body[key]
    } else if (ctx.query && Object.prototype.hasOwnProperty.call(ctx.query, key)) {
      token = ctx.query[key]
    } else if (ctx.headers && Object.prototype.hasOwnProperty.call(ctx.headers, key)) {
      token = ctx.headers[key]
    } else {
      token = null
    }
    console.log('verify token', token)
    // 1.判断是否存在token
    if (token) {
      try {
        // 2.1.verify验证token
        decoded = jsonwebtoken.verify(token, CookieConfig.keys.secret)
        console.log('decoded', decoded, new Date() / 1000)
        // 2.1.验证token是否过期
        if (decoded.exp * 1000 <= new Date()) {
          verifyRes = {
            flag: false,
            data: {
              status: 9999,
              msg: 'token过期！请重新登录！',
              data: {}
            }
          }
        } else {
          verifyRes = {
            flag: true,
            data: {}
          }
        }
      } catch (err) {
        verifyRes = {
          flag: false,
          data: {
            status: 9999,
            msg: 'token校验失败！请重新登录！',
            data: err
          }
        }
      }
    } else {
      verifyRes = {
        flag: false,
        data: {
          status: 9999,
          msg: 'token无效！请重新登录！',
          data: {}
        }
      }
    }
    // 判断校验结果，分别处理
    if (verifyRes.flag) {
      // token有效，传递给上下文
      ctx['userInfo'] = decoded
      await next()
    } else {
      // token无效，直接返回
      await next()
      ctx.body = verifyRes.data
    }
  }
}
