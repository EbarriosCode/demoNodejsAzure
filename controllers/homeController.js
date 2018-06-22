var Model = require('../models/modelTest'),
    inst = new Model();

class Index{
    // funciones del controller
   
    IndexGet(req,res,next){
        inst.IndexPost((error,data)=>{
            if(!error){
                if(data.length > 0){
                    res.render('lista',{titulo:'datos', data:data});
                    //console.log(data);
                }                    
            }
        });
    }
}

module.exports = Index;