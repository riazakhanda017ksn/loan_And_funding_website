import React, { useRef } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

 function ForgetPassword() {
     const emailRef=useRef();
     const {resetPassword}=useAuth()
     const [error,setError] =useState("")
     const [loading,setLoading] =useState(false)
     const [message,setMessage] =useState("")
     const handleSubmit = async(e)=>{
         e.preventDefault()

         try {
             setMessage("")
             setLoading(true)
             setError("");
             await resetPassword(emailRef.current.value);
             setMessage('check your inbox for further instructor')
         } catch (error) {
             setError('failed to reset password')
         }
         setLoading(false)
     }
    return (
        <div className='mt-5 px-4 pt-5'>
        <div>
         <h4 className=" mb-4 mt-5 pt-5">Password Reset</h4>
         {
           error && <div class="alert alert-danger" role="alert">
           {error}
         </div>
          }
         {
           message && <div class="alert alert-success" role="alert">
           {message}
         </div>
          }
         <div class="sinInSection ">
         <form onSubmit={handleSubmit}>
         <label for="formGroupExampleInput" class="form-label">Email</label>
         <input type="email" name="email" id="email" ref={emailRef}  required/> <br />
         <div className="div-flex">
          <div><button disabled={loading} type='submit'>Reset password</button></div>
          <div className="forget-password"><Link to='/user-login' className='border-bottom'>Log In</Link></div>
          </div>
          </form>
     </div>
     <div className="w-100 text-customize-option mt-4 custom-text"><span>Don't Have Account?</span> <Link to='/signup'>Create An Account</Link></div>
   
 </div>
 
         </div>
    )
}

export default ForgetPassword