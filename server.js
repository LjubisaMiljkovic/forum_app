const express = require("express");
const fileupload = require("express-fileupload");
const session = require("express-session");
const mongoose = require("mongoose");
const {PORT} = require("./config/constants");

const server = express();

server.use(express.static(__dirname, + "/public"));
server.use(express.static(__dirname, + "/node_modules/bootstrap/dist/css"));
server.use(express.urlencoded({extended: true}));
server.use(fileupload.static());
server.set("view engine","ejs")


mongoose.connect(DB_URI)
.then(() => console.log("MongoDB connectid"))
.catch((error)=> console.log(error));

server.listen(PORT, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Server running on port " + PORT);
    }
});