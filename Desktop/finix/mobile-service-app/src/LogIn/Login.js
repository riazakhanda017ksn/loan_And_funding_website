import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import userLogin from '../images/high-five.png'
function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const {login}=useAuth()
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    const history =useHistory()

    ///handle_submit
    const handleSubmit =async(e) =>{
        e.preventDefault()
        try {
           setLoading(true);
           setError("")
           await login(emailRef.current.value, passwordRef.current.value)
           history.push("/dashboard")
        } catch (error) {
            setError("failed to Log In")
        }
        setLoading(false)
    }
    return (
        <div className='mt-5 py-5 mb-5'>
        <div>
         <h4 className=" mb-4">Log In  <img className='img-sizing' src={userLogin} alt="" /></h4>
         {
           error && <div class="alert alert-danger" role="alert">
           {error}
         </div>
          }
         <div class="sinInSection ">
         <form onSubmit={handleSubmit}>
         <label for="formGroupExampleInput" class="form-label">Email</label>
         <input type="email" name="email" id="email" ref={emailRef}  required/> <br />
         <label for="formGroupExampleInput" class="form-label">Password</label>
         <input type="password" name="password" id="password" ref={passwordRef} required/> <br />
          <div className="div-flex">
          <div><button disabled={loading} type='submit'>Log In</button></div> <div className="forget-password text-small"><Link to='/forgetPassword'>Forget Password?</Link></div>
          </div>
     </form>
     <div className="w-100 mt-3 text-center"> </div>
   </div>
     <div className="w-100 text-customize-option"><span>Don't Have Account?</span> <Link className='position' to='/signup'>Create An Account</Link>
     </div>
 </div>
 </div>
    )
}

export default Login