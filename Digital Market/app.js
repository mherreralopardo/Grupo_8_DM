const express = require ("express")
const path = require("path")
const servidor = express()
const methodOverride = require("method-override");
const { appendFile } = require("fs");
const publicFolderPath = path.resolve(__dirname, "./public")

servidor.use(express.static(publicFolderPath));

servidor.set('view engine', 'ejs')

servidor.set('views', path.join(__dirname, 'src/views'))

servidor.listen (5050, ()=> {
    console.log("Servidor funcionando")
})

servidor.get ("/", (req,res) => {
    res.render('home')
})

servidor.get ("/productCart", (req,res) => {
    res.render('productCart')
})

servidor.get ("/register", (req,res) => {
    res.render('register')
})

servidor.get ("/login", (req,res) => {
    res.render('login')
})

servidor.get ("/productdetail", (req,res) => {
    res.render('productdetail')
})

servidor.get("/list", productoscontroller.list);

servidor.use(methodOverride("_method"));

servidor.get("/edit/:idProductos", productoscontroller.edit);

servidor.put("/edit", function (req,res){
    res.send("Editando por PUT");
})

servidor.delete("/delete/:idProductos", function(req,res){
    res.send("Eliminando con DELETE");
})



module.exports = servidor;
