import React from 'react';
import Login from '../../../LogIn/Login';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import './SignUp.css';
import img from './jpg.jpg'
const SignUp = () => {
    return (
        <div className='overflow-hidden'>
        <Navbar></Navbar>
        <div className="signup-banner">
        <div className="row px-3">
          <div className="col-lg-7">
            <div className="member-caption">
              <h6 className='text-light'>Hey Welcome,</h6>
              <h1>Log In First
                 <br /> And Check Your Activities 
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur exercitationem commodi unde dignissimos praesentium
                dolore saepe in eligendi deleniti distinctio.
              </p>
              <button className="mt-3">View More</button>
            </div>
          </div>
          <div className="col-lg-5"></div>
        </div>
        </div>
        <div className="row px-5">
         <div className="col-lg-6">
         <div className="sing-up-img mt-5">
             <img src={img} alt="" />
           </div>
         </div>
         <div className="col-lg-6">
         <Login></Login>
         </div>
        </div>
       
        <Footer></Footer>
            
        </div>
    );
};

export default SignUp;