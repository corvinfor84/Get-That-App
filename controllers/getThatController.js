const axios = require("axios");
const cheerio = require("cheerio");
const qp = require("query-parse"); // may need this on the front end to send keyword to back end. the get request from front end needs to be good

module.exports = {
  scrape: function(req, res) {
    let base_url = 'http://www.amazon.com/gp/search/';

    //need to modify
    let paramStr = qp.toString({
      keywords: req.query //from front end react goes through as axios get
    })
    let queryURL = base_url + paramStr;

    console.log(queryURL)

    axios.get(queryURL).then( (response) => {

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
          return(results);
        }).then ((results) => {console.log(results)});
          .then(results => res.json(results));
          .catch(err => res.status(422).json(err));
      };
  };
