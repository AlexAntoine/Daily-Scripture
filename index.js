const https = require('https');

const options = {
	"method": "GET",
	"hostname": "rapidapi.p.rapidapi.com",
	"port": null,
	"path": "/GetVerses?Book=Luke&chapter=5&VerseFrom=1&VerseTo=5",
	"headers": {
		"x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
		"x-rapidapi-key": "95273d0f5cmshb4a85e6e7f6ae1fp1a1e51jsn541c0ed65e43",
		"useQueryString": true
	}
};

const req = https.get(options, function(res){

    console.dir(res.statusCode);
});