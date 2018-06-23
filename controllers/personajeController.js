var Model = require('../models/personajeModel'),
    inst = new Model();

var fs = require('fs');

class Index{
    // funciones del controller   
    IndexGet(req,res,next){
        inst.IndexGetPersonajes((error,data)=>{
            if(!error){
                if(data.length > 0){
                    res.render('index',{title:'NodeJS DBZ', data:data});
                    //console.log(data);
                }                    
            }
        });
    }

    CreateGet(req,res,next){
        res.render('create',{title:'Crear Personaje'});
    }

    CreatePost(req,res,next){
        var Personaje = {
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            ruta : "../images/"+req.files[0].originalname
        } 

        inst.CreatePersonaje(Personaje,(error)=>{
            if(!error){
                fs.createReadStream('./uploads/'+req.files[0].filename)
                .pipe(fs.createWriteStream('./public/images/'+req.files[0].originalname)); 
                res.redirect('/');
            }    
            else
                return next(new Error('Error no se guardo el registro'));            
        });
        
        //fs.unlink('./uploads/'+req.files[0].filename); 
        //console.log(Personaje)
        //res.send(req.files[0].originalname);        
    }

    EditGet(req,res,next){
        var PersonajeId = req.params.id;

        inst.FindPersonaje(PersonajeId,(error,data)=>{
            if(!error){
                //console.log(data);
                res.render('edit',{title:'Editar Personaje', data:data});
            }
            else
                return next(new Error('No se encontró el registro'));            
        });    
    }

    EditPost(req,res,next){
        var personaje = {
            personajeId : req.body.id,
            nombre : req.body.nombre,
            descripcion : req.body.descripcion            
        };

        inst.EditPersonaje(personaje,(error)=>{
            if(!error){
                res.redirect('/');
            }
            else
                return next(new Error('No se encontró el registro'));            
        });
    }

    Delete(req,res,next){        
        var PersonajeId = req.params.id;
        inst.DeletePersonaje(PersonajeId,(error)=>{
            if(!error)
                res.redirect('/');
            else
                return next(new Error('Error no se elimino el registro'));            
        });
    }

}

module.exports = Index;