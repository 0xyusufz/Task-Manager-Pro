const mongoose = require("mongoose")


const notesSchema = new mongoose.Schema({
    title:String,
    description:String,
    estatus:String,
    priority:String,
    createdAt: Date
})

const noteModels = mongoose.model("allnotes",notesSchema)

module.exports = noteModels