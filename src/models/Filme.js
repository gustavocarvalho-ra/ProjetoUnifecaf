const db = require("../config/database");

class Filme {
  static async getAll() {
    const [filme] = await db.promise().query("SELECT * FROM tbl_filme");
    return filme[0];
  }

  static async search(query) {
    const searchQuery = `%${query}%`;
    const [filmes] = await db.promise().query(
      "SELECT * FROM tbl_filme WHERE nome LIKE ? OR sinopse LIKE ?",
      [searchQuery, searchQuery]
    );
    return filmes;
  }
}

module.exports = Filme;