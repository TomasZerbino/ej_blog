const express = require("express");
const apiRoutes = express.Router();
const apiController = require("../controllers/apiControllers");

apiRoutes.post("/token", apiController.token);

apiRoutes.get("/articles", apiController.showArticles);

apiRoutes.get("/user/:id/articles", apiController.userArticles);

apiRoutes.get("/articles/:title", apiController.titleLike);

module.exports = apiRoutes;
