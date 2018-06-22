var conn = require('./conexion');

class homeModel{

    IndexPost(Callback)
    {
        conn.query("select * from test",Callback);                
    }
}

module.exports = homeModel;