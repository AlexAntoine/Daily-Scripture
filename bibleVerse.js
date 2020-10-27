const https = require('https');

const option ={
    "Method": "GET",
    "hostname": "api.scripture.api.bible",
    "path": "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01",
    "headers": {
        "host":"api.scripture.api.bible",
        "api-key":"767b2efac1b488f1e7f53c0347160797"
    }
};

const req = https.get(option, function(res){

    console.log(`body response status code ${res.statusCode}`);

    res.on("data", function(verse){
        console.log(JSON.parse(verse));
    })
});

req.end();