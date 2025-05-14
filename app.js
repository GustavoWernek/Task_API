const express = require('express');
const app = express();
const taskRoutes = require('./src/routes/taskRoutes');
const sequelize = require('./src/config/database');

//Miiddleware
app.use(express.json());

//Routes com prefixo /api
app.use('/api', taskRoutes);

//Test DB Connection
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o Banco estabelecida!')
        app.listen(3000, () => console.log('localhost: 3000/api/tasks'))
    })
    .catch(err => console.error('Erro ao conectar com o Banco!', err));