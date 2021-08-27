const express = require('express');
const morgan = require('morgan'); // ver logs en consola del servidor
const multer = require('multer'); // middleware para leer imagenes
const path = require('path'); // ayuda a validar las rutas

// INICIO
const app = express(); // comienza el servidor

// configuraciones
app.set('port', 3000); //  configura el puerto


// esta seccion es de los middlewares
app.use(morgan('dev')); // 
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// nos indica que el servidor esta activo
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})
