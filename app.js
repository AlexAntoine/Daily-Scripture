const http = require("https");
var qs = require("querystring");


function sendScripture(){


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

			sendMessage(passage.Output);

		});
	});

	req.end();
}

function sendMessage(passage)
{
		var options = {
			"method": "POST",
			"hostname": "quick-easy-sms.p.rapidapi.com",
			"port": null,
			"path": "/send",
			"headers": {
				"x-rapidapi-host": "quick-easy-sms.p.rapidapi.com",
				"x-rapidapi-key": "95273d0f5cmshb4a85e6e7f6ae1fp1a1e51jsn541c0ed65e43",
				"content-type": "application/x-www-form-urlencoded",
				"useQueryString": true
			}
		};

		var req = http.request(options, function (res) {
			var chunks = [];

			res.on("data", function (chunk) {
				chunks.push(chunk);
			});

			res.on("end", function () {
				var body = Buffer.concat(chunks);
				console.log(body.toString());
			});
		});

		req.write(qs.stringify({message: `${passage}`, toNumber: '16178032176'}));
		req.end();
}


sendScripture();
