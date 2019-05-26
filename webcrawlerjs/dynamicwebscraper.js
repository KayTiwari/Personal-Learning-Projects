const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});
//browser automation library -- similar to axios 
const cheerio = require('cheerio');

const url = 'https://www.flipkart.com/';

nightmare
.goto(url)
.wait('body')
//wait for DOM to render
.click('button._2AkmmA._29YdH8')
.type('input.LM6RPg', 'nodejs books')
.click('button_vh79eN')
.wait('div.bhgxx2')
.evaluate(() => document.querySelector('body').innerHTML)
.end()
.then(response => {
    console.log(getData(response));
})
.catch(error => {
    console.log(error);
})

let getData = html => {
    data = [];
    const $ = cheerio.load(html);

    for(var i = 0; i < 100; i++){
        data.push($('div._3liAhj _1R0K0g > a._2cLu-l').text())
        data.push($('div._3liAhj _1R0K0g > a._2cLu-l')).attr('href')
    }
    console.log(data);
}