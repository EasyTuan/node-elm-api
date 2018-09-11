import mongoose from 'mongoose';
import homeData from '../../InitData/home';

const Schema = mongoose.Schema;

const homeDataSchema = new Schema({
	imgUrl: String,
	text: String,
})

homeDataSchema.index({
	id: 1
});

const HomeData = mongoose.model('HomeData', homeDataSchema);

//如果数据库为空，添加初始化数据
HomeData.findOne((err, data) => {
	if(!data) {
		homeData.forEach(item => {
			HomeData.create(item);
		})
	}
})

export default HomeData