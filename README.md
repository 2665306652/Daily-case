
### webpack 基础框架结构
* 结构说明
    * `config/html.json` 编辑存放所需html的文档结构
    * `src` 生产环境
    * `web` 文件产出目录
    * `.gitignore` git上传过滤文件说明
* 命令说明
    * `cd app/admins`
    * `npm install`
    * `npm run d` 监听文件修改自动编辑(无服务器环境,需要配合第三方服务器工具使用,比如php环境,anywhere的node环境等)
    * `npm run dev` webpack集成的node环境,无法支持php语言,同时使用的时候有个一个注意点`第一次或者文件新增之后需要手动npm run d 生成文件在支持npm run dev,否则无法支持热更新`,
* 项目压缩打包
    * `npm build` web文件夹里面就是生成的文件
* 注意事项
    * 请保证本地host里面有 `127.0.0.1 localhost`,否则dev环境无法正常启动
    * 目前src里面放的都是事例文件夹，根据实际情况修改使用
    * 后端文件请全部放在admins
### master-admin
* 说明
    * 通用的后台管理框架，提供整体框架结构和基础的功能模块
* 结构说明
    * `admin/pages` 存储后端界面,使用react-router路由
    * `admin/public` 存储资源文件,包括但不限于`img,template,css,js`
    * `admin/commpant` 存放react通用组件
* 特殊说明
    * 
  
这个是一个自己的案列（包含简单的小逻辑和计算器）      