var connection = require('./connection');

var orm = {
    selectAll: function(whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
    insertOne: function(table, column, value) {
        var queryString = "INSERT INTO ?? (??) VALUES(??)";
        console.log(queryString);
        connection.query(queryString, [table, column, value], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
      updateOne: function(table, column, value, condition) {
        var queryString = "UPDATE ?? SET ?? = ?? WHERE ??";
        console.log(queryString);
        connection.query(queryString, [table, column, value, condition], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
  };
  
  module.exports = orm;