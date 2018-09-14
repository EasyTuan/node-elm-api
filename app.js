import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import config from 'config-lite';
import db from './mongodb/db.js';
import router from './routes/index.js';
import chalk from 'chalk';

const app = express();

//设置跨域白名单
const corsOptions = {
  origin: 'http://elm.caibowen.net',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

// 用于接收post参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// 用于接收cookie
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public'), {
	maxAge: '30 days'
}));

app.get('/',(req, res, next) => {
	res.send('欢迎访问elm-api后台系统，<a href="https://easytuan.gitee.io/node-elm-api/doc" target="_blank">API文档地址</a>');
})

router(app);

app.use((req, res, next) => {
	res.send(404);
})

app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});