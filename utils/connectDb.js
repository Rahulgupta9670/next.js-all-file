const mongoose = require("mongoose");

async function connectDb(){
    try {
        const Mongo_URI = "mongodb://localhost:27017/nextjsdb";
        await mongoose.connect(Mongo_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log("connect to Mogodb localhost")

    } catch (error) {
   
        console.log(error);
        
    }
}
module.exports = connectDb;