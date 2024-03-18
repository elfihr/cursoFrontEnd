exports.middlewareGlobal = (req,res,next)=>{
    res.locals.varLocal = 'Valor variavel Local'
    next()
}

exports.outroMidleware = (req,res,next)=>{
    next()
}
//Tratamento de erro ao receber form de outro lugar
exports.checkCsrfError = (err,req,res,next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render('404')
    }
}
//Tratamento do form dentro das paginas
//Sera criado um token dentro da pagina e verificado
//Se o mesmo pertence a pagina
exports.csrfMiddleware = (req , res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}