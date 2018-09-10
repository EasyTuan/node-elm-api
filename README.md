# 前言

为[nuxt-elm](https://github.com/EasyTuan/nuxt-elm)提供接口服务。

如遇网络不佳，请移步[国内镜像加速节点](https://gitee.com/easytuan/node-elm-api)

# 效果演示

[前端网址请戳这里](http://47.100.122.91:3000/)（请用chrome手机模式预览）

### 移动端扫描下方二维码

<img src="./screenshots/qr-code.png" width="250" height="250"/>

# API接口文档

[接口文档地址](http://47.100.122.91:9000/)（基于apidoc）

# 技术栈

nodejs + express + mongodb + mongoose + es6/7

## 项目运行

```

git clone git@github.com:EasyTuan/node-elm-api.git

cd nuxt-elm

npm install

npm run dev

```

### 1.2 开发过程

#### 1.2.1 命令

```sh

# 开发
npm run dev

# 启动mongodb（确保已经安装了mongodb）
npm run mongod

# 开启浏览器GUI界面查看mongodb（默认端口1234）
npm run mongo

# 生成api文档（基于apidoc）
npm run doc

# 生产部署（pm2进程守护）
npm run start

```

# 目标功能
- [x] 商家列表 -- 完成
- [x] 购物车功能 -- 完成
- [x] 餐馆食品列表页 -- 完成
- [x] 店铺评价页面 -- 完成
- [x] 商家详情页 -- 完成
- [x] 登录、注册 -- 完成
- [x] 修改密码 -- 完成
- [x] 个人中心 -- 完成
- [x] 红包 -- 完成


目录结构

	├── config                          // 配置文件
	│   ├── default.js                  // 默认配置
	│   └── development.js              // 开发环境
	├── controller                      // 处理中心，负责路由及数据库的具体操作
	│   ├── common
	│   │   ├── homeData.js             // 首页数据
	│   │   └── position.js             // 根据ip获取位置
	│   ├── shopping
	│   │   ├── business.js             // 餐馆详情
	│   │   └── restaurants.js          // 商家列表
	│   └── user
	│       └── user.js                 // 用户中心
	├── doc                             // apidoc自动生成的静态文档
	├── InitData                        // 模拟数据
	│   ├── business.js
	│   ├── home.js
	│   └── restaurants.js
	├── models                          // 模型(数据库)
	│   ├── common
	│   │   └── common.js               // 通用模型
	│   ├── shopping
	│   │   ├── business.js             // 餐馆详情模型
	│   │   └── restaurants.js          // 商家列表模型
	│   └── user
	│       └── user.js                 // 用户中心
	├── mongodb                         // 连接数据库
	│   └── db.js
	├── public                          // 静态资源目录
	├── routes                          // 路由配置
	│   ├── common.js                   // 通用
	│   ├── index.js                    // 路由配置主文件
	│   ├── shopping.js                 // 餐馆、食品
	│   └── user.js                     // 用户中心
	├── screenshots                     // 项目截图
	├── .babelrc 
	├── .gitignore
	├── app.js                          // 基础配置
	├── COPYING                         // GPL协议
	├── index.js                        // 入口文件
	├── package.json
	└── README.md                  

## 部分截图展示

### 首页展示

<img src="screenshots/1.png" width="375px" height="667px" /> <img src="screenshots/1.gif" width="375px" height="667px" />

### 个人资料

<img src="screenshots/2.png" width="375px" height="667px" /> <img src="screenshots/2.gif" width="375px" height="667px" />

### 我的

<img src="screenshots/3.png" width="375px" height="667px" /> <img src="screenshots/3.gif" width="375px" height="667px" />

### 订餐

<img src="screenshots/4.png" width="375px" height="667px" /> <img src="screenshots/4.gif" width="375px" height="667px" />

### 商家评价

<img src="screenshots/5.png" width="375px" height="667px" /> <img src="screenshots/5.gif" width="375px" height="667px" />

# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 macOS 10.13.4 nodejs 8.11.3 Mongodb 4.0.1

>  部署环境 阿里云 windows server 2012 r2 64位

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

# 捐助

如有帮助，欢迎打赏

<img src="screenshots/wechat.jpg" width="200px" /> <img src="screenshots/alipay.jpg" width="200px" />

# 友情链接

[前端项目传送地址](https://github.com/EasyTuan/nuxt-elm)

# License

[GPL](LICENSE)
