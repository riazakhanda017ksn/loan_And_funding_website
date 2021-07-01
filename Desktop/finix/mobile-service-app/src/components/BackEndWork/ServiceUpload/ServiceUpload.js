import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import images from "../../../images/vector.png";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
import "./ServicesUpload.css";
const ServiceUpload = () => {
const [imageURL,setImagesURL]=useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   const eventData={
    LoanName: data.LoanName,
    LoanDescription: data.LoanDescription,
    LoanReason : data.LoanReason,
    LoanGuideline : data.LoanGuideline,
    LoanTypes : data.LoanTypes,
    LoanReasonDescription: data.LoanReasonDescription,
    imageURL: imageURL
   }
     fetch('http://localhost:5055/addEvent',{
        method:"POST",
        headers:{'content-type':'application/json'},
        body: JSON.stringify(eventData)
     })
     .then(res=>{
       if(res){
         alert('Your service has been uploaded')
       }else{
        alert('Your service has not uploaded')
       }
     })
  }

  ///
  const handleImageChange=events=>{
      console.log(events.target.files[0]);
      const imageData=new FormData()
       imageData.set('key','3b8fa16325c0baa1794c79a7349a090d')
       imageData.append('image',events.target.files[0])
       axios.post('https://api.imgbb.com/1/upload',
       imageData )
      .then(function (response) {
        setImagesURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="content-upload-section ">
      <div className="row px-3">
          <div className="col-lg-6">
              <div className="review-caption">
                  <h6 className='text-danger'>Hey Dear User,</h6>
                  <h1>Upload Your Best Professional Services</h1>
                  <p>Loans are advantageous as a relatively inexpensive way of borrowing money. We believe in those made to do more</p>
                  <button className='view-more mt-3'>View More</button>
              </div>
          </div>
          <div className="col-lg-6">

          </div>
         </div>
        
      </div>
      <div className="content-upload ">
        <div className="row">
        <div className="caption-for-review text-center mb-5 pb-5 extra-edit">
                     <span> Add New Service </span>
                     <h3> Upload Your Best Service Here </h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Provident quis iusto autem minima odio, temporibus harum placeat
                           cum ipsa doloribus iure.</p>
                 </div>
          <div className="col-lg-6 px-5">
            <div className="content-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input name='LoanName' type='text' {...register("LoanName")} placeholder='Loan Name' required/> 
                
                <br />
                <textarea name="LoanDescription" id="" cols="30" rows="4"  {...register("LoanDescription")} placeholder='Loan Description' required></textarea>
                
                 <br />
                <input name='LoanReason' type='text' {...register("LoanReason")} placeholder='Loan Reason' required/> 
                
                <br />
               
                <input name='LoanGuideline' type='text' {...register("LoanGuideline")} placeholder='Loan Guideline' required/> 
                
                <br />
                <input name='LoanTypes' {...register('LoanTypes')} placeholder='Loan Types' type='text' required/> 
                
                <br />
                 <input onChange={handleImageChange} type='file' required/> 
                
                <br />
                <textarea type='text' name="LoanReasonDescription" id="" cols="30" rows="4"  {...register("LoanReasonDescription")} placeholder='Loan Reason Description' required></textarea> 
               
               <br />
                <button type="submit" value='Upload Service'>Upload Service </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="service-image">
            <img src={images} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceUpload;
