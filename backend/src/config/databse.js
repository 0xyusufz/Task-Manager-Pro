const mongoose = require("mongoose")

const databaseConnection =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database is connected successfully")
    }catch(e){
        console.log("failed to connect database pls try again later")
    }
}

module.exports = databaseConnection