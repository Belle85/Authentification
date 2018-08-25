var db = require("../models");

module.exports = function(app){

    app.post('/api/signup', function(req,res){
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(result){
            console.log(res)
            res.json(result)
        })
    })
}