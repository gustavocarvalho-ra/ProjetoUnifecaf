const Filme = require("../models/Filme");

class FilmeController {
  static async listarTodos(req, res) {
    try {
      const filmes = await Filme.getAll();
      res.status(200).json(filmes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar filmes" });
    }
  }

  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const filme = await Filme.getById(id);

      if (!filme) {
        return res.status(404).json({ error: "Filme não encontrado" });
      }
      
      res.status(200).json(filme)
    }
  }
}