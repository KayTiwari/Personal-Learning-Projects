const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});
//browser automation library -- similar to axios 
const cheerio = require('cheerio');

const url = 'https://www.ksl.com/auto/search/index?priceFrom=1&priceTo=4000&zip=84009&miles=25&newUsed%5B%5D=New&newUsed%5B%5D=Used&newUsed%5B%5D=Certified';

nightmare
.goto(url)
.wait('body')
//wait for DOM to render
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

    $('div._1HmYoV._35HD7C:nth-child(2) div.bhgxx2.col-12-12').each((row, raw_element) => {
        $(raw_element).find('div div div').each((i, elem) => {
            let title = $(elem).find('div div a:nth-child(2)').text();
            let link = $(elem).find('div div a:nth-child(2)').attr('href');

            if(title){
                data.push({
                    title: title,
                    link: link
                })
            }
            console.log(data);
        })
    })}