const client = require('../webClient/client');
const db = require('../../database/db');

const User = db.user;

exports.createRecord = async (username, userRadioOption, hobbies, channel)=>{
    try {
        const recordUser = new User({
            username : username,
            message : userRadioOption,
            hobbies : hobbies
        });
    
        await recordUser.save(async (err,data)=>{
            if(!err){
                await client.chat.postMessage({channel: channel, text : "Thank you"})
            }
        });
        
        return {
            response_action: "clear"
        }        
    } catch (error) {
        console.log(error)
    }

}