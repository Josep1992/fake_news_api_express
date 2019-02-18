const express = require('express');
const app = express();
const http = require('http').Server(app);

//Config
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

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
app.use('/api/fakeSites', fakeSites);

http.listen(port, (error) => (error ? console.error('Server Stopped') : console.log('Environment:' + env, '\n' + 'Port:', port)));
