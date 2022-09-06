"use strict";

const server = require("./server.js");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

server.start(PORT);
