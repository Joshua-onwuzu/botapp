const block = require('../../block/block');

const {createRecord} = require('./createUserRecord')

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
    createRecord(username, userRadioOption, hobbies, channel);
  }