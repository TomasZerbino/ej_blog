const express = require("express");
const adminRouter = express.Router();
const pagesControllers = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const atLeastWriter = require("../middlewares/atLeastWriter");
// Rutas del Admin:
// ...
adminRouter.use(ensureAuthenticated);

adminRouter.get("/", atLeastWriter, pagesControllers.showAdmin);

adminRouter.get("/edit/:id", articleController.editArticle);

adminRouter.get("/destroy/:id", articleController.destroy);

adminRouter.post("/articles/crear", articleController.create);

adminRouter.post("/articles/:id", commentController.create);

adminRouter.post("/edit/:id", articleController.edit);

adminRouter.get("/articles/crear", atLeastWriter, articleController.createArticle);

adminRouter.get("/user/profile", pagesControllers.showProfile);

adminRouter.post("/user/destroy/:id");

module.exports = adminRouter;
