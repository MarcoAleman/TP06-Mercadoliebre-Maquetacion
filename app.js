const express = require("express"); //requiero el modulo de express
const app = express(); //inicializo la funcion
const path = require('path'); //requiero el modulo path
const pathPublic = path.resolve(__dirname, './public'); //guardo la ruta de public
const PORT = 3001;

app.use(express.static(pathPublic)); //establezco la carpeta public para que busque los archivos estaticos

app.listen(PORT, () => {
    console.log(`
    Servidor iniciado en el puert ${PORT}
    http://localhost:${PORT}`);
 
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})