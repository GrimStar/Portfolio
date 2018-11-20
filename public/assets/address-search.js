var request = require('request');

module.exports = function(app){
  request.get({
    url: "https://api.nytimes.com/svc/topstories/v2/world.json",
    qs: {'api-key': "843b0e1459e24cf6ae793d9e680e78c7"},

  }, function(err, response, body) {
    body = JSON.parse(body);
    console.log(body);
  });
    
};