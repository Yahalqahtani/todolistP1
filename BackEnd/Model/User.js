const { Schema, model } = require('mongoose');

const UserSchema = Schema({
	Email: { required: true, type: String, unique: true },
	password: { required: true, type: String },
	username: { required: true, type: String },
});

const User = model('User', UserSchema);

module.exports = User;
