import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	user_id: String,
	mobile: String,
	username: String,
	password: String,
	create_time: String,
	avatar: {
		type: String,
		default: null
	},
})

userSchema.index({
	id: 1
});

const User = mongoose.model('User', userSchema);

export default User;