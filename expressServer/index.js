const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();



//definindo template engine
app.set("view engine", "ejs");

// Definindo arquivos estáticos
// app.use(express.static(path.join(__dirname, 'views')))

// Definindo arquivos public
app.use(express.static(path.join(__dirname, "public")));

//habilitada server a receber dados via post ( form )
app.use(express.urlencoded({extended: true}));

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
            text: 'Lorem ipsum dolor sit amet, consectet',
            stars: 3
        },
        {
            title: 'Testeaasdbc',
            text: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
            title: 'Testeaasdbc',
            text: 'Lorem ipsum dolor sit amet, consectet',
            stars: 5
        },
    ]
  });
});

app.get('/cadastro-posts', (req, res) => {
  const { c } = req.query
  res.render("cadastro-posts", {
    tittle: "Cadastro-Post",
    cadastrado: c,
  });
});

app.post('/salvar-posts', (req, res)=>{
  const { titulo, texto} = req.body
  const data = fs.readFileSync('./store/posts.json')
  const posts = JSON.parse(data)

  posts.push({
    titulo,
    texto,
  })

  const postsString = JSON.stringify(posts)
  fs.writeFileSync('./store/posts.json', postsString)
  res.redirect('/cadastro-posts?c=1')
})

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
