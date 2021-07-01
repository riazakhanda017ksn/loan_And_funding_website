import React from 'react';
import whyPeopleChooseUs from '../../../images/choose.png'
import { faBalanceScaleRight, faChevronDown, faClock, faHandHolding, faPhone, faPlayCircle, faSearch, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './WhyPeopleChoose.css'
const WhyPeopleChoose = () => {
    return (
        <section class="why-people-choose-us">

        <div >
        <div class="row px-5">
          <div class="col-lg-6">
          <div class="for-choose">
        <div class="why-choose">
        <h6>Transparent process</h6>
        <h2>Why people choose us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua.</p>
        </div>
          <div class="why-people-choose-us-img">
            <img src={whyPeopleChooseUs} alt=""/>
          <div class="for-youtube-logo">
           <a href="">
           <FontAwesomeIcon icon={faPlayCircle} /></a>
        </div>
        </div>
        </div>
        
            
          </div>
        
        <div class="col-lg-6">
        
        <div class="row">
        <div class="col-lg-6 mt-4">
        
        <div class="the-mother-box text-center mb-4">
        <div class="the-garentee-logo">
          <span><FontAwesomeIcon icon={faThumbsUp} /></span>
        </div>
        <div class="the-box-header">
        
          <h5>Guarantee</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        
        </div>
        
        </div>
        
        </div>
        <div class="col-lg-6">
        
        <div class="the-mother-box text-center mb-4">
        <div class="the-garentee-logo">
          <span><FontAwesomeIcon icon={faClock} /></span>
        </div>
        <div class="the-box-header">
        
          <h5>Speed</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        
        </div>
        
        </div>
        
        </div>
        <div class="col-lg-6">
        
        <div class="the-mother-box text-center mb-4">
        <div class="the-garentee-logo">
          <span><FontAwesomeIcon icon={faHandHolding} /></span>
        </div>
        <div class="the-box-header">
        
          <h5>Reliability</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        
        </div>
        
        </div>
        
        </div>
        <div class="col-lg-6">
        
        <div class="the-mother-box text-center mb-4 mt4">
        <div class="the-garentee-logo">
          <span><FontAwesomeIcon icon={faBalanceScaleRight} /></span>
        </div>
        <div class="the-box-header">
        
          <h5>Experience</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        
        </div>
        
        </div>
        
        </div>
        
        
        </div>
        </div>
        </div>
        </div>
        
        
        </section>
    );
};

export default WhyPeopleChoose;