const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true },(err)=>{
    if(!err)
        console.log('MongoDB connction successfully created.');
    else
        console.log('error in MongoDB connction' + JSON.stringify(err,undefined,2));
    
},);

module.exports =mongoose;