module.exports = app =>{
    const control = require('../controller/routeController/routeController')

    const router = require('express').Router();

    app.use(router)

    router.post('/message',control.handleMessage);

    router.get('/q1/:user', control.getUserResponse);

    router.get('/hobbies/:user', control.getUserHobbies);
}