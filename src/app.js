const express = require("express");
const cors = require("cors");
const filmeRoutes = require("./routes/filmeRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", filmeRoutes);

app.get("/", (req, res) => {
  res.send("API FECAF Flix - Controle de Filmes");
});

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint não encontrado" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});