const User = require('../models/User');

// Controlador de usuários
const UserController = {
    // Método para registrar um novo usuário
    registerUser: async (req, res) => {
        try {
            // Extrai os dados do corpo da requisição
            const { name, email, password } = req.body;

            // Cria uma nova instância do modelo User
            const newUser = new User({ name, email, password });

            // Salva o novo usuário no banco de dados
            await newUser.save();

            // Retorna uma resposta de sucesso
            res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
        } catch (error) {
            // Trata erros e retorna uma resposta de erro
            res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
        }
    }
};

// Exporta o controlador
module.exports = UserController;