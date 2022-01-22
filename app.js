"use strict";
const users = require("./routes/index");
var express = require("express");
var bodyParser = require("body-parser");
const { application } = require("express");
var app = express();
module.exports = app; // esto es solo para testear mas facil

// acuerdense de agregar su router o cualquier middleware que necesiten aca
app.use(bodyParser.json());
app.use("/users", users);
// el condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000);
