import express from 'express';
const router = express.Router();

import restaurantsData from '../controller/shopping/restaurants'

/**
 * @api {get} /shopping/restaurants restaurants
 * @apiDescription 获取商家列表
 * @apiGroup shopping
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Array} data 返回商家列表信息
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
router.get('/restaurants', restaurantsData.restaurants);

export default router;