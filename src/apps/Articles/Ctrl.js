/**
 * Created by yangfan9244 on 2017/10/27.
 */

import Model from './Model'

export default {
  getList: async (ctx, next) => {
    await next()
    let reqQuery = ctx.query
    // 查询结果
    let res = await Model.getList(reqQuery)
    // 处理结果
    if (res) {
      res = {
        code: 200,
        msg: '查询账号列表成功！',
        data: {
          count: res.count,
          list: res.rows
        }
      }
    } else {
      res = {
        code: 5000,
        msg: '查询账号列表失败！',
        data: {}
      }
    }

    ctx.body = res || {}
  },
  // 添加账号
  doAdd: async (ctx, next) => {
    await next()
    // 查询结果
    let reqBody = ctx.request.body
    let data = {
      ...reqBody
    }
    let res
    if (data && data.title && data.content) {
      res = await Model.doAdd(data)
      // 最后一项为插入成功与否标识
      let [resAccount] = res
      let isSuccess = res.pop()
      // 处理结果
      if (isSuccess) {
        res = {
          code: 200,
          msg: '添加文章成功！',
          data: resAccount
        }
      } else if (resAccount) {
        res = {
          code: 5000,
          msg: '添加文章失败，该文章已存在！',
          data: resAccount
        }
      } else {
        res = {
          code: 5000,
          msg: '添加文章失败！',
          data: {}
        }
      }
    } else {
      res = {
        code: 5001,
        msg: '添加文章失败，上送参数有误！',
        data: {}
      }
    }

    ctx.body = res || {}
  },
  doUpdate: async (ctx, next) => {
    await next()
    let reqBody = ctx.request.body
    let data = {
      ...reqBody
    }
    let res
    if (data) {
      res = await Model.doUpdate(data)
      // 处理结果
      if (res) {
        let detail = await Model.getDetail(data)
        res = {
          code: 200,
          msg: '编辑文章成功！',
          data: detail
        }
      } else {
        res = {
          code: 5000,
          msg: '编辑文章失败！',
          data: {}
        }
      }
    } else {
      res = {
        code: 5001,
        msg: '编辑文章失败，上送参数有误！',
        data: {}
      }
    }

    ctx.body = res || {}
  },
  doRemove: async (ctx, next) => {
    await next()
    let reqBody = ctx.request.body
    let data = reqBody
    let res
    if ((Object.keys(data)).length) {
      res = await Model.doRemove(data)
      // 处理结果
      if (res) {
        res = {
          code: 200,
          msg: '删除文章成功！',
          data: res
        }
      } else {
        res = {
          code: 5000,
          msg: '删除文章失败！',
          data: {}
        }
      }
    } else {
      res = {
        code: 5001,
        msg: '删除文章失败，上送参数有误！',
        data: {}
      }
    }

    ctx.body = res || {}
  }
}
