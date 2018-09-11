import UserModel from '../../models/user/user'
import crypto from 'crypto';
import dtime from 'time-formater';
import uuid from 'uuid/v1';

class Admin {
	constructor() {
		this.login = this.login.bind(this);
		this.encryption = this.encryption.bind(this);
		this.retsetPassword = this.retsetPassword.bind(this);
	}
	async login(req, res, next) {
		const {
			mobile,
			password
		} = req.body;
		try {
			if(!mobile) {
				throw new Error('用户名参数错误');
			} else if(!password) {
				throw new Error('密码参数错误');
			}
		} catch(err) {
			res.send({
				code: -1,
				msg: err.message,
				data: null
			})
			return;
		}
		const newpassword = this.encryption(password);
		try {
			const user = await UserModel.findOne({
				mobile
			})
			if(!user) {
				const user_id = uuid();
				const newUser = {
					user_id,
					mobile,
					password: newpassword,
					username: uuid().slice(0, 8),
					create_time: dtime().format('YYYY-MM-DD HH:mm:ss'),
				}
				await UserModel.create(newUser)
				this.selectUserInfo(res, user_id);
			} else if(newpassword.toString() != user.password.toString()) {
				res.send({
					code: -1,
					msg: '该用户已存在，密码输入错误',
					data: null
				})
			} else {
				res.send({
					code: 0,
					msg: '登录成功',
					data: user
				})
			}
		} catch(err) {
			res.send({
				code: -1,
				msg: String(err),
				data: null,
			})
		}
	}
	encryption(password) {
		const newpassword = this.Md5(this.Md5(password).substr(3, 12) + this.Md5(password));
		return newpassword;
	}
	Md5(password) {
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
	}
	async getUserInfo(req, res, next) {
		this.selectUserInfo(res, req.body.user_id);
	}
	async selectUserInfo(res, user_id) {
		if(!user_id) {
			res.send({
				code: -1,
				msg: '获取用户信息失败',
				data: null
			})
			return;
		}
		try {
			const info = await UserModel.findOne({
				user_id: user_id
			});
			if(!info) {
				throw new Error('用户不存在')
			} else {
				res.send({
					code: 0,
					msg: '获取用户信息成功',
					data: info
				})
			}
		} catch(err) {
			res.send({
				code: -1,
				msg: err.message,
				data: null
			})
		}
	}
	async retsetName(req, res, next) {
		const {
			username
		} = req.body;
		const {
			userInfo
		} = req.cookies;
		try {
			if(!username) {
				throw new Error('用户名不可为空');
			} else if(username.length < 2 || username.length > 24) {
				throw new Error('用户名长度不合法');
			} else if(!userInfo || !JSON.parse(userInfo).user_id) {
				throw new Error('登录已过期');
			}
		} catch(err) {
			res.send({
				code: -1,
				msg: err.message,
				data: null
			})
			return;
		}
		try {
			const info = await UserModel.findOneAndUpdate({
				user_id: JSON.parse(userInfo).user_id
			}, {
				$set: {
					username
				}
			});
			if(!info) {
				throw new Error('用户不存在')
			} else {
				res.send({
					code: 0,
					msg: '更新用户信息成功',
					data: info
				})
			}
		} catch(err) {
			res.send({
				code: -1,
				msg: err.message,
				data: null
			})
		}
	}
	async retsetPassword(req, res, next) {
		const {
			oldpassword,
			newpassword
		} = req.body;
		const {
			userInfo
		} = req.cookies;
		try {
			if(!oldpassword) {
				throw new Error('请输入旧密码');
			} else if(!newpassword) {
				throw new Error('请输入新密码');
			} else if(!userInfo || !JSON.parse(userInfo).user_id) {
				throw new Error('登录已过期');
			}
		} catch(err) {
			res.send({
				code: -1,
				msg: err.message,
				data: null
			})
			return;
		}
		try {
			const info = await UserModel.findOneAndUpdate({
				user_id: JSON.parse(userInfo).user_id,
				password: this.encryption(oldpassword)
			}, {
				$set: {
					password: this.encryption(newpassword)
				}
			});
			if(!info) {
				throw new Error('原密码错误，请重新输入')
			} else {
				res.send({
					code: 0,
					msg: '更新密码成功',
					data: info
				})
			}
		} catch(err) {
			res.send({
				code: -1,
				msg: err.message,
				data: null
			})
		}
	}
}

export default new Admin()