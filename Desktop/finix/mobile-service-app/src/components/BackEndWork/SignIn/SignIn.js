import React from "react";
import Navbar from "../../Share/Navbar/Navbar";
import './SignIn.css'
import SingupMethod from '../../../LogIn/SingupMethod'
import Footer from "../../Share/Footer/Footer";
import singup from '../../../images/online-registration.jpg'
const SignIn = () => {

  return (
    <div className='overflow-hidden'>
     <Navbar></Navbar>
     <div className="sign-banner">
     <div className="row px-3">
          <div className="col-lg-7">
            <div className="member-caption">
              <h6>Hey Welcome,</h6>
              <h1>
                SignIn First And Become Our User <br /> Then You Can Start Your Activities
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
         <div className="col-lg-6"><SingupMethod></SingupMethod></div>
         <div className="col-lg-6">
           <div className=" mt-5">
             <img src={singup} alt="" />
           </div>
         </div>
        </div>
     <Footer></Footer>
    </div>

        
  )
};

export default SignIn;