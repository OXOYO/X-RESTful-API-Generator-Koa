/**
 * Created by OXOYO on 2017/10/23.
 */

// 实现动态加载路由
const requireDirectory = require('require-directory')
const routersObj = {}

// 解析apps路由
let apps = requireDirectory(module, './apps')
for (let key in apps) {
  let routers = apps[key]['Routers']
  routersObj[key] = routers.default
}
console.log(routersObj)
export default routersObj
