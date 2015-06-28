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

  var req = https.request({
    method: "post",
    host: "api.telegram.org",
    path: "/bot" + this.token + "/sendPhoto",
    headers: form.getHeaders()
  });

  form.pipe(req);
};

TGBotAPI.prototype.sendAudio = function(opts) {
  var form = new FormData();
  form.append("chat_id", opts.chat_id);
  form.append("audio", request(opts.url));

  var req = https.request({
    method: "post",
    host: "api.telegram.org",
    path: "/bot" + this.token + "/sendAudio",
    headers: form.getHeaders()
  });

  form.pipe(req);
};

TGBotAPI.prototype.sendDocument = function(opts) {
  var form = new FormData();
  form.append("chat_id", opts.chat_id);
  form.append("document", request(opts.url));

  var req = https.request({
    method: "post",
    host: "api.telegram.org",
    path: "/bot" + this.token + "/sendDocument",
    headers: form.getHeaders()
  });

  form.pipe(req);
};

TGBotAPI.prototype.sendSticker = function(opts) {
  var form = new FormData();
  form.append("chat_id", opts.chat_id);
  form.append("sticker", request(opts.url));

  var req = https.request({
    method: "post",
    host: "api.telegram.org",
    path: "/bot" + this.token + "/sendSticker",
    headers: form.getHeaders()
  });

  form.pipe(req);
};

TGBotAPI.prototype.sendVideo = function(opts) {
  var form = new FormData();
  form.append("chat_id", opts.chat_id);
  form.append("video", request(opts.url));

  var req = https.request({
    method: "post",
    host: "api.telegram.org",
    path: "/bot" + this.token + "/sendVideo",
    headers: form.getHeaders()
  });

  form.pipe(req);
};

TGBotAPI.prototype.sendLocation = function(opts) {
  var form = new FormData();
  form.append("chat_id", opts.chat_id);
  form.append("latitude", opts.latitude);
  form.append("longitude", opts.longitude);

  https.request({
    method: "post",
    host: "api.telegram.org",
    path: "/bot" + this.token + "/sendLocation",
    headers: form.getHeaders()
  }, function(res) {
    res.on("data", function(data) {
      return data;
    });
  });
};

TGBotAPI.prototype.sendChatAction = function(opts) {
  var form = new FormData();
  form.append("chat_id", opts.chat_id);
  form.append("action", opts.action);

  https.request({
    method: "post",
    host: "api.telegram.org",
    path: "/bot" + this.token + "/sendChatAction",
    headers: form.getHeaders()
  }, function(res) {
    res.on("data", function(data) {
      return data;
    });
  });
};

TGBotAPI.prototype.getUserProfilePhotos = function(opts) {
  var form = new FormData();
  form.append("user_id", opts.user_id);

  if (opts.offset) form.append("offset", opts.offset);
  if (opts.limit) form.append("limit", opts.limit);

  https.request({
    method: "post",
    host: "api.telegram.org",
    path: "/bot" + this.token + "/getUserProfilePhotos",
    headers: form.getHeaders()
  }, function(res) {
    res.on("data", function(data) {
      return data;
    });
  });
};

module.exports = TGBotAPI;
