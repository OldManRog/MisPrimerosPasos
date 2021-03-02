var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'Rogerr',      // Replace with your database username
  password: 'Zmilan7075!',      // Replace with your database password
  database: 'Misprimerospasos' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
