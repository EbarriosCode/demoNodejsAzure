var conn = require('./conexion');

class personajeModel{

    IndexGetPersonajes(Callback)
    {
        conn.query("SELECT * FROM personaje",Callback);                
    }

    CreatePersonaje(Personaje,Callback)
    {        
        conn.query("INSERT INTO personaje (Nombre,Descripcion,RutaFoto) VALUES ('"+Personaje.nombre+"','"+Personaje.descripcion+"','"+Personaje.ruta+"')",Callback);
    }

    FindPersonaje(PersonajeId,Callback)
    {
        conn.query("SELECT * FROM personaje WHERE PersonajeId = "+PersonajeId,Callback);
    }

    EditPersonaje(Personaje,Callback)
    {
        conn.query("UPDATE personaje SET Nombre='"+Personaje.nombre+"',Descripcion='"+Personaje.descripcion+"' WHERE PersonajeId = "+Personaje.personajeId,Callback);
    }

    DeletePersonaje(PersonajeId,Callback)
    {
        conn.query("DELETE FROM personaje WHERE PersonajeId = "+PersonajeId,Callback);
    }
}

module.exports = personajeModel;