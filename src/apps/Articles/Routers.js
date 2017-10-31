/**
 * Created by OXOYO on 2017/10/27.
 */

import Ctrl from './Ctrl'
import auth from '../../auth'

const namespace = '/articles/'

export default (router) => {
  router
    // full path:
    // http://localhost:3000/x-restful-api-generator-koa/articles/verify/list
    .get(namespace + 'verify/list', auth.verify, Ctrl.getList)
    // full path:
    // http://localhost:3000/x-restful-api-generator-koa/articles/list
    .get(namespace + 'list', Ctrl.getList)
    // full path:
    // http://localhost:3000/x-restful-api-generator-koa/articles/add
    .post(namespace + 'add', Ctrl.doAdd)
    // full path:
    // http://localhost:3000/x-restful-api-generator-koa/articles/update
    .post(namespace + 'update', Ctrl.doUpdate)
    // full path:
    // http://localhost:3000/x-restful-api-generator-koa/articles/remove
    .post(namespace + 'remove', Ctrl.doRemove)
}
