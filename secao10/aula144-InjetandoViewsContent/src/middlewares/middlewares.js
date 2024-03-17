exports.middlewareGlobal = (req,res,next)=>{
    res.locals.varLocal = 'Valor variavel Local'
    next()
}

exports.outroMidleware = (req,res,next)=>{
    next()
}

//module.exports se so tiver um middle