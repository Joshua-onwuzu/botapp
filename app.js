require('dotenv').config({path: __dirname + '/.env'});

const express = require("express");
const app = express();

const db = require('./app/database/db');

db.mongoose.connect(db.url,{useNewUrlParser : true, useUnifiedTopology:true})

const { createMessageAdapter } = require('@slack/interactive-messages')
const slackInteractions = createMessageAdapter(process.env.SECRET_KEY);

app.use('/action', slackInteractions.expressMiddleware())

const PORT = process.env.PORT || 8000;

app.use(express.json());

const interaction = require ('./app/controller/slackInteraction/controller')


slackInteractions.action({action_id :"actionId-0"},interaction.radioButtonInteraction);


slackInteractions.viewSubmission('favorite_modal_submit' ,interaction.favoriteHobbySubmit)

require('./app/routes/routes')(app);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})