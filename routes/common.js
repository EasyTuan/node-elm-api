import express from 'express';
const router = express.Router();

import HomeData from '../controller/common/homeData';
import Position from '../controller/common/position';

/**
 * @api {get} /common/getHomeData getHomeData
 * @apiDescription 获取首页导航栏信息
 * @apiGroup common
 * @apiVersion 1.0.0
 * 
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Array} data 返回首页导航栏信息
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": null,
 *        "data": []
 *      }
 *
 */
router.get('/getHomeData', HomeData.getHomeData);
/**
 * @api {get} /common/getAddress getAddress
 * @apiDescription 获取ip地理位置信息
 * @apiGroup common
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {Object} data 返回ip地理位置信息
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "data": {}
 *      }
 *
 */
router.get('/getAddress', Position.getAddress);

export default router;