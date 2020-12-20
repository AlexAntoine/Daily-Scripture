const express = require('express');
const body = require('body-parser');


const app = express();
app.use(body.urlencoded({extended: true}));

app.use(express.static("public"));

const arrayOfNumbers = ['16178032176'];
let temp = '1';

app.get('/', function(req, res){

    res.sendFile(__dirname + "/index.html");

}).listen(3000, function(){
    console.log('server is listening at port 3000');
});

app.post('/', function(req,res){
    
    temp += req.body.number;

    arrayOfNumbers.push(temp);

    res.redirect('/');
    console.log(arrayOfNumbers);
    
});

exports.arrayOfNumbers = arrayOfNumbers;

// s

/*
*
Exports single variable :
exports.numbers = numbers;
*
*
Exports entire file:
module.exports = 

*/