const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var cors = require('cors');
var jwt = require('jsonwebtoken');
var uuid4 = require('uuid4');

var secretKey = uuid4();
var { user } = require('../models/user.model');



router.post('/register',(req,res,err)=>{

    try
    {
        if(req.body)
        {

            user.findOne({ email: req.body.email},(err, docs) => {
                if(docs){
                    res.status(409).send({
                        message:"Email Id already exits",
                    });
                }
                else{

                    var emp= new user({
                        fullName: req.body.fullName,
                        mobileNumber: req.body.mobileNumber,
                        email:req.body.email,
                        password:req.body.password
                    }); 
                    console.log(emp);
                    emp.save((err,doc)=>{
                        if(!err){
                            res.send(doc);
                            console.log(doc);
                        }
                        else{
                            console.log('error in users save' + JSON.stringify(err,undefined,2)); 
                        }
                    });
                }
            });
        }
    }
    
    catch(e){
        res.send(500);
    }       
});

router.post('/login',(req,res,next)=>{
        user.findOne({ email: req.body.email,password:req.body.password}, function(err, user) {
            if (!user) return res.status(401).send({ message: 'Invalid username or password'});
            if(user){
                jwt.sign({user},secretKey,(err,token)=>{
                    res.status(200).send({
                        message:"login successfully",
                        token:token
                    })
                });
           }
        }); 
});

module.exports = router;