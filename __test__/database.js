
const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');

let mongod;

exports.connect = async ()=>{
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    mongoose.connect(uri,{useNewUrlParser : true, useUnifiedTopology:true})
}

exports.closeDataBase = async ()=>{
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    mongod.stop()
}

exports.clearDatabase = async ()=>{
    const collections = mongoose.connection.collections;

    for(const key in collections){
        const collection = collections[key];
        await collection.deleteMany();
    }
}