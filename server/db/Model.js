const db = require('./index.js');
const Model = {

  fetch: function(res, cb) {
    db.query(`select * from ${res.table}`, function(err, results) {
      err ? console.log(err) : cb(null, results);
    });
  },
  getById: function(res, cb) {
    var myQuery = `select * from ${res.table} where car_id=${res.id}`;
    db.query(myQuery, function(err, results) {
      err ? console.log(err) : cb(null, results);
    });
  },
  post: function(res, cb) {
    db.query(`insert into ${res.table} values ${res.values}`, function(err, results) {
      err ? console.log(err) : cb(null, results);
    });
  },
  delete: function(res, cb) {
    db.query(`delete from ${res.table} where car_id=${res.id}`, function(err, results) {
      err ? console.log(err) : cb(null, results);
    });
  },
}

module.exports = Model;
