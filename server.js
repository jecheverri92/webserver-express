const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')



app.get('/', (req, res) => {
 // res.send('Hello Mundo')
    res.render('home', {
        nombre: 'Julian',
    })
})

app.get('/about', (req, res) => {
    // res.send('Hello Mundo')
       res.render('about')
   })

/* // app.get('/data', (req, res) => {
    
     res.send('Hello Mundo')

    })
  */
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})