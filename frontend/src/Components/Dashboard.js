import React,{useState,useEffect} from 'react'
import './Dashboard.css'
export default function Dashboard() {

    const [seekers, setSeekers] = useState([]);
    const [job, setJob] = useState([]);
  
    useEffect(() => {
      getSeeker();
    },[]);
  
    const getSeeker = async () => {
      try {
        let data = await fetch('/getSeeker')
        data = await data.json()
        // console.log(data[0])
        setSeekers(data) 
      } catch (err) {
        console.log(err);
      }
    };

    
    useEffect(() => {
      getJobs();
    },[]);
  
    const getJobs = async () => {
      try {
        let data = await fetch('/jobs')
        data = await data.json()
        console.log(data)
        setJob(data) 
      } catch (err) {
        console.log(err);
      }
    };

    const filter=(e)=>{
      e.preventDefault()
    }

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Dashboard</h1>
        <div className="dashboard">
        <div className="seekers">
          <h2>All job seekers</h2>
              {seekers.map((item) => 
                <div id="details" key={item._id}>
                    <h4>Name : {item.fullname}</h4>
                    <h4>Email : {item.email}</h4><br />
                    <div id='description'>
                    <p ><b>Contact no:</b> {item.mobile}</p>
                    <br /><br />
                    <h4>Skills :  {item.skills.join(',')}</h4>
                    </div>
                    </div>
                )}
        </div>
        <div className="jobs">
          <h2>All Jobs</h2>
        {job.map((item) => 
          <div id="details" key={item._id}>
                    <span><b>Title : </b> {item.title}</span>
                    <span><b>Company Name : </b> {item.companyName}</span>
                    <span><b>Company Location : </b> {item.location}</span>
                    <span><b>Work Type : </b> {item.jobType}</span>
                    <span><b>Skills : </b>  {item.skills.join(',')}</span>
                    <p><b>Job Description : </b>{item.description}</p>
                    </div>
                )}
        </div>
        </div>
    </div>
  )
}
