var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

  url = 'https://news.ycombinator.com/news';

  request(url, function(error, response, html){

    if(!error){

      var $ = cheerio.load(html);

      var data = []

      $('a').each(function(i, link) { 

        var href = $(link).attr('href');

        if(href.match('://')){
          data.push(href)
        }
      })
      console.log(data)
    }
  })
})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;