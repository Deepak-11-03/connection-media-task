const jobModel =require('../models/jobModel')


module.exports.createJob = async(req,res)=>{
    try {
        let { title, description, companyName ,location,skills,select}=req.body
        if(!title || !description || !companyName || !location || !skills || !select){
            return res.status(400).send({message : 'Enter all details'})
        }
        let array = skills.split(",").map(x => x.trim())
        skills = array
        let data ={title, description, companyName ,location,skills,workType:select}
        const job =await jobModel.create(data)
        return res.status(201).send({message:'Job created'})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports.getJobs =async(req,res)=>{
    try{
        const jobs = await jobModel.find()
        return res.status(200).send(jobs)
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }
}