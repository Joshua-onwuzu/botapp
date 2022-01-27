const dbConfig = require('./config');

const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose
db.user = require('./userModel')(mongoose);
db.url = dbConfig.url;

module.exports = db