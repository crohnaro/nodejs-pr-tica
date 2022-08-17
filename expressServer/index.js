const express = require('express');
const path = require('path');
const app = express();

//definindo template engine
app.set('view engine', 'ejs')

// Definindo arquivos estáticos
// app.use(express.static(path.join(__dirname, 'views')))

// Definindo arquivos public
app.use(express.static(path.join(__dirname, 'public')))



// rotas
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/sobre', (req, res) => {
    res.send('Teste1')
})

//404 error
app.use((req, res) => { //middleware
    res.send('Pagina nao encontrada')
})

//executando o server
const port = process.env.PORT || 8080
app.listen(port, () =>{ console.log('listening on')
})