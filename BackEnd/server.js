// setup server exporess and import db
const express = require('express');
const res = require('express/lib/response');
const app = express();
const db = require('./db');

//middle Ware to read body
app.use(express.json());

// import model
const Todo = require('./Model/ToDo');

// port var
const PORT = 4000;

//!   get post ... methods

//!  get /
app.get('/', (req, res) => {
	res.json('GET Working on /');
});

//!   get /all To Do
app.get('/tasks', (req, res) => {
	Todo.find({}, (err, data) => {
		if (err) {
			console.log('ERROR: ', err);
		} else {
			res.json(data);
			console.log('ddd', data);
		}
	});
});

//!   post to db
app.post('/tasks', (req, res) => {
	Todo.create(req.body, (err, newTask) => {
		if (err) {
			console.log('ERROR: ', err);
		} else {
			res.json('task created successfully' + newTask);
		}
	});
});

//!   delete
app.delete('/tasks/:id', (req, res) => {
	// console.log(req.params);
	Todo.deleteOne({ _id: req.params.id }, (err, deleteObj) => {
		if (err) {
			console.log('ERROR', err);
			res.status(500).json('there is a problem in DB');
		} else {
			// console.log(deleteObj)
			if (deleteObj.deletedCount === 0) {
				res.status(404).json('User Not Found');
			} else {
				res.status(200).json('Success Delete ' + req.params.id);
			}
		}
	});
});

//!   put
app.put('/tasks/:id', (req, res) => {
	// console.log(req.params);
	Todo.updateOne({ _id: req.params.id }, { title: req.body.newTitle }, (err, updateObj) => {
		if (err) {
			console.log('ERROR', err);
			res.status(500).json('there is a problem in DB');
		} else {
			// console.log(updateObj)
			if (updateObj.matchedCount === 0) {
				res.status(404).json('User Not Found');
			} else {
				res.status(200).json('Success Update one user');
			}
		}
	});
});

//!  get filter by true or false
//               ?key=value&key=value

app.get('/filter', (req, res) => {
	Todo.find({ isComplet: req.query.isComplet }, (err, data) => {
		if (err) {
			console.log('err', err);
		} else {
			res.json(data);
		}
	});
});

//!   app listen

app.listen(PORT, () => {
	console.log(`${PORT} is working ..`);
});
