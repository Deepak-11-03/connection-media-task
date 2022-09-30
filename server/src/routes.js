const express=require('express')
const router=express.Router()
const seekerController =require('./controller/seekerController')
const jobController =require('./controller/jobController')


router.post('/register' ,seekerController.register )
router.post('/login',seekerController.login)
router.get('/getSeeker',seekerController.getSeeker)
router.post('/post-job' , jobController.createJob)
router.get('/jobs' , jobController.getJobs)


module.exports=router