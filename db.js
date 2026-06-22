const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL


// set up mongodb connection
mongoose.connect(mongoURL) 

//get the default connection
//mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

//define event listener for database connection

db.on('connected',()=>{
    console.log('connected to Mongodb server');
});

db.on('error',(err)=>{
    console.log('Mongodb connection error:',err);
});

db.on('disconnected',()=>{
    console.log('Mongodb disconnected');
});

//export the database connection
module.exports = db;