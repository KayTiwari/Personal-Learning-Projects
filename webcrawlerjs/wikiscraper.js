const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const $ = require('cheerio');

rp(url)
.then(function(html){
    let wikiUrls = [];
    // console.log($('big > a', html).length);
    for (let i = 0; i < ($('big > a', html).length); i++){
        wikiUrls.push($('big > a', html)[i].attribs.href)
    }
    console.log(wikiUrls);
})
.catch(function(error){
    console.log(error);
})

