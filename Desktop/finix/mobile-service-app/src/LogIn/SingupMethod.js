import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import './CustomCss.css'
import user from '../images/1063707.png'


export default function SingupMethod() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const {signup}=useAuth()
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    const history=useHistory()

   const handleSubmit=async(e)=>{
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
    }
    try {
        setLoading(true)
        setError('')
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push('/dashboard')
        console.log('signup',signup);
    } catch{
        setError('Failed to create create an Account')
    }
    setLoading(false)
    }

    return (
        <div className='row py-5'>
       <div>
        <h4 className="mb-4">Create Your Account <img className='img-sizing' src={user} alt="" /></h4>
        {error && <div class="alert alert-danger" role="alert">
         {error}
      </div>
      }
        <div class="sinInSection">
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="Your Name" required /> <br />
        <input type="email" name="email" id="email" ref={emailRef} placeholder='Your Email' required/> <br />
        <input type="password" name="password" id="password" ref={passwordRef} placeholder='New Password' required/> <br />
        <input type="password" name="confirmPassword" id="confirmPassword" ref={passwordConfirmRef} placeholder='Confirm Password'  required /> <br />
        <button   disabled={loading} type='submit'>Sing Up</button>
    </form>
  </div>
    
    <div className="w-100 mt-2 text-customize-option py-1"><span>Already have an account?</span> <Link to='/user-login'>Log In</Link></div>
</div>
        </div>
    );
};

