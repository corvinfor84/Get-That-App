const axios = require("axios");
const cheerio = require("cheerio");
const qp = require("query-parse");

module.exports = {
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});
