const db = require("../models");
const Painting = db.painting;
const Settings = db.settings;

exports.findAll = (req, res) => {
  Painting.findAll({
    order: [
      ['order', 'ASC'], 
      ['updatedAt', 'DESC'], 
  ],
  })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  Painting.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getSettings = (req, res) => {
  Settings.findOne({
    where: {
      id: 1
    }
  }).then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
