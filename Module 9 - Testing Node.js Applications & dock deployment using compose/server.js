// firt micro service
const express = require("express");

const port = process.env.PORT || 9000;

const server = express();
const axios = require("axios");

server.get("/", (req, res) => {
  res.send({
    message: "BASE APIs",
  });
});

server.get("/allvideos", (req, res) => {
  axios({
    method: "get",
    url: "http://video:9000/videos",
  }).then((response) => {
    res.send({
      data: response.data.videos,
    });
  });
});

server.listen(port, () => {
  console.log("server is running on port ", port);
});
