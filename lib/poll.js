var request = require("request");

function poll(longPoll) {
  request("https://api.telegram.org/bot" + longPoll.token + "/getUpdates?timeout=60&offset=" + longPoll.offset, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      if (obj.ok) {
        var cTime = new Date();
        cTime = cTime.getTime() / 1000;
        obj.result.forEach(function(msg) {
          if (msg.update_id >= longPoll.offset) {
            longPoll.offset = msg.update_id + 1;
            if (msg.message.date + 30 > cTime) {
              msg.message.date = new Date(msg.message.date * 1000);
              longPoll.onMessage(msg.message);
            }
          }
        });
      }
    }
    poll(longPoll);
  })
};

function LongPoll(token, onMessage) {
  this.token = token;
  this.onMessage = onMessage;
  this.offset = 0;
  poll(this);
}

module.exports = LongPoll;
