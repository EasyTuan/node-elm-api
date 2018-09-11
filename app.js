import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import config from 'config-lite';
import db from './mongodb/db.js';
import router from './routes/index.js';
import chalk from 'chalk';

const app = express();

//用于接收post参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

//用于接收cookie
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public'), {
	maxAge: '30 days'
}));
app.use(express.static(path.join(__dirname, 'doc'), {
	maxAge: '1 days'
}));

router(app);

app.use((req, res, next) => {
	res.send(404);
})

app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});