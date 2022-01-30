const control = require('../app/controller/routeController/routeController');
const block = require('../app/block/block');
const database = require('../app/database/db');
const db = require('./database');


const User = database.user;

beforeAll(async () => {
    await db.connect();
});

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDataBase());

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

    test('it should not respond to /hobbies with no params', (done)=>{
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
        done()       
    });

    test('it should send user feeling', async (done)=>{
        let response;

        const req = {
            params : {
                user : "joshuaonwuzu"
            }
        }

        const res = {
            send : (data)=>{
                response = data

                expect(response).toEqual({
                    message : 'doing well'
                });
                done()
            }
        }

        const username = 'joshuaonwuzu';
        const userRadioOption = 'doing well';
        const hobbies = ['football','basketball', 'music']

        const recordUser = new User({
            username : username,
            message : userRadioOption,
            hobbies : hobbies
        });
    
        await recordUser.save();
        

        control.getUserResponse(req, res)



    });

    test('it should response with user hobbies', async(done)=>{
        const username = 'joshuaonwuzu';
        const userRadioOption = 'doing well';
        const hobbies = ['football','basketball', 'music']

        const recordUser = new User({
            username : username,
            message : userRadioOption,
            hobbies : hobbies
        });
    
        await recordUser.save();

        const req = {
            params : {
                user : 'joshuaonwuzu'
            }
        }

        const res = {
            send : (data)=>{
                const response = data;
                
                expect(response).toEqual({
                    hobbies : ['football','basketball', 'music']
                });
                done()
            }
        }

        control.getUserHobbies(req, res);
    });

    test('fail to get user hobbies response', async( done)=>{
        const req = {
            params : {
                user : "kelvin"
            }
        }
        let response ;
        const res = {
            send : (data)=>{
                response = data
                expect(response).toEqual({
                    status : "fail",
                    message : "cannot get response of user specified"
                });
                done()

            }
        }
        control.getUserHobbies(req, res)
    });

    test('fail to get user feeling response', (done)=>{
        const req = {
            params : {
                user : "kelvin"
            }
        }
        let response ;
        const res = {
            send : (data)=>{
                response = data
                expect(response).toEqual({
                    status : "fail",
                    message : "cannot find response of user specified"
                });
                done()

            }
        }
        control.getUserResponse(req, res)      
    })

})