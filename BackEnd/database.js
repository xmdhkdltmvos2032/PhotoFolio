const mysql = require("mysql");

let db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"309203cj!",
    database:"get_job",
})

db.connect();

module.exports = db;