var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://grimstar:Mez!4992@ds151383.mlab.com:51383/myfirstdatabase');

var todoSchema = new mongoose.Schema({
	item: String
});

var Todo = mongoose.model('Todo', todoSchema);


//var data = [{item: 'get milk'}, {item: 'water plants'}, {item: 'check water'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('home');
	});
	
	app.get('/about', function(req, res){
		res.render('about');
	});

	app.get('/todo', function(req, res){
		Todo.find({}, function(err, data){
			if(err) throw err;
			res.render('todo', {todos: data});
		});
		
	});
	app.post('/todo', urlencodedParser, function(req, res){
		var newTodo = Todo(req.body).save(function(err, data){
			if(err) throw err;
			res.json(data);
		});
		
	});
	app.delete('/todo/:item', function(req, res){
		Todo.find({item: req.params.item.replace(/\-/g, "")}).remove(function(err, data){
			if(err) throw err;
			res.json(data);
		});
	});

};