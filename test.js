const request = require('request');

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
    message: 'Test number 2',
    phone: '6178032176',
    key: '1f4437ae7fa4efad403fb17a7193061f5e05b885YGG3RMsDEeY083rNzsChts9IV'
  }
};

request(options,  (error, response, body) =>{
	if (error) throw new Error(error);

	console.log(body);
});