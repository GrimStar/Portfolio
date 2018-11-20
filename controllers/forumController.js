var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://grimstar:Mez!4992@ds151383.mlab.com:51383/myfirstdatabase');

var commentSchema = new mongoose.Schema({
	item: String
});

var Comment = mongoose.model('Comment', commentSchema, 'comment');

//var data = [{item: 'get milk'}, {item: 'water plants'}, {item: 'check water'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){
	app.post('/comment', urlencodedParser, function(req, res){
		var newComment = Comment(req.body).save(function(err, data){
			if(err) throw err;
			res.json(data);
		});
	});
	app.get('/comment', function(req, res){
		Comment.find({}, function(err, data){
			if(err) throw err;
			res.render('comment-section', {todos: data});
		});
		
	});
};
