const block = require('../../block/block');

const client = require('../webClient/client');

const db = require('../../database/db');

const User = db.user;

let channel;
let userRadioOption;
let username;

exports.radioButtonInteraction = async (payload)=>{
    try {
        channel = payload.channel.id
        userRadioOption = payload.actions[0].selected_option.value
        username = payload.user.username;

        await client.views.open({
            trigger_id: payload.trigger_id,
            view: block.favoriteHobbiesBlock
          }
        )
      } catch (e) {
          console.log(e.data);
      }
      return {
        text: 'Processing...',
      }
};

exports.favoriteHobbySubmit = async (payload) => {
    const userSelectedHobbies = payload.view.state.values.hobbies_block.checkboxes_action.selected_options
    const hobbies = []
    userSelectedHobbies.forEach(hobby =>{
        hobbies.push(hobby.value)
    })
    console.log(userRadioOption, username, hobbies)

    const recordUser = new User({
        username : username,
        message : userRadioOption,
        hobbies : hobbies
    });
    recordUser.save(async (err,data)=>{
        if(!err){
            await client.chat.postMessage({channel: channel, text : "Thank you"})
        }
    })
    return {
      response_action: "clear"
    }
  }