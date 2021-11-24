const socket = require("socket.io");
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const path = require("path");
const { METHODS } = require("http");

var server = app.listen(port, () => {
  console.log("Server is listening on ...", port);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
});

var io = require("socket.io")(server, {
  cors: "http://localhost:5000/login", //connections allowed
  methods: ["GET", "POST"],
});

var onlineusers = [];
var chatmessages = [];

io.on("connection", (client) => {
  // console.log(">.............................connection established");
  // setTimeout(() => {
  //   client.emit("someevent", `<h1>hi how are you joe </h1>`);
  //   client.broadcast(id).emit("somespecificevent");
  // }, 5000);

  console.log(".....client id unique", client.id);
  client.on("userjoined", (user) => {
    console.log("user", user, "joined the chat");
    onlineusers.push(user);
    client.emit("onlineusers", onlineusers);
  });

  client.on("chatmessage", function (data) {
    chatmessages.push(data);
    console.log(data.name, "has sent a message", data.text);
    client.broadcast.emit("anewchatmessage", chatmessages);
  });
});
