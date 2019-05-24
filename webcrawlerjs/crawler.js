var request = require('request');
//Used to make http requests

var cheerio = require('cheerio');
//Used to parse and select HTML elements on the page

var URL = require('url-parse')
//Used to parse urls


var pageToVisit = "http://www.arstechnica.com";
console.log('Visiting page: ' + pageToVisit);

request(pageToVisit, function(error, response, body){
    if(error){
        console.log('Error: ' + error)
    }
    console.log('Status code: ' + response.statusCode);
    if (response.statusCode === 200){
        var $ = cheerio.load(body);
        //parses doc body

        console.log("Page title:  " + $('title').text());
        //Selects html element of <title> and displays text within it
        searchForWord($, 'baz')
    }
})




//Searching for a specific word

function searchForWord($, word){
    var bodyText = $('html > body').text();
    if (bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1){
        console.log('true')
        return true;
    } else {
        return false;
    }
}
//indexOf is case sensitive






//Collecting links on a webpage



