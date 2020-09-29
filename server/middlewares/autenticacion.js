//===============
// VERIFICA TOKEN
//===============

const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEMILLA_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no valido"
                }
            })
        }
        req.usuario = decoded.usuario;
        next();
    });
};


//===================
// VERIFICA ADMIN ROL
//===================

let verificaAdminRol = (req, res, next) => {
    let usuario = req.usuario;

    if (process.env.ADMIN_ROLE !== usuario.role) {
        return res.status(401).json({
            ok: false,
            err: {
                message: "No tiene los permisos necesarios"
            }
        })
    }


    console.log('verifica rol admin', usuario.role);
    next();
};

module.exports = {
    verificaToken,
    verificaAdminRol
}