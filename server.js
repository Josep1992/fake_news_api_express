const express = require('express');
const app = express();
const http = require('http').Server(app);

//Config
const port = process.env.PORT || 5000;

//MiddleWare
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

//Initialize Middleware
app.use(morgan('dev')); // Better login of the request
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route Set Up
const fakeSites = require('./api/routes/fakeNewsSites');
app.use('/api/fakesites', fakeSites);

app.use('*', (req, res) =>
  res.status(404).json({ message: 'Mate the resource your are looking for is nowhere to be found! \n Please make sure you know what you are doing!' })
);

http.listen(port, (error) => (error ? console.error('Server Stopped') : console.log('Port:', port)));
