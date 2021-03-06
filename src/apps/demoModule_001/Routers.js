/**
 * Created by OXOYO on 2017/10/23.
 */

import Ctrl from './Ctrl'
import auth from '../../auth'

const namespace = '/demoModule_001/'

export default (router) => {
  router
    // full path: http://localhost:3000/x-restful-api-generator-koa/demoModule_001/verify/list
    .get(namespace + 'verify/list', auth.verify, Ctrl.getList)
    // full path: http://localhost:3000/x-restful-api-generator-koa/demoModule_001/list
    .get(namespace + 'list', Ctrl.getList)
    // full path: http://localhost:3000/x-restful-api-generator-koa/demoModule_001/login
    .get(namespace + 'login', Ctrl.doLogin)
}
