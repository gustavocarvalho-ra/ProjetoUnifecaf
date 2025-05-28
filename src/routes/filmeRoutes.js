const express = require("express");
const router = express.Router();
const FilmeController = require("../controllers/FilmeController");

//Listar todos
router.get("/v1/controle-filmes/filme", FilmeController.listarTodos);
//Busca por ID
router.get("/v1/controle-filmes/filme/:id", FilmeController.buscarPorId);
//Filtrar por nome ou sinopse
router.get("/v1/controle-filmes/filtro/filme", FilmeController.filtrar);

module.exports = router;