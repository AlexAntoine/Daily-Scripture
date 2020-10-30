const http = require("https");



function getScripture(book, chapter, startVerse, endVerse)
{	

	const options = {
		"method": "GET",
		"hostname": "rapidapi.p.rapidapi.com",
		"port": null,
		"path": `/GetVerses?Book=${book}&chapter=${chapter}&VerseFrom=${startVerse}&VerseTo=${endVerse}`,
		"headers": {
			"x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
			"x-rapidapi-key": "95273d0f5cmshb4a85e6e7f6ae1fp1a1e51jsn541c0ed65e43",
			"useQueryString": true
		}
	};

	const req = http.request(options, function (res) {
		var message = "";
	
		res.on("data", function (chunk) {
			message = JSON.parse(chunk);

		});

		res.on("end", function(){

			console.log(message.Output)
		});
	
	});

	req.end();
}

getScripture('Luke', 5, 1, 9);
