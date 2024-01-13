const mongoose=require("mongoose");

const EmailSheduleSchema=new mongoose.Schema({
    title: String,
    description: String,
    subject: String,
    frequency: String,
    repeat: String,
    time: { type: Date }
})

module.exports.EmailShedule=mongoose.model("EmailShedule", EmailSheduleSchema)