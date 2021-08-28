const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/javascriptdb', {
    userNewUrlParser: true
})

    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));
    