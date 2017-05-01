var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

var forms = [{'id':0,'name':'pooh','day':1,'month':'เมษายน','year':2539},
			{'id':1,'name':'pony','day':15,'month':'สิงหาคม','year':2539}];

	
var index =2;

app.use(express.static('public')) 


router.route('/forms')
	.get(function(req,res){
		res.json(forms);
		res.json(mons);
	})

	.post(function(req, res) {
		var form = {};
		form.id = index++;
		form.name = req.body.name;
		form.day = req.body.day;
		form.month = req.body.month;
		form.year = req.body.year;
		forms.push(form);
		res.json(forms);
	})

router.route('/forms/:form_id')
	.get(function(req,res){
		res.json(forms[req.params.form_id]);
	})

	.put(function(req, res) {
		var id = req.params.form_id
		forms[id].name = req.body.name;
		forms[id].day = req.body.day;
		forms[id].month = req.body.month;
		forms[id].year = req.body.year;
		res.json(forms[req.params.form_id]);
	})

	.delete(function(req,res){
		var id = req.params.form_id
		delete forms[id];	
	})

	.put(function(req,res){
		var id = req.params.form_id
		forms[id].name = req.body.name;
		forms[id].day = req.body.day;
		forms[id].month = req.body.month;
		forms[id].year = req.body.year;
		// res.json(forms[id])
		res.json({message: 'Form updated'})
	})

	.delete(function(req,res){
		var id = req.params.form_id
		delete forms[id]
		// res.json(forms)
		res.json({message: 'Form deleted'})
	})

// all of our routes will be prefixed with /api
app.use('/api',bodyParser.json(),router);

app.listen(8080);
console.log('web sarver is running...');