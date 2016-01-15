var request = require('request');
var cheerio = require('cheerio');



url = 'https://news.ycombinator.com/news';

request(url, function(error, response, html){

  if(!error){

    var $ = cheerio.load(html);

    var data = []

    $('a').each(function(i, link) { 

      var href = $(link).attr('href');

      //check to make sure it is an http not a local href
      if(href.match('://')){
        data.push(href)
      }
    })
    console.log(data)
  }
})