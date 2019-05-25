var request = require('request');
//Used to make http requests

var cheerio = require('cheerio');
//Used to parse and select HTML elements on the page

var URL = require('url-parse')
//Used to parse urls






var pageToVisit = "http://arstechnica.com";
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
        collectInternalLinks($)
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
//2 types of links -- relative: /relativepath or absolute: http://absolutepath.com
//absolute paths can link to anywhere on the interwebz

function collectInternalLinks($) {
    let allRelativeLinks = [];
    let allAbsoluteLinks = [];

    let relativeLinks = $("a[href^='/']");
    relativeLinks.each(function(){
        allRelativeLinks.push($(this).attr('href'));
    });
    let absoluteLinks = $("a[href^='http']");
    absoluteLinks.each(function(){
        allAbsoluteLinks.push($(this).attr('href'));
    });
    console.log("Found " + allRelativeLinks.length + " relative links");
    console.log("Found " + allAbsoluteLinks.length + " absolute links");
}





//Check which pages we already visited
var pagesVisited = {};

// pagesVisited[url] = true;


