const request = require('request');


const getTime = (message) =>{
	const event = new Date();

	var time = event.toLocaleTimeString('en-US');

	console.log(time);

	if(time === "6:00:12 AM" || time === "9:00:12 PM")
	{
		console.log('reached');

		sendMessage(message);
	}
}

const sendMessage = (message) =>{

	const options = {
		method: 'POST',
		url: 'https://textbelt-sms.p.rapidapi.com/text',
		headers: {
		  'content-type': 'application/x-www-form-urlencoded',
		  'x-rapidapi-key': '95273d0f5cmshb4a85e6e7f6ae1fp1a1e51jsn541c0ed65e43',
		  'x-rapidapi-host': 'textbelt-sms.p.rapidapi.com',
		  useQueryString: true
		},
		form: {
		  message: `${message}`,
		  phone: '6178032176',
		  key: '1f4437ae7fa4efad403fb17a7193061f5e05b885YGG3RMsDEeY083rNzsChts9IV'
		}
	};
	  
	  request(options,  (error, response, body) =>{
		  if (error) throw new Error(error);

	  });
	
};

getTime('test');



module.exports = getTime;


