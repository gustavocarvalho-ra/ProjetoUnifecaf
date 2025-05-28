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
      
      res.status(200).json(filme);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar filme" });
    }
  }

  static async filtrar(req, res) {
    try {
      const { nome } = req.query;

      if (!nome) {
        return res.status(400).json({ error: 'Parâmetro "nome" é obrigatório' });
      }

      const filmes = await Filme.search(nome);
      res.status(200).json(filmes);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao filtrar filmes" });
    }
  }
}

module.exports = FilmeController;