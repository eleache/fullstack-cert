const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    userNewUrlParser: true
})
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));
    