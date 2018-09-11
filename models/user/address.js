import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const addressSchema = new Schema({
	id: String,
	user_id: String,
	name: String,
	phone: String,
	address: String,
	details: String,
	is_valid: {
		type: Number,
		default: 1
	},
	created_at: {
		type: Date,
		default: Date.now()
	},
})

addressSchema.index({
	id: 1
});

const Address = mongoose.model('Address', addressSchema);

export default Address