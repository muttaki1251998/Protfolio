const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// app init
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set routes
var index = require('./routes/index');
var project = require('./routes/project');
var contact = require('./routes/contact');

app.use('/', index);
app.use('/project', project);
app.use('/contact', contact)

// view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log("Server started at port " + port);
});

module.exports = app;