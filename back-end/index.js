const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const mongoose = require('./db');

var userController = require('./controllers/usersController.js');


var app = express();

app.use(mongoose,()=>{
});
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
  })


app.use('/user',userController);




