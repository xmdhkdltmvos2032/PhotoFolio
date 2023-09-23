const express = require("express");
const app = express();
const router = require("./Router/router");

app.use("/",router);
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(3000,()=>console.log("서버OPEN"));