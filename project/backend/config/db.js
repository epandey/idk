require('dotenv').config()
var mysql = require('mysql');
    
var connectDB = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

connectDB.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to database");
});


module.exports = {
    connectDB,
}