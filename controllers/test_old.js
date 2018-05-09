let axios = require('axios');
let cheerio = require('cheerio');
let qp = require('query-parse');

let base_url = 'http://www.amazon.com/gp/search/';

let paramStr = qp.toString({
  keywords: 'macbook pro'
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
    }).then ( (results) => {
        console.log(results);
    })
