# Foreword

A background system built on node.js + mongodb provides interface services for [nuxt-elm] (https://github.com/EasyTuan/nuxt-elm).

In case of poor network, please move to [Domestic Mirror Acceleration Node] (https://gitee.com/easytuan/node-elm-api)

# Show results

[Front URL please poke here] (https://elm.caibowen.net/) (please preview with chrome phone mode)

### Mobile scanning the QR code below

<img src="./screenshots/qr-code.png" width="250" height="250"/>

# API interface documentation

[Interface document address](https://easytuan.gitee.io/node-elm-api/doc)（Based on apidoc）

# Technology stack

nodejs + express + mongodb + mongoose + pm2

## Project operation

```

git clone git@github.com:EasyTuan/node-elm-api.git

cd nuxt-elm

npm install

npm run dev

```

### 1.2 development process

#### 1.2.1 command

```sh

# Development
npm run dev

# Start mongodb（Make sure mongodb is installed）
npm run mongod

# Open the browser GUI interface to view mongodb (default port 1234)
npm run mongo

# Generate an api document (based on apidoc)
npm run doc

# Production deployment (pm2 process daemon)
npm run start

```

# Target function
- [x] Merchant list -- finished
- [x] Shopping cart -- finished
- [x] Restaurant food list -- finished
- [x] Store evaluation -- finished
- [x] Business details -- finished
- [x] log in Register -- finished
- [x] change Password -- finished
- [x] Personal center -- finished
- [x] Red envelope -- finished
- [x] Shipping address -- finished


# Directory Structure

	├── config
	│   ├── default.js
	│   └── development.js
	├── controller
	│   ├── common
	│   │   ├── homeData.js
	│   │   └── position.js
	│   ├── shopping
	│   │   ├── business.js
	│   │   └── restaurants.js
	│   └── user
	│       ├── address.js
	│       └── user.js
	├── doc
	├── InitData
	│   ├── business.js
	│   ├── home.js
	│   └── restaurants.js
	├── models
	│   ├── common
	│   │   └── common.js
	│   ├── shopping
	│   │   ├── business.js
	│   │   └── restaurants.js
	│   └── user
	│       ├── address.js
	│       └── user.js
	├── mongodb
	│   └── db.js
	├── public
	├── routes
	│   ├── common.js
	│   ├── index.js
	│   ├── shopping.js
	│   └── user.js
	├── screenshots
	├── .babelrc 
	├── .gitignore
	├── app.js
	├── COPYING
	├── index.js
	├── package.json
	└── README.md                  


## Partial screenshot display

### Home show

<img src="screenshots/1.png" width="375px" height="667px" /> <img src="screenshots/1.gif" width="375px" height="667px" />

### personal information

<img src="screenshots/2.png" width="375px" height="667px" /> <img src="screenshots/2.gif" width="375px" height="667px" />

### mine

<img src="screenshots/3.png" width="375px" height="667px" /> <img src="screenshots/3.gif" width="375px" height="667px" />

### Ordering

<img src="screenshots/4.png" width="375px" height="667px" /> <img src="screenshots/4.gif" width="375px" height="667px" />

### Merchant evaluation

<img src="screenshots/5.png" width="375px" height="667px" /> <img src="screenshots/5.gif" width="375px" height="667px" />



# Description

>  If it helps, you can click on the "Star" support in the upper right corner. Thank you！ ^_^

>  Or you can "follow" it, I will continue to open up more interesting projects.

>  Development environment macOS 10.13.4 nodejs 8.11.3 Mongodb 4.0.1

>  Deployment environment AWS CentOS 6.8 64位

>  If you have any questions, please do so directly in the Issues, or you find the problem and have a very good solution, welcome PR 👍


# Donation

If you are helpful, welcome to reward

<img src="screenshots/wechat.jpg" width="200px" /> <img src="screenshots/alipay.jpg" width="200px" />

# Links

[Project background address](https://github.com/EasyTuan/node-elm-api)

# License

[GPL](LICENSE)
