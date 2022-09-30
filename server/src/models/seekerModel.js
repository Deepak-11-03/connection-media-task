const mongoose =require('mongoose');
 
const seekerSchema =mongoose.Schema({
    fullname:String,
    email:{type:String , unique:true},
    mobile:{type:Number, unique:true},
    skills:[String],
    password:String,
    
})

module.exports =mongoose.model('Seeker', seekerSchema)