import React, { useState } from "react";
import Slider from "react-slick";
import { useEffect } from "react/cjs/react.development";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import debra2 from '../../../images/banner1.png';
import debra3 from '../../../images/company2.png';
import debra from '../../../images/man.png';
import ReviewSwctionDetails from "../ReviewSectionDetails/ReviewSwctionDetails";
import './ReviewSection.css';
const ReviewSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
   const[reviews,setReviews]=useState([])
   useEffect(()=>{
       fetch('http://localhost:5055/loanReview')
       .then(res=>res.json())
       .then(data=>setReviews(data))
   },[])
    return (
        <div className='bg'>
        <div className="row px-4">
            <div className="col-lg-12">
            <div className="Review-section text-center mb-4">
            <span>Clients words</span>
            <h2>What our clients say</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
           
        <Slider {...settings}>
         {
             reviews.map(review=><ReviewSwctionDetails reviewItems={review}></ReviewSwctionDetails>)
         }

          </Slider>
          </div>
        </div>
    );
};

export default ReviewSection;