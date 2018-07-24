//require and initialize express
const express = require('express');
app = express();

var dotenv = require('dotenv').config(); //Environmental variables

//Tell Sequelize the DB information mySQL locally & Jaws once deployed (for Heroku)
var Sequelize = require('sequelize'),
  connection;
if (process.env.JAWSDB_URL){
  connection = new Sequelize(process.env.JAWSDB_URL);
} else{
  connection = new Sequelize('trophy', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port:'3306'
  })
}

//connect to the file which controls routing
var routes = require('./controllers/routes.js');

//Set port for Express. Cannot be 3000 since react uses 3000 by default
const port = 3001;

//Start the server
app.listen(port, () => console.log('server started on ' + port));

