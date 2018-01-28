var Scraper = require ('images-scraper')
  , bing = new Scraper.Bing();

bing.list({
    keyword: 'banana',
    num: 1,
    detail: true
})
.then(function (res) {
    res.forEach(function(item){
        console.log(item.url);
        document.getElementById("haiku").src = item.url;
    });
    //console.log(res);

}).catch(function(err) {
    console.log('err',err);
})
