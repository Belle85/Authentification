var express = require("express");
var bodyParser = require("body-parser");

// CONFIG

var PORT = process.env.port || 8080;
// Using process.env.port is going to allow the app to use any cloud service and if not available it will be 8080
var mode = process.env.NODE_ENV;
var app = express();

// MIDDLEWARE

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(PORT, function(){
    // if(mode !== 'production'){
    //     var opn = require('opn')
    //     opn(`http://localhost:${PORT}`, {app: ['google chrome']})
    // }
    console.log(`Hey I'm listening on ${PORT}`);
})