import React ,{useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import './Home.css'

export default function Home() {

  const navigate =useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/dashboard')
    }
  })

  return (
    <div className='homePage'>
     <h1>Register here</h1>
      <hr />
      <h2>Find job according to your skills</h2>
    <br/>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit aliquam eos officiis quos dignissimos? Perferendis quibusdam rerum provident in! Nemo eveniet perferendis laborum placeat sunt? Deleniti quo assumenda iste exercitationem praesentium id vero repellendus consectetur! Illo deleniti magnam non unde commodi fugit, vero assumenda pariatur, illum earum tempora obcaecati optio nihil beatae dolorum expedita rerum neque itaque nostrum nobis, ipsam eligendi. Alias amet quae corporis optio dicta! Quas natus alias totam aliquam repellendus perspiciatis, facere fugit ad ipsum consectetur at!</p>

    </div>
  )
}
