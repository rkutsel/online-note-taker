const indexRoute = require("express").Router();
const apiRoute = require("./api");

indexRoute.use("/api", apiRoute);

module.exports = indexRoute;
