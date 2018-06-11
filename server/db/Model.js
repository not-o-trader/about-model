const db = require('./index.js');
const Model = {

  fetch: function(res, cb) {
    db.query(`select * from ${res.table}`, function(err, results) {
      err ? console.log(err) : cb(null, results);
    });
  },
  getById: function(res, cb) {
    var myQuery = `select * from ${res.table} where car_id=${res.id}`;
    console.log('myQuery: ', myQuery);
    db.query(myQuery, function(err, results) {
      err ? console.log(err) : cb(null, results);
    });
  },
}

module.exports = Model;
