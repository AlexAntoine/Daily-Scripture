const express = require('express');
const body = require('body-parser');


const app = express();
app.use(body.urlencoded({extended: true}));

app.use(express.static("public"));

const arrayOfNumbers = ['6178032176'];

app.get('/', function(req, res){

    res.sendFile(__dirname + "/index.html");

}).listen(3000, function(){
    console.log('server is listening at port 3000');
});

app.post('/', function(req,res){
    
    let temp = req.body.number;

    arrayOfNumbers.push(temp);

    res.sendFile(__dirname +'/success.html');
    console.log(arrayOfNumbers);
    
});
