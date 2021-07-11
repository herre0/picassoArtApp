const db = require("../models");
const config = require("../config/auth.config");
const Painting = db.painting;
const Settings = db.settings;
const Category = db.category;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  // Save User to Database
  Painting.create({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    category: req.body.category,
    order: req.body.order,
    price: req.body.price
  })
    .then(painting => {
      res.send({ message: req.body.name + " is Successfully Created!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.edit = (req, res) => {
  Painting.findOne({
    where: {
      id: req.body.id
    }
  }).then(painting => {
    painting.name = req.body.name;
    painting.description = req.body.description;
    painting.imageUrl = req.body.imageUrl;
    painting.category = req.body.category;
    painting.order = req.body.order;
    painting.price = req.body.price;
    painting.save();
    }).then(data => {
      res.status(200).send({ message: "Başarıyla Güncellendi!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  Painting.destroy({
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Kayıt Başarıyla Silindi!"
        });
      } else {
        res.send({
          message: "Kayıt Silinemedi id=${id}! Kayıt Bulunmamış olabilir."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Kayıt Silinemedi id=" + id
      });
    });
};

exports.findAll = (req, res) => {
  Painting.findAll({
    order: [
      ['createdAt', 'DESC']
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

exports.updateSettings = (req, res) => {
  Settings.findOne({
    where: {
      id: 1
    }
  }).then(settings => {
    settings.headerText = req.body.headerText;
    settings.aboutText = req.body.aboutText;
    settings.photo = req.body.photo;
    settings.email = req.body.email;
    settings.instagram = req.body.instagram;
    settings.facebook = req.body.facebook;
    settings.phone = req.body.phone;
    settings.adress = req.body.adress;
    settings.logoName = req.body.logoName;
    settings.siteTitle = req.body.siteTitle;
    settings.titleLogo = req.body.titleLogo
    settings.save();
    }).then(data => {
      res.status(200).send({ message: "Başarıyla Kaydedildi!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.createCategory = (req, res) => {
  Category.create({
    name: req.body.name
  })
    .then(painting => {
      res.send({ message: req.body.name + " is Successfully Created!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteCategory = (req, res) => {
  Category.destroy({
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Kayıt Başarıyla Silindi!"
        });
      } else {
        res.send({
          message: "Kayıt Silinemedi id=${id}! Kayıt Bulunamamış olabilir."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Kayıt Silinemedi id=" + id
      });
    });
};

exports.findAllCategories = (req, res) => {
  Category.findAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};