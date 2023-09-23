

let Model = require("../../Model/Model");

const get = {

    home:async(req,res)=>{
        let data = await Model.select();
        res.json({"data":data});
    }

}

module.exports = get;