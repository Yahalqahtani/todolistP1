const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/ToDoList01';

//! connect to db
mongoose.connect(dbURI);

//! show db connect status
const db = mongoose.connection;
db.on('connected', err => {
	console.log('DB is Connected ..');
});
db.on('err', err => {
	console.log('Error:', err);
});
