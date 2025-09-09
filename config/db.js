const mongoose = require('mongoose');

// Função para conectar ao banco de dados MongoDB
const connectDB = async () => {
    try {
        // Tenta conectar ao MongoDB usando a URI armazenada na variável de ambiente MONGO_URI
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Banco de dados conectado com sucesso.'); // Mensagem de sucesso
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error); // Mensagem de erro
        process.exit(1); // Encerra o processo em caso de erro
    }
};

// Exporta a função connectDB para ser utilizada em outros arquivos
module.exports = connectDB;