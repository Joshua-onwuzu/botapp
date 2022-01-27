const control = require('../app/controller/routeController/routeController');
const block = require('../app/block/block');

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

})