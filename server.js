const express = require("express");

const CarRouter = require("./cars/car-router.js");

const server = express();

server.use(express.json());

server.use("/api/cars", CarRouter);

server.get("/", (req, res) => {
  res.send("<h3>DB Helpers with knex</h3>");
});
module.exports = server;