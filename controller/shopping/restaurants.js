import restaurantsModel from '../../models/shopping/restaurants';

class restaurantsData {
	async restaurants(req, res, next) {
		try {
			const restaurantsList = await restaurantsModel.find();
			res.send({
				code: 0,
				msg: null,
				data: restaurantsList
			});
		} catch(err) {
			res.send({
				code: -1,
				msg: '获取商家信息失败',
				data: []
			})
		}
	}
}

export default new restaurantsData();