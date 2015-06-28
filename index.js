var LongPoll = require("./lib/poll");
var request = require("request");
var querystring = require("querystring");
var fs = require("fs");
var https = require("https")
var FormData = require("form-data");

function TGBotAPI(token, onMessage) {
  this.token = token;
  this.longPoll = new LongPoll(token, onMessage);
}

TGBotAPI.prototype.sendMessage = function(opts) {
  var qs = querystring.stringify(opts);
  request("https://api.telegram.org/bot" + this.token + "/sendMessage?" + qs);
};

TGBotAPI.prototype.sendPhoto = function(opts) {
  var form = new FormData();
  form.append("chat_id", opts.chat_id);
  form.append("photo", request(opts.url));
  var http = require('http');

  var req = https.request({
    method: "post",
    host: "api.telegram.org",
    path: "/bot" + this.token + "/sendPhoto",
    headers: form.getHeaders()
  });

  form.pipe(req);
}

module.exports = TGBotAPI;
