exports.middlewareGlobal = (req,res,next)=>{
    console.log()
    console.log('teste pelo middle.js')
    console.log()
    next()
}

exports.outroMidleware = (req,res,next)=>{
    next()
}

//module.exports se so tiver um middle