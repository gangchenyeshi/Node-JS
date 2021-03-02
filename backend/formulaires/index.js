const { response } = require("express");
const express = require ("express");
const expressHandlebars = require("express-handlebars");

const app = express();
app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.listen(8000, () => {
    console.log("Server Start");
})
//  app.get("/", (request, response) => {
//      response.send("hello")
//  })

app.get("/", (require, response) => {
    response.render("home", {
        title : "Handlers c'est nul",
        authors : ["Author 1", "Author 2", "Author 3",]
    });
})

app.get("/login", (request, response) => {
    response.render("login")
})

app.use(express.urlencoded({ extended: true }))
app.post("/login", (request, response) => {
    console.log(request.body)
})