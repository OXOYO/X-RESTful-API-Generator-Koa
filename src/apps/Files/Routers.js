/**
 * Created by OXOYO on 2017/11/1.
 */

import Ctrl from './Ctrl'

const namespace = '/files/'

export default (router) => {
  router
    // full path:
    // http://localhost:3000/x-restful-api-generator-koa/files/upload
    .post(namespace + 'upload', Ctrl.doUpload)
}
