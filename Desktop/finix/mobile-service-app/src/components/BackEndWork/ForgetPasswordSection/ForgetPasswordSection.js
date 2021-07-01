import React from 'react';
import ForgetPassword from '../../../LogIn/ForgetPassword';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import './ForgetPasswordSection.css'
import forgetImg from '../../../images/account-concept-illustration_114360-409.jpg'
const ForgetPasswordSection = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
          <div className="forget-password-section">
          <div className="row px-3">
          <div className="col-lg-7">
            <div className="member-caption mt-5">
              <h6 className='text-light'>Hey User,</h6>
              <h1>Forget Your Password?
                 <br /> Please Fill Up The Input In Below
              </h1>
              <p className='text-light'>
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
        <div className="row">
            <div className="col-lg-6">
                <ForgetPassword></ForgetPassword>
            </div>
            <div className="col-lg-6">
                <div className="Forget-password-img">
                    <img src={forgetImg} alt="" />
                </div>
            </div>
        </div>
           
            <Footer></Footer>
        </div>
    );
};

export default ForgetPasswordSection;