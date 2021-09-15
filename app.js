const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes/routes')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen('3005', ()=>{
    console.log('servidor rodando na porta 3005')
})


module.exports = app;