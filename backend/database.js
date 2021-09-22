const mongoose = require('mongoose');

// MONGODB_URI es una variable de entorno [/.env] que hace referencia a la URI de mongodb://localhost/[nombre de la BD];
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected')) // informa de conexion a la base de datos
    .catch(err => console.error(err)); // notifica errores
       