import express from 'express';
import bodyParser from 'body-parser';
import config from 'config-lite';
import db from './mongodb/db.js';
import router from './routes/index.js';
import chalk from 'chalk';

const app = express();

app.use(express.static('./public'));

//用于接收post参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use((req, res, next)=> {
	res.send(404);
})

app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});