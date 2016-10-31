const express = require('express'),
      request = require('request'),
      morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.redirect('/profile');
});

app.get('/profile', (req, res) => {
  request({
      method: 'GET',
      url: 'https://api.github.com/users/mariebtreschow',
      headers: {
        'User-Agent': 'Marie'
        }
      }, (error, response, body) => {
        if (!error) {
          res.json(JSON.parse(body));
        } else {
          res.status(500).end();
        }
    });
});

app.listen(3000, () => {
  console.log('Running on 3000');
});
