var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');


var START_URL = "https://www.ksl.com/auto/search/index?priceFrom=1&priceTo=4000&zip=84009&miles=25&newUsed%5B%5D=New&newUsed%5B%5D=Used&newUsed%5B%5D=Certified&page=0#"
var SEARCH_WORD = "camino";
var MAX_PAGES_TO_VISIT = 10;

var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;

pagesToVisit.push(START_URL);
crawl();

function crawl() {
    if (numPagesVisited >= MAX_PAGES_TO_VISIT){
        console.log("Reached page visit limit");
        return 0;
    }
    var nextPage = pagesToVisit.pop();
    if (nextPage in pagesVisited){
        //we already reached this page so go back to crawl();
        crawl();
    } else {
        //new page we haven't visited;
        visitPage(nextPage, crawl);
    }
}

function visitPage(url, callback){
    // Add page to set
    pagesVisited[url] = true;
    numPagesVisited++;


    // Make the request
    console.log("Visiting the page: " + url)
    request(url, function(error, response, body){
        console.log('Status Code: ' + response.statusCode)
        if (response.statusCode !== 200){
            callback();
            return 0;
        }
        // Parse document body
        var $ = cheerio.load(body);
        var isWordFound = searchForWord($, SEARCH_WORD);
        if (isWordFound){
            console.log('Word: ' + SEARCH_WORD + ' found at ' + url);
        } else {
            collectInternalLinks($);
            callback();
        }
    })
}

function searchForWord($, word){
    var bodyText = $('html > body').text().toLowerCase();
    return (bodyText.indexOf(word.toLowerCase()) !== -1);
}

function collectInternalLinks($){
    var relativeLinks = $("a[href^='/']");
    console.log("Found " + relativeLinks.length + ' relative links on page');
    relativeLinks.each(function(){
        pagesToVisit.push(baseUrl + $(this).attr('href'));
    });
}




//Improvements possible:

// 1. Handle request errors
// 2. Collect absolute links but check if they belong to the same domain before accessing them
// 3. Read in the starting URL and the word to search for as command line arguments
// 4. Use different User-Agents (an agent that behaves on behalf of the user) if there are problems making requests to websites
// that filter using those HTTP headers.