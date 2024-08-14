const { Pool } = require('pg');

// Configuração da pool de conexões com o PostgreSQL usando a URL de conexão
const pool = new Pool({
    connectionString: 'postgresql://webii_user:QbT099JrYsYQqSLobSyynYAuKpLcQQjl@dpg-cqtpuvlds78s739rl6o0-a/webii'
});

// Exporta a pool de conexões para ser usada em outras partes da aplicação
module.exports = pool;
