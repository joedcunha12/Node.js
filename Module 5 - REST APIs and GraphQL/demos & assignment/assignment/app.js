const express = require("express");
const chalk = require("chalk");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./CreateanIssue/db"); 


const CreateController = require("./CreateanIssue/issue");
app.use("/issue",CreateController);

module.exports = app;
