const controller = require("../controllers/admin.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/admin/create", controller.create);
  app.put("/admin/edit", controller.edit);
  app.delete("/admin/delete/:id", controller.delete);
  app.get("/admin/list", controller.findAll);
  app.get("/admin/settings", controller.getSettings);
  app.put("/admin/updateSettings", controller.updateSettings);
  app.get("/admin/painting/:id", controller.findOne);
  app.post("/admin/createCategory", controller.createCategory);
  app.delete("/admin/deleteCategory/:id", controller.deleteCategory);
  app.get("/admin/categories", controller.findAllCategories);


};