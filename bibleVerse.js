const https = require('https');

const option ={
    "Method": "GET",
    "hostname": "api.scripture.api.bible",
    "headers": {
        "host":"api.scripture.api.bible",
        "api-key":"767b2efac1b488f1e7f53c0347160797"
    }
};

const url = "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/passages/ROM.8.38?content-type=html&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=false&include-verse-spans=false&use-org-id=false";

function printScripture(scripture){

    console.log(scripture);
};

function getScripture(){

    const req = https.get(url, option, function(res){

        let passage = "";
        console.log(`body response status code ${res.statusCode}`);
    
        res.on("data", function(verse){
            // console.dir(verse);

            // passage += verse.toString();
            console.log(JSON.parse(verse.content));
            // passage += verse.toString();
        })

        // res.on('end', function(){
        //     const scripture = JSON.parse(passage);

        //     // printScripture(scripture.content);
        // })
    });
};

getScripture();
