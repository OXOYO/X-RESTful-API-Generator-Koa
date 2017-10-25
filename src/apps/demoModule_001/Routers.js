/**
 * Created by OXOYO on 2017/10/23.
 */

import Ctrl from './Ctrl'
import auth from '../../auth'

const namespace = '/demoModule_001/'

export default (router) => {
  router
    .get(namespace + 'verify/list', auth.verify, Ctrl.getList)
    .get(namespace + 'list', Ctrl.getList)
}
