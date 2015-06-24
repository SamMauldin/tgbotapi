var LongPoll = require("./lib/poll");
var request = require("request");
var querystring = require("querystring");

function TGBotAPI(token, onMessage) {
  this.token = token;
  this.longPoll = new LongPoll(token, onMessage);
}

TGBotAPI.prototype.sendMessage = function(opts) {
  var qs = querystring.stringify(opts);
  request("https://api.telegram.org/bot" + this.token + "/sendMessage?" + qs);
};

module.exports = TGBotAPI;
