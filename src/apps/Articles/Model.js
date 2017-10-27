/**
 * Created by yangfan9244 on 2017/10/27.
 */

import db from '../../db'

const articlesModel = '../../schema/articles'
const articlesSchema = db.import(articlesModel)

export default {
  getList: async (data) => {
    let options = {}
    // 处理分页
    let pageSize = data.pageSize || 10
    let currentPage = data.currentPage || 1
    options['limit'] = parseInt(pageSize)
    options['offset'] = parseInt((currentPage - 1) * pageSize)
    // 拼装where条件
    let whereObj = {}
    // 处理关键词过滤
    let filterType = data.filterType || null
    if (filterType && data.keywords) {
      // 模糊匹配
      whereObj[filterType] = {
        $like: '%' + data.keywords + '%'
      }
    }
    if ((Object.keys(whereObj)).length) {
      options['where'] = whereObj
    }
    let res = await articlesSchema.findAndCountAll(options)
    return res
  },
  // 添加账号
  doAdd: async (data) => {
    let res = await articlesSchema.findOrCreate({
      where: {
        title: data.title
      },
      defaults: data
    })
    return res
  },
  doUpdate: async (data) => {
    let res = await articlesSchema.update(data, {
      where: {
        id: data.id
      }
    })
    return res
  },
  doRemove: async (data) => {
    // 删除账号
    let res = await articlesSchema.destroy({
      'where': {
        'id': Object.values(data)
      }
    })
    return res
  },
  getDetail: async (data) => {
    let res = await articlesSchema.findById(data.id)
    return res
  }
}
