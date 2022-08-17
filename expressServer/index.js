const express = require("express");
const path = require("path");
const app = express();

//definindo template engine
app.set("view engine", "ejs");

// Definindo arquivos estáticos
// app.use(express.static(path.join(__dirname, 'views')))

// Definindo arquivos public
app.use(express.static(path.join(__dirname, "public")));

// rotas
app.get("/", (req, res) => {
  res.render("index", {
    tittle: "Teste A",
  });
});

app.get("/posts", (req, res) => {
  res.render("posts", {
    tittle: "Teste B",
    posts: [
        {
            title: 'Testeabc',
            text: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
            title: 'Testeaasdbc',
            text: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
            title: 'Testeaasdbc',
            text: 'Lorem ipsum dolor sit amet, consectet'
        },
    ]
  });
});

//404 error
app.use((req, res) => {
  //middleware
  res.send("Pagina nao encontrada");
});

//executando o server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("listening on");
});
