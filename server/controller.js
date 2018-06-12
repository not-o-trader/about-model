const Model = require('./db/Model.js');

const Controller = {
  fetch: (req, res) => {
    Model.fetch(req.params, function(err, results) {
      err ? console.log(err) : res.status(201).send(results);
    })
  },
  getById: (req, res) => {
    Model.getById(req.query, function(err, results) {
      err ? console.log(err) : res.status(200).send(results);
    })
  },
  post: (req, res) => {
    Model.post(req.query, function(err, results) {
      err ? console.log(err) : res.status(201).send(results);
    });
  },
  delete: (req, res) => {
    Model.delete(req.params, function(err, results) {
      err ? console.log(err) : res.status(200).send(results);
    });
  },
}

module.exports = Controller;