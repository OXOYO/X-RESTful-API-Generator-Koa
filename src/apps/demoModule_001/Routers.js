/**
 * Created by OXOYO on 2017/10/23.
 */

import Ctrl from './Ctrl'
import auth from '../../auth'

const namespace = '/demoModule_001/'

export default (router) => {
  router
    .get(namespace + 'list', Ctrl.getList)
}
