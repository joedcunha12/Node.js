var express = require("express");

var server = express();

var fs = require("fs");

var port = 5000;

server.set("view engine", "ejs");

server.get("/", function (req, res) {
  var videofiles = fs.readdirSync("assets");
  res.render("index", { data: { videos: videofiles } });
});

server.get("/playvideo", (req, res) => {
  const path = "assets/" + req.query.filename;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mkv",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mkv",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});

server.listen(port, () => {
  console.log("server running on ", port);
});
