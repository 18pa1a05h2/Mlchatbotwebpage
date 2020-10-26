var express = require('express');
var mongojs=require('mongojs');
var app = express()  
var cString="mongodb+srv://lakshmi:lakshmi@cluster0.0wroi.mongodb.net/vedic?retryWrites=true&w=majority";
var db=mongojs('cString',['users'])
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/', function (req, res) {  
res.sendFile(__dirname+"/public/sai.html") 
})  
app.get('/signupSubmit',function(req,res){
	var d={
		name:req.query.fname,
		email:req.query.email,
		phonenumber:req.query.phno,
		male:req.query.male,
		female:req.query.female,
		others:req.query.others,
		address:req.query.address,
		password:req.query.password,
	}
	db.users.insert(d,function(err,docs){
		if(err){
			res.send("Something went wrong. Please try again after some time.")
		}
		else{
			re.sendFile(__dirname+"/public/log.html")
		}
	})
})
app.get('/loginSubmit',function(req,res){
	var d={
		email:req.query.email,
		password:req.query.password,
	}
	db.things.find(d,function(err,data){
		if(err){
			res.send("Something went wrong");
		}
		if(docs.length>0){
			res.sendFile(__dirname+"/public/button.html");
			
		}
		else{
			res.send('please check your email and password');
		}
	})
})
  
app.listen(3000, function () {  
console.log('Example app listening on port 3000!')  
})