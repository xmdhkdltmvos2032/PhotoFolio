const db = require("../database.js");


class Model{

    constructor(id,name,password){
        this.id = id;
        this.name = name;
        this.password = password;
    }

    static select(){

        return new Promise((resolve, reject) => {
            db.query("select * from signup",(err,res)=>{
                if(err) throw err;
                if(res) resolve(res);
            })

        })


    }

}


module.exports = Model;