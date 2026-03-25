require("dotenv").config()
const app = require("./src/app")
const databaseConnection = require("./src/config/databse")

databaseConnection()
app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT} `)
})