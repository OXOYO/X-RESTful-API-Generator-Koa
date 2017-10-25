/**
 * Created by OXOYO on 2017/10/25.
 */

export default function statusParser () {
  let handleResponse = (code, msg, data) => {
    return {
      code: code,
      msg: msg,
      data: data || {}
    }
  }
  return async (ctx, next) => {
    try {
      await next()
      const status = ctx.status || 404
      console.log('status', status)
      if (status === 404) {
        ctx.throw(400)
      }
    } catch (err) {
      const status = err.status || 400
      if (status === 400) {
        ctx.body = handleResponse(ctx.status, ctx.message, ctx.body)
      } else {
        ctx.app.emit('error', err, ctx)
      }
    }
  }
}
