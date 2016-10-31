const express = require('express'),
      request = require('request'),
      morgan = require('morgan'),
      pug = require('pug');

var app = express();

app.use(morgan('dev'));
app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.redirect('/profile');
});

app.get('/:username', (req, res) => {
  request({
    method: 'GET',
    url: 'https://api.github.com/users/' + req.params.username,
    headers: {
      'User-Agent': 'Marie Treschow'
      }
    }, (error, response, body) => {
      if (!error) {
        res.render('users/show', {user:JSON.parse(body)});
      } else {
        res.status(500).end();
      }
  });
});

app.listen(3000, () => {
  console.log('Running on 3000...');
});
