import mongoose from 'mongoose';
import business from '../../InitData/business';

const Schema = mongoose.Schema;

const businessDataSchema = new Schema({
	"seller": {},
	"goods": [],
	"ratings": [],
})

businessDataSchema.index({
	id: 1
});

const BusinessData = mongoose.model('BusinessData', businessDataSchema);

//如果数据库为空，添加初始化数据
BusinessData.findOne((err, data) => {
	if(!data) {
		business.forEach(item => {
			BusinessData.create(item);
		})
	}
})

export default BusinessData