const express = require('express');
const body = require('body-parser');
const getTime = require('./app');
const path = require('path');

const app = express();
app.use(body.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/public')));

const arrayOfNumbers = [];

app.get('/', function(req, res){

    res.sendFile(__dirname + "/index.html");

})

app.listen(process.env.PORT || 4000, () =>{
    console.log('server is listening at port 4000');
});

app.post('/', function(req,res){
    
    let temp = req.body.number;

    arrayOfNumbers.push(temp);

    res.sendFile(__dirname +'/success.html');
    console.log(arrayOfNumbers);
    
});

getTime('Keep doing your best. LOVE YOU!!');




