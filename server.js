var cheerio = require("cheerio");
var request = require("request");

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");

// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
request("http://www.amazon.com/gp/search/keywords=macbook&low-price=1000&high-price=2000", 
  function(error, response, html) {
    //console.log(html);
    //console.log(error)
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
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

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
