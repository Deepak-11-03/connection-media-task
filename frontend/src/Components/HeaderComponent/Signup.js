import React, { useState ,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Form.css'
export default function Signup() {

  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/dashboard')
    }
  })
  const[error,setError]=useState(false)
  const closeError=()=>{
    setTimeout(()=>{
      setError(false)
     },1500)
  } 



const [user,setUser]=useState({
    fullname:'',mobile:'',email:'',password:'',skills:''
})

let name ,value;
const handleInput =(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
}

    const postDetails = async(e)=>{
      e.preventDefault();
      try {
        const {fullname,mobile,email,password,skills}=user

        if(fullname.length<3 || !/^[A-Za-z]/.test(fullname)){
          setError('Enter valid name')
          closeError()
        }
        else if(mobile.length !==10 || !/^[0-9]/.test(mobile)){
          setError('Enter valid mobile number')
          closeError()
        }
        else if(!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/).test(email)){
          setError('Enter valid email')
          closeError()
        }
        else if(password.length<8){
          setError('Password should be min 8 length')
          closeError()
        }
        else{
            let data= await fetch( "/register",{
                mode:'cors',
                method: "POST",
                headers: {
                      "Content-Type": "application/json",
                    },
                body: JSON.stringify({
                    fullname, mobile, email, password,skills
                }),
            });
           if(!data.ok){
              setUser(user)
              setError('This number or email is already exist')
              closeError()
              
           }
          if(data.ok){
            // setUser(data)
            navigate('/login')
          }

        }
      } catch (error) {
            setError(error.message)
      }
    }
  return (
    <div>
    <div className="container">

     {error?<div id='error'><span>{error}</span>  </div>:''}
      <form method='post' >
        <h1>Sign up Here</h1>
        <br />
        <input type="text" name='fullname' placeholder='Fullname *' autoComplete='off' value={user.fullname} onChange={handleInput} autoFocus />
        <input type="number" name='mobile' placeholder='Mobile *' autoComplete='off' value={user.mobile} onChange={handleInput} />
        <input type="email" name='email' placeholder='Email *' autoComplete='off' value={user.email} onChange={handleInput} />
        <textarea name="skills" placeholder='Enter skills seprated by ( , )' value={user.skills} onChange={handleInput} ></textarea>
        <input type="password" name='password' placeholder='Password *' value={user.password} onChange={handleInput} />
        
        <br />
        <button type='submit' onClick={postDetails}>Create Account</button>
      </form>
      </div>
    </div>
  )
}
