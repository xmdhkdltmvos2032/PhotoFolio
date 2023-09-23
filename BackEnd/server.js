const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",middleware,(req,res)=>{
    res.json({"서버":"open"})
})

app.listen(3000,()=>console.log("서버OPEN"));