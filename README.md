# TGBotAPI
A client for the new telegram bot API.
It's functional now but lacks features.


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
```
