const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro no servidor.' });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});