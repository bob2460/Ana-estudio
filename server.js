const express = require('express')
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Roberto Carlos Ontiveros Coronado',
        anio: new Date().getFullYear() + 1
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.get('/prueba', (req, res) => {
    res.render('prueba');
});

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${{port}}`);
});