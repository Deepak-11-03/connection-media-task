const mongoose =require('mongoose')

const jobSchema = mongoose.Schema({
    title:String,
    description:String,
    companyName:String,
    user:{
        type:mongoose.Types.ObjectId,
        ref:''
    },
    location:String,
    skills:[String],
    workType:String,
    postedAt: {
        type:String,
        default: new Date().toLocaleString()
    },  
})
module.exports = mongoose.model('Job' ,jobSchema)