import mongoose from 'mongoose';
import restaurants from '../../InitData/restaurants';

const Schema = mongoose.Schema;

const restaurantsDataSchema = new Schema({
	"name": String,
	"address": String,
	"id": Number,
	"latitude": Number,
	"longitude": Number,
	"location": [],
	"phone": String,
	"category": String,
	"supports": [],
	"status": Number,
	"recent_order_num": Number,
	"rating_count": Number,
	"rating": Number,
	"promotion_info": String,
	"piecewise_agent_fee": {},
	"opening_hours": [],
	"license": {},
	"is_new": Boolean,
	"is_premium": Boolean,
	"image_path": String,
	"identification": {},
	"float_minimum_order_amount": Number,
	"float_delivery_fee": Number,
	"distance": String,
	"order_lead_time": String,
	"description": String,
	"delivery_mode": {},
	"activities": [],
	"__v": Number,
})

restaurantsDataSchema.index({
	id: 1
});

const RestaurantsData = mongoose.model('RestaurantsData', restaurantsDataSchema);

//如果数据库为空，添加初始化数据
RestaurantsData.findOne((err, data) => {
	if(!data) {
		restaurants.forEach(item => {
			RestaurantsData.create(item);
		})
	}
})

export default RestaurantsData