module.exports = mongoose =>{
    
    const userSchema =new mongoose.Schema({
        username : String,
        message : String,
        hobbies : []
    });

    const User = mongoose.model("User",userSchema);

    return User;
};