/**
 * Created by OXOYO on 2017/10/23.
 */

import Model from './Model'

export default {
  getList: async (ctx, next) => {
    await next()
    console.log('Enter getList Ctrl.')
    let reqQuery = ctx.query
    // 查询结果
    let res = await Model.getList(reqQuery)
    // let res = {
    //   count: 100,
    //   list: []
    // }
    // 处理结果
    if (res) {
      res = {
        code: 200,
        msg: '查询列表成功！',
        data: {
          count: res.count,
          list: res.list
        }
      }
    } else {
      res = {
        code: 5000,
        msg: '查询列表失败！',
        data: {}
      }
    }

    ctx.body = res || {}
  }
}
