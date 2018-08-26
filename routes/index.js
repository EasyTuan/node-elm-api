import common from './common';
import shopping from './shopping';
import user from './user';

export default app => {
	app.use('/common', common);
	app.use('/shopping', shopping);
	app.use('/user', user);
}