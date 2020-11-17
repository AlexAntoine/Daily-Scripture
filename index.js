const http = require('http');

const server = http.createServer(function(req, res){
   
    res.setHeader('content-type', 'text/plain');
    res.write('hello');
    res.end();
});


server.listen(3000, 'localhost', function(){

    console.log('server is running');
});