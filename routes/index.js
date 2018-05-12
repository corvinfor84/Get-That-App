const path = require("path");
const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");
const qp = require("query-parse"); // may need this on the front end to send keyword to back end. the get request from front end needs to be good

// API routes
// can add more later
router.get("/api/purchases", function(req, res){//should we change this to /username? depends on auth0
  db.Purchase
    .find(req.query)
    .sort({ goal_date: -1 })
    .then(dbPurchase => res.json(dbPurchase))
    .catch(err => res.status(422).json(err));
});

router.post("/api/purchases", function(req, res){
  const purchase = {
    title: req.body.title,
    link: req.body.link,
    price: req.body.price,
    username: "Jina",
    image: req.body.image

  };
  db.Purchase
    .create(purchase)
    .then(dbPurchase => res.json(dbPurchase))
    .catch(err => {
      console.log(err)
      res.status(422).json(err)
    });
})

router.get("/api/scrape", function(req, res){
  const params = Object.assign(req.query);
  axios
  .get('http://www.amazon.com/gp/search/?keywords=hello+kitty'

  //, {
  //  params
  //}
)
  .then(response => {
    let $ = cheerio.load(response.data);
    let results = [];
    $("div.a-fixed-left-grid-inner").each((i, element) => {
      //console.log($(element).children().children().children().attr("title"));
      //console.log($(element).children().children().children().attr("href"));
      //console.log($(element).find($(".a-offscreen")).text());

      let title = $(element).find($(".a-link-normal.s-access-detail-page.s-color-twister-title-link.a-text-normal")).attr("title");
      let link = $(element).find($(".a-link-normal.s-access-detail-page.s-color-twister-title-link.a-text-normal")).attr("href");
      let priceWhole = $(element).find($(".sx-price-whole")).text();
      let priceDec = $(element).find($(".sx-price-fractional")).text();
      let image = $(element).find($(".s-access-image.cfMarker")).attr("src");
      //console.log(priceWhole);
      if (!priceWhole.includes("Sponsored")){
        let price = parseFloat(priceWhole.replace(/,/g, '')) + parseFloat(priceDec)/100;
        console.log(price);
        //console.log("Sponsored, will not include in calc");
        results.push({
          title: title,
          link: link,
          price: price,
          image: image
        });
      }
    });
    results = results.slice(2,)
    return(results);
  })
  //.then ((results) => {console.log(results)})
  .then(results => res.json(results))
  .catch(err => res.status(422).json(err));
})

// If no API routes are hit, send the React app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;
