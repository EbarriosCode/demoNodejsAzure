class Index{
    // funciones del controller
    IndexGet(req,res,next){
        res.render('index', {title : 'Demo NodeJS'});
    }
}

module.exports = Index;