const rp = require('request-promise');
const url = 'https://www.ksl.com/auto/search/index?priceFrom=1&priceTo=4000&zip=84009&miles=25&newUsed%5B%5D=New&newUsed%5B%5D=Used&newUsed%5B%5D=Certified';
const $ = require('cheerio');

rp(url)
.then(function(html){
    console.log(html);
    // console.log($);
    // let wikiUrls = [];
    // // console.log($('big > a', html).length);
    // for (let i = 0; i < ($('big > a', html).length); i++){
    //     wikiUrls.push($('big > a', html)[i].attribs.href)
    // }
    // console.log(wikiUrls);
})
.catch(function(error){
    console.log(error);
})

