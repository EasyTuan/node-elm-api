import express from 'express';
const router = express.Router();

import restaurantsData from '../controller/shopping/restaurants'
import businessListData from '../controller/shopping/business'

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

/**
 * @api {get} /shopping/seller seller
 * @apiDescription 获取商家详情
 * @apiGroup shopping
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Object} data 返回商家详情信息
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": null,
 *        "data": {}
 *      }
 *
 */
router.get('/seller', businessListData.seller);

/**
 * @api {get} /shopping/goods goods
 * @apiDescription 获取商家餐品列表
 * @apiGroup shopping
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Array} data 返回商家餐品列表
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
router.get('/goods', businessListData.goods);

/**
 * @api {get} /shopping/ratings ratings
 * @apiDescription 获取商家评价列表
 * @apiGroup shopping
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Array} data 返回商家评价列表
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
router.get('/ratings', businessListData.ratings);

export default router;