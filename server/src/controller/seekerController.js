const seekerModel=require('../models/seekerModel')
const jwt =require ('jsonwebtoken')
const bcrypt =require('bcrypt')


module.exports.register= async(req, res)=>{
    try {
        let data=req.body;
        let {fullname,mobile,email,password,skills}=data
        let existingmail = await seekerModel.findOne({email:email})
        let existingMobile = await seekerModel.findOne({mobile:mobile})
        if(existingmail || existingMobile){
            return res.status(409).send({message : 'already exist'})
        }
        let hashPass = await bcrypt.hash(password,10)
        let array = skills.split(",").map(x => x.trim())
        skills = array
            
        const userDetails ={fullname,mobile,email,skills,password:hashPass}
        await seekerModel.create(userDetails);
        return res.status(201).send({message:'Account registered'})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


module.exports.login =async(req, res)=>{
    try {
        let data=req.body;
        const {email,password}=data
        let userEmail = await seekerModel.findOne({email:email})
        if(! userEmail ){
            return res.status(409).send({message : 'user not found'})
        } 
        const validPassword = await bcrypt.compare(password, userEmail.password);
        if (!validPassword) {
            return res.status(401).send({message: "inValid password" });
        }
        const name=userEmail.fullname.split(" ")[0]
        const token =jwt.sign({userId:userEmail._id, email:email},"dsdsdsdasdas")   
        return res.status(200).send({user:name,token :token})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports.getSeeker= async(req,res)=>{
    try {
        const seekers = await seekerModel.find();
        return res.status(200).send(seekers)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}