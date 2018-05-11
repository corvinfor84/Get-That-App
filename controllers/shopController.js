const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Shop
      .find(req.query) //the user name is passed trough as a query object (username: this.state.id_token)
      .sort({ goal_date: -1 })
      .then(dbShop => res.json(dbShop))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Shop
      .findById(req.params.id) //not ideal since would like to check db that we are pulling right person's stuff, but id is unique so should be fine
      .then(dbShop => res.json(dbShop))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const shop = {
      _id: req.body._id,
      title: req.body.title,
      url: req.body.web_url
    };
    db.Shop
      .create(shop)
      .then(dbShop => res.json(dbShop))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) { //don't need this one
    db.Shop
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbShop => res.json(dbShop))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  }
};
