const express = require('express');
const bodyParser = require('body-parser');

const auth = require('./auth-backend/auth');
const webpackDevMiddleware = require('./webpack.dev');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if(process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware);  
}

app.post('/signup', auth.signUp);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});