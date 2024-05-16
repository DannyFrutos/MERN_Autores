const AutoresController = require("../controllers/autores.controller");

module.exports = app => {
  app.get("/api/Autores/", AutoresController.findAllAutores);
  app.get("/api/Autores/:id", AutoresController.findOneSingleAutores);
  app.put("/api/Autores/update/:id", AutoresController.updateExistingAutores);
  app.post("/api/Autores/new", AutoresController.createNewAutores);
  app.delete("/api/Autores/delete/:id", AutoresController.deleteAnExistingAutores);
};