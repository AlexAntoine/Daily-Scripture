const http = require("https");
var qs = require("querystring");
const request = require('request');


function getTime()
{
	const event = new Date();

	var time = event.toLocaleTimeString('en-US');
	// console.log(event.toLocaleTimeString('en-US'));
	console.log(time);
	
	if(time === "6:00:12 AM" || time === "9:00:12 PM")
	{
		console.log('reached');
		sendScripture();
	}
}

// setInterval(getTime, 1000);


function sendScripture()
{
	const options = {
		"method": "GET",
		"hostname": "ajith-holy-bible.p.rapidapi.com",
		"port": null,
		"path": "/GetVerses?Book=isaiah&chapter=55&VerseFrom=11&VerseTo=11",
		"headers": {
			"x-rapidapi-key": "95273d0f5cmshb4a85e6e7f6ae1fp1a1e51jsn541c0ed65e43",
			"x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
			"useQueryString": true
		}
	};

	const req = http.request(options, function (res) {
		
		let text = "";

		res.on("data", function (chunk) {
			text += chunk;
		});

		res.on("end", function () {

			var passage = JSON.parse(text);

			sendMessage('hello');

		});
	});

	req.end();
}




//two apis are being used, one to get the scripture and the other to send the scripture vi SMS
//