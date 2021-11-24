const express = require("express");
const app = express();

const chatServer = require("./chatserver");

const config = require("./config");

const port = config.port;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", "./views");

const emailRoutes = require("./routes/emailRoutes");
const apiRoutes = require("./routes/apiRoutes");

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/sports", (req, res) => res.render("sports"));

app.get("/contact", (req, res) => {
  res.render("contact", { errorMsg: null, successMsg: null });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use("/api", apiRoutes);
app.use("/sendOrderEmail", emailRoutes);

app.listen(port, () => {
  console.log(`main server running on port ${port}`);
});
