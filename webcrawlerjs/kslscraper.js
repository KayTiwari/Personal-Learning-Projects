var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://www.ksl.com/auto/search/index?priceFrom=1&priceTo=4000&zip=84009&miles=25&newUsed%5B%5D=New&newUsed%5B%5D=Used&newUsed%5B%5D=Certified", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
//   console.log($);

  $('div.listing').each(function (index){
      var name = $(this).find('div.title < a.link').text().trim();
      var price = $(this).find('listing-detail-line price').text().trim();
      var miles = $(this).find('listing-detail-line mileage').text().trim();
      fs.appendFileSync('kslcars.txt', name + '\n' + price + '\n' + miles + '\n');
  })
//   $('tr.athing:has(td.votelinks)').each(function( index ) {
//     var title = $(this).find('td.title > a').text().trim();
//     var link = $(this).find('td.title > a').attr('href');
//     fs.appendFileSync('hackernews.txt', title + '\n' + link + '\n');
//   });

});