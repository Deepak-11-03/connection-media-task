import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './JobPost.css'
export default function JobPost() {

    const navigate =useNavigate()
    const[error,setError]=useState(false)
    const [select ,setSelect] =useState();
    const [job, setJob] = useState({
        title : "",
        description: "",
        companyName: "",
        location:"",
        skills:""
      });
    
    const closeError=()=>{
        setTimeout(()=>{
          setError(false)
         },1500)
    } 
    
      let name, value;
    
      const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setJob({ ...job, [name]: value });
      };


    const postJob= async(e)=>{
       e.preventDefault()
       const { title, description, companyName ,location,skills } = job;
        
       try {
            if(title===''){
                setError('Enter Job Title')
                closeError()
            }
            else if(description===''){
                setError('Enter description')
                closeError()
            }
            else if(description.length<30){
                setError('Enter more about job description')
                closeError()
            }
            else if(companyName===''){
                setError('Enter Company Name')
                closeError()
            }
            else if(location===''){
                setError('Enter Job Location')
                closeError()
            }
            else if(skills===''){
                setError('Enter required skills for job')
                closeError()
            }
            else{
                let data= await fetch( "/post-job",{
                    mode:'cors',
                    method: "POST",
                    headers: {
                          "Content-Type": "application/json",
                        },
                    body: JSON.stringify({
                        title, description, companyName ,location,skills,select
                    }),
                });
               if(!data.ok){
                  setJob(job)
                  setError('This number or email is already exist')
                  closeError()
                  
               }
              if(data.ok){
                navigate('/')
              }
            }
       } catch (error) {
            setError(error)
       }
    }

  return (
    <div id='jobform'>
        {error?<div id='joberror'>{error}</div>:''}
        <form  method="post" onSubmit={postJob}>
            <label>Job Title</label>
            <input type="text" name="title" onChange={handleInput}/>
            <label>Company Name</label>
            <input type="text" name="companyName"  onChange={handleInput}/>
            <label>Job Description</label>
            <textarea type="text" name="description" id='description' onChange={handleInput}></textarea>
            <label>Location</label>
            <input type="text" name="location" onChange={handleInput}/>
            <label>Job type</label>
            <select name="workType" value={select} onChange={e=>setSelect(e.target.value)}>
                <option>Remote</option>
                <option>In-office</option>
                <option>Work from home</option>
            </select>
            <label>Skills</label>
            <textarea type='address' name="skills"  placeholder='Enter skills seprated by comma ( , )' onChange={handleInput} ></textarea>
            <button type="submit" id='postjob'>Post Job</button>
        </form>
    </div>
  )
}
