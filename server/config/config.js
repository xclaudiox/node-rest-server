//  Puerto
process.env.PORT = process.env.PORT || 3000;

//==========
// ENTORNO
//==========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==============
// BASE DE DATOS
//==============

// if (process.env.NODE_ENV === 'dev') {
// urlDB = 'mongodb://localhost:27017/cafe'
// } else {
urlDB = 'mongodb+srv://vegan:q7EErLAFRXhYGtSE@cluster0.l6ekz.mongodb.net/cafe>?retryWrites=true&w=majority'
    // }

process.env.URLDB = urlDB;