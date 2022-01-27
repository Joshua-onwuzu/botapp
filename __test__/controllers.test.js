const control = require('../app/controller/routeController/routeController');
const block = require('../app/block/block');
const {getFeelingDatabase, hobbiesDatabase, failToGetHobbies} = require('./database');

describe('test controllers', ()=>{
    test('respond to /message', ()=>{
        let text;
        const req = {}
        const res = {
            send : (input)=>{
                text = input
            }
        }
        control.handleMessage(req,res)

        expect(text).toEqual(block.radioBoxFeeling);
    });

    test('it should not respond to /q1 with no params', ()=>{
        let response;

        const req = {}

        const res = {
            send : (input)=>{
                response = input
            }
        }
        control.getUserResponse(req,res)

        expect(response).toEqual({
            status : "fail",
            message : "specify username on request params"
        });
    });

    test('it should not respond to /hobbies with no params', ()=>{
        let resp;

        const req = {}

        const res = {
            send : (input)=>{
                resp = input
            }
        }
        control.getUserHobbies(req,res)

        expect(resp).toEqual({
            status : "fail",
            message : "specify username on request params"
        });        
    });

    test('it should send user feeling', ()=>{
        let response;

        const req = {
            params : {
                user : "joshuaonwuzu"
            }
        }

        const res = {
            send : (data)=>{
                response = data
            }
        }

        const callBackFunction = (err, data)=>{
            if (data){
                res.send(data)
            }
        }

        const dataObject = {
            username : req.params.user
        }

        const User = new getFeelingDatabase()

        User.findOne(dataObject,callBackFunction)

        expect(response).toEqual({
            message : 'doing well'
        })



    });

    test('it should response with user hobbies', ()=>{
        let response;

        const req = {
            params : {
                user : "joshuaonwuzu"
            }
        }

        const res = {
            send : (data)=>{
                response = data
            }
        }

        const callBackFunction = (err, data)=>{
            if (data){
                res.send(data)
            }
        }

        const dataObject = {
            username : req.params.user
        }

        const User = new hobbiesDatabase()

        User.findOne(dataObject,callBackFunction)

        expect(response).toEqual({
            hobbies : ['Basketball', 'swimming']
        })
    });

    test('fail to get user hobbies response', ()=>{
        let resp;

        const req = {
            params : {
                user : "kelvin"
            }
        }

        const res = {
            send : (data)=>{
                resp = data
            }
        }

        const callBackFunction = (err, data)=>{
            if (!data){
                res.send({
                    status : "fail",
                    message : "cannot get response of user specified"
                })
            }
        }

        const dataObject = {
            username : req.params.user
        }

        const User = new failToGetHobbies()

        User.findOne(dataObject,callBackFunction)

        expect(resp).toEqual({
            status : "fail",
            message : "cannot get response of user specified"
        })
    });

    test('fail to get user feeling response', ()=>{
        let resp;

        const req = {
            params : {
                user : "kelvin"
            }
        }

        const res = {
            send : (data)=>{
                resp = data
            }
        }

        const callBackFunction = (err, data)=>{
            if (!data){
                res.send({
                    status : "fail",
                    message : "cannot get response of user specified"
                })
            }
        }

        const dataObject = {
            username : req.params.user
        }

        const User = new failToGetHobbies()

        User.findOne(dataObject,callBackFunction)

        expect(resp).toEqual({
            status : "fail",
            message : "cannot get response of user specified"
        })        
    })

})