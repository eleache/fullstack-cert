require('dotenv').config();
console.log(process.env.NODE_ENV);

const express = require('express');
const morgan = require('morgan'); // ver logs en consola del servidor
const multer = require('multer'); // middleware para leer imagenes
const path = require('path'); // ayuda a validar las rutas

// INICIO
const app = express(); // 

// configuraciones
app.set('port', 3000);


// esta seccion es de los middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false})); // permite leer formularios json
app.use(express.json()); // peticiones ajax json

// routes
app.use('api/books', require('./routes/books'));

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// nos indica que el servidor esta activo
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})
