var Scraper = require ('images-scraper')
  , bing = new Scraper.Bing();

bing.list({
    keyword: 'banana',
    num: 1,
    detail: true
})
.then(function (res) {
    console.log('first 1 result from bing', res);
}).catch(function(err) {
    console.log('err',err);
})
