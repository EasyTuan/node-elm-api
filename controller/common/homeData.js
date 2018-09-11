import homeDataModel from '../../models/common/homeDataModel';

class HomeData {
	async getHomeData(req, res, next) {
		try {
			const homeDataList = await homeDataModel.find();
			res.send({
				code: 0,
				msg: null,
				data: homeDataList
			});
		} catch(err) {
			res.send({
				code: -1,
				msg: '获取首页导航信息失败',
				data: []
			})
		}
	}
}

export default new HomeData();