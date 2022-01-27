exports.getFeelingDatabase =  class Database{

    findOne (user, callBack){
        if(user.username){
            const data = {
                message : "doing well"
            }
            const err = ""
            return callBack(err, data)
        }
    }
}

exports.hobbiesDatabase =  class Database{

    findOne (user, callBack){
        if(user.username){
            const data= {
                hobbies : ['Basketball', 'swimming']
            }

            const err = ""
            return callBack(err,data)
        }
    }
}

exports.failToGetHobbies = class Database{

    findOne (user, callBack){
        if(user.username){

            const err = ""

            return callBack(err)
        }
    }
}

exports.failToGetFeeling = class Database{

    findOne (user, callBack){
        if(user.username){

            const err = ""

            return callBack(err)
        }
    }
}