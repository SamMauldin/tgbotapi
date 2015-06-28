# TGBotAPI
A client for the new telegram bot API.
It's functional now but lacks features.
Also, you may need to disable privacy mode
with the BotFather to receive all group chat messages.


```
var token = "abc123"; // Replace with your own token
var TGBotAPI = require("tgbotapi");

var tgbotapi = new TGBotAPI(token, function(msg) {
  console.log(msg);
});

tgbotapi.sendMessage({
  chat_id: 123456, // Send a message to the bot to get the chat id
  text: "Hello, world!"
});

tgbotapi.sendPhoto({
  chat_id: 123456,
  url: "https://nodejs.org/images/logo.png"
});
```
