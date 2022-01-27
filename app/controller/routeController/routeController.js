const block = require('../../block/block');
const db = require('../../database/db');

const User = db.user;
exports.handleMessage = async(req,res)=>{
    res.send(block.radioBoxFeeling);
}
exports.getUserResponse = (req,res)=>{
    try{
        if(!req.params){
            res.send({
                status : "fail",
                message : "specify username on request params"
            });
        }else{

            User.findOne({username : req.params.user},(err,data)=>{
        
                if(data){
                    res.send({
                        message : data.message
                    })
                }else{
                    res.status(404).send({
                        status : "fail",
                        message : "cannot find response of user specified"
                    })
                }
            })
        }

    }catch(err){
        console.log(err)
    }

};

exports.getUserHobbies = (req, res)=>{
    try{
        if(!req.params){
            res.send({
                status : "fail",
                message : "specify username on request params"
            })
        }else{
            User.findOne({username : req.params.user},(err,data)=>{
        
                if(data){
                    res.status(200).send({
                        hobbies : data.hobbies
                    })
                }else{
                    res.status(404).send({
                        status : "fail",
                        message : "cannot get response of user specified"
                    })
                }
            })
        }

    }catch(err){
        console.log(err.data)
    }
}