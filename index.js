const http = require('https');

const server = http.createServer(function(res, req){
   
    res.setHeader('content-type', 'text/plain');
    res.write('hello');
    res.end();
});


server.listen(3000, 'localhost', function(){

    console.log('server is running');
});