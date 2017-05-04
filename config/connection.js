var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3000,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db",
  //port:3336  // not default sql port!!
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("This happened: " + err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;