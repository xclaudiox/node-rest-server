//  Puerto
process.env.PORT = process.env.PORT || 3000;

//==========
// ENTORNO
//==========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================
// VENCIMIENTO TOKEN
//==================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//==============
// SEMILLA TOKEN
//==============

process.env.SEMILLA_TOKEN = process.env.SEMILLA_TOKEN || 'semilla-desarrollo';

//==============
// ADMIN ROLE
//==============

process.env.ADMIN_ROLE = process.env.ADMIN_ROLE || 'ADMIN_ROLE';


//==============
// BASE DE DATOS
//==============

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;