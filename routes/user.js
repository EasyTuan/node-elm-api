import express from 'express';
const router = express.Router();

import user from '../controller/user/user';
import address from '../controller/user/address';

/**
 * @api {post} /user/login login
 * @apiDescription 用户登陆(新用户自动注册)
 * @apiGroup user
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} mobile     手机号
 * @apiParam {String} password   密码
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Object} data 返回用户信息
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": "登录成功",
 *        "data": {
 * 	 "_id":"5b7a61bo5661e20e3o8e7764",
 * 	 "user_id":"f5d746a1-adkk-11e6-8146-0b4ccjkd1fd5",
 * 	 "mobile":"13818334060",
 * 	 "password":"F3kcH9qCfhvrFYeop2s8AC==",
 * 	 "username":"啦啦啦",
 * 	 "create_time":"2018-09-01 17:54:04",
 * 	 "__v":0,	
 * 	 "avatar":null
 * 	}
 *      }
 *
 */
router.post('/login', user.login);

/**
 * @api {post} /user/retsetName retsetName
 * @apiDescription 修改用户名
 * @apiGroup user
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} username     用户名
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Object} data 返回用户信息
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": "更新用户信息成功",
 *        "data": {
 * 	 "_id":"5b7a61bo5661e20e3o8e7764",
 * 	 "user_id":"f5d746a1-adkk-11e6-8146-0b4ccjkd1fd5",
 * 	 "mobile":"13818334060",
 * 	 "password":"F3kcH9qCfhvrFYeop2s8AC==",
 * 	 "username":"啦啦啦",
 * 	 "create_time":"2018-09-01 17:54:04",
 * 	 "__v":0,	
 * 	 "avatar":null
 * 	}
 *      }
 *
 */
router.post('/retsetName', user.retsetName);

/**
 * @api {post} /user/retsetPassword retsetPassword
 * @apiDescription 修改密码
 * @apiGroup user
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} oldpassword     原始密码
 * @apiParam {String} newpassword     新密码
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Object} data 返回用户信息
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": "更新密码成功",
 *        "data": {
 * 	 "_id":"5b7a61bo5661e20e3o8e7764",
 * 	 "user_id":"f5d746a1-adkk-11e6-8146-0b4ccjkd1fd5",
 * 	 "mobile":"13818334060",
 * 	 "password":"F3kcH9qCfhvrFYeop2s8AC==",
 * 	 "username":"啦啦啦",
 * 	 "create_time":"2018-09-01 17:54:04",
 * 	 "__v":0,	
 * 	 "avatar":null
 * 	}
 *      }
 *
 */
router.post('/retsetPassword', user.retsetPassword);

/**
 * @api {get} /user/getAddress getAddress
 * @apiDescription 获取用户地址列表
 * @apiGroup user
 * @apiVersion 1.0.0
 * 
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Array} data 返回用户地址列表
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": "更新密码成功",
 *        "data": []
 *      }
 *
 */
router.get('/getAddress', address.getAddress);

/**
 * @api {get} /user/getAddAddressById getAddAddressById
 * @apiDescription 获取用户地址详情
 * @apiGroup user
 * @apiVersion 1.0.0
 * 
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Object} data 返回用户地址
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": "获取地址信息成功",
 *        "data": {}
 *      }
 *
 */
router.get('/getAddAddressById', address.getAddAddressById);

/**
 * @api {post} /user/addAddress addAddress
 * @apiDescription 添加用户地址
 * @apiGroup user
 * @apiVersion 1.0.0
 * 
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {null} data 
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": "添加地址成功",
 *        "data": null
 *      }
 *
 */
router.post('/addAddress', address.addAddress);

/**
 * @api {delete} /user/deleteAddress deleteAddress
 * @apiDescription 删除用户地址
 * @apiGroup user
 * @apiVersion 1.0.0
 * 
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {null} data 
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": "删除地址成功",
 *        "data": null
 *      }
 *
 */
router.delete('/deleteAddress', address.deleteAddress);

export default router;