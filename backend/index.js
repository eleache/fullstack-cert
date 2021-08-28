const express = require('express');
const morgan = require('morgan'); // muestra logs por consola del lado del servidor
const multer = require('multer'); // maneja imagenes
const path = require('path'); // ayuda a las rutas

//  inicio

const app = express(); // inicia

// settings
app.set('port', 3000);

// middlewares
app.use(morgan('dev')); 
const storage = multer.diskStorage({ 
    destination: path.join(___dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false})); // lee json
app.use(express.json()); // puede usar json

// routes
app.use('/api/books', require('./routes/books'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// verifica por consola que el servidor esta activo
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})

