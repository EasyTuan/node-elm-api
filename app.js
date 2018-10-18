import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import config from 'config-lite';
import db from './mongodb/db.js';
import router from './routes/index.js';
import chalk from 'chalk';
import cors from 'cors';

const app = express();

// 允许跨域白名单
app.use(cors({origin: /\.caibowen\.net$/}));

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