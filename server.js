var cheerio = require("cheerio");
var request = require("request");


request("http://www.amazon.com/gp/search/keywords=macbook&low-price=1000&high-price=2000", 
  function(error, response, html) {
    //console.log(html);
    //console.log(error)
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // With cheerio, find each p-tag with the "title" class
  $("div.a-fixed-left-grid-col.a-col-right").each(function(i, element) {
    //console.log(element);
    console.log($(element).children().children().children().attr("title"));
    
    console.log($(element).children().children().children().attr("href"));

    console.log($(element).find($(".a-offscreen")).text());
  
    //console.log($("a.title"));
    
    /*
    var title = $(element).text();

    results.push({
      title: title,
      link: link
    });
    */
  });

  console.log(results);
});
