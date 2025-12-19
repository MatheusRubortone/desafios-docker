
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');

// Garante que a tabela existe
const createTable = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`;
const pool = mysql.createPool(config);
pool.query(createTable);

app.get('/', (req, res) => {
    const name = 'Full Cycle' + Math.floor(Math.random() * 1000);
    pool.query(`INSERT INTO people(name) VALUES(?)`, [name], (err) => {
        if (err) return res.status(500).send('Erro ao inserir nome');
        pool.query('SELECT name FROM people', (err, results) => {
            if (err) return res.status(500).send('Erro ao buscar nomes');
            let list = '<ul>' + results.map(r => `<li>${r.name}</li>`).join('') + '</ul>';
            res.send(`<h1>Full Cycle Rocks!</h1>${list}`);
        });
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Rodando na porta ${port}`);
});
