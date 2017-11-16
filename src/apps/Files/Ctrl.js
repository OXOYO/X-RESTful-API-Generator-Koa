/**
 * Created by OXOYO on 2017/11/1.
 */
const path = require('path')
const multer = require('koa-multer')

export default {
  doUpload: async (ctx, next) => {
    await next()
    let uploadDir = 'assets/uploads/'
    // 配置
    let storage = multer.diskStorage({
      // 文件保存路径
      destination: (req, file, cb) => {
        cb(null, path.resolve(uploadDir))
      },
      // 文件重命名
      filename: (req, file, cb) => {
        let originalnameArr = file.originalname.split('.')
        let postfix = originalnameArr[originalnameArr.length - 1]
        console.log('originalnameArr', originalnameArr)
        let timeNow = Date.now()
        cb(null, timeNow + '.' + postfix)
      }
    })
    // 上传实例
    let upload = multer({
      storage: storage
    })
    // 执行单文件上传
    let handle = await upload.single('file')
    let response = await handle(ctx)
    console.log('upload res', response)
    let res
    if (response) {
      res = {
        status: 200,
        msg: '上传成功！',
        data: {
          file: response.req.file,
          filename: response.req.file.filename,
          url: '//' + response.request.header.host + '/' + uploadDir + response.req.file.filename
        }
      }
    } else {
      res = {
        status: 5000,
        msg: '上传失败！',
        data: response
      }
    }
    ctx.body = res || {}
  }
}
