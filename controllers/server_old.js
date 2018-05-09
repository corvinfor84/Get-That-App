//this is just to show something working
//to use with react, need to convert to Cheerio and Axios

var cheerio = require("cheerio");
var request = require("request");
var qp = require('query-parse');
var axios = require('axios');


var query = 'http://www.amazon.com/gp/search/';
var paramStr = qp.toString({
  keywords: 'macbook'
})
var low = 1000;
var high = 2000;
var queryURL = query + paramStr + "&low-price=" + low + "&high-price=" + high;

request(queryURL,
  function(error, response, html) {
    console.log(queryURL);
    //console.log(html);
    //console.log(error)
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var items = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("div.a-fixed-left-grid-col.a-col-right").each(function(i, element) {
    //console.log($(element).children().children().children().attr("title"));
    //console.log($(element).children().children().children().attr("href"));
    //console.log($(element).find($(".a-offscreen")).text());

    var title = $(element).children().children().children().attr("title");
    var link = $(element).children().children().children().attr("href");
    var price = $(element).find($(".a-offscreen")).text();

    if (!price.includes("Sponsored")){
      //console.log("Sponsored, will not include in calc");
      items.push({
        title: title,
        link: link,
        price: price
      });
    }
  });

  // Log the results once you've looped through each of the elements found with cheerio
  //console.log(results); //sometimes when amazon is out of stock,the particular price tag is not populated therefore returns blank


  // finding the average of a particular product on amazon
  var sum = 0;
  var count = 0;
  var average = 0;
  for (i=0; i < items.length; i++){
    //console.log(results[i].price);
    var number = Number(items[i].price.replace(/[^0-9\.-]+/g,"")); //only works if currency has .00 trailing
    console.log(number);
    sum += number;
    if(number != 0){
      count ++;
    }
  };
  average = sum/count;
  console.log(average); //could just pass back all the results and let user select which one they want to use as benchmark
});
