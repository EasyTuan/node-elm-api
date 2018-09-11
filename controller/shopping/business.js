import businesssModel from '../../models/shopping/business';

class businessListData {
	async seller(req, res, next) {
		try {
			const businessList = await businesssModel.findOne();
			res.send({
				code: 0,
				msg: null,
				data: businessList.seller
			});
		} catch(err) {
			res.send({
				code: -1,
				msg: '获取商家信息失败',
				data: []
			})
		}
	}
	async goods(req, res, next) {
		try {
			const businessList = await businesssModel.findOne();
			res.send({
				code: 0,
				msg: null,
				data: businessList.goods
			});
		} catch(err) {
			res.send({
				code: -1,
				msg: '获取商家信息失败',
				data: []
			})
		}
	}
	async ratings(req, res, next) {
		try {
			const businessList = await businesssModel.findOne();
			res.send({
				code: 0,
				msg: null,
				data: businessList.ratings
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

export default new businessListData();