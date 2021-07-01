import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [navbar,setNavbar]=useState(false)
    const changeBackground=()=>{
      if(window.scrollY >170){
          setNavbar(true)
      }else{
          setNavbar(false)
      }
    }
    window.addEventListener('scroll',changeBackground)

  return (
   //////////////////////
   <nav class={navbar ? "navbar navbar-expand-lg navbar-light sticky grybg fixed-top" : "navbar navbar-expand-lg navbar-light sticky  background-color"}>
   <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <a class="navbar-brand" href="#">
            <img src={logo} alt=""/>
        </a>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar-end-item" id="navbarNav">
    <ul class="navbar-nav ml-auto our-primary-menu ">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/service'>Services</Link></li>
                <li><Link to='/funding'>Funding</Link></li>
                <li><Link to='/loan'>Loan</Link></li>
                <li><Link to='/'>Contact</Link></li>
                <li><Link to='/'>Dashboard</Link></li>
                </ul>
                <div class="header-info d-flex align-items-center">
                <div class="header-search">
                    <span> <FontAwesomeIcon icon={faSearch} /> </span>
                </div>
                <div class="header-call clearfix text-center">
                    <div class="header-call-icon float-left  h-100">
                        <span> <FontAwesomeIcon icon={faPhone} /> </span>
                    </div>
                    <div class="header-call-info">
                        <span class="d-block">Call Now</span>
                        <a class="d-block" href="tel:+15143125678">+1 (514) 312-5678</a>
                    </div>
                </div> 
               
            </div>
            <div class="header-button class-for-visibility text-center">
                    <Link to='/service'>Apply Now</Link>
                </div>
       
    </div>
  </div>
</nav>



  )
  }

export default Navbar;
