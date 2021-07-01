import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import reviewImg from '../../../images/image4.png';
import Navbar from '../../Share/Navbar/Navbar';
import Footer from '../../Share/Footer/Footer'
import './AddReview.css';
const AddReview = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const[imageURL,setImageURL]=useState(null)

      const onSubmit = (data) => {
        const reviewData={
         name:data.name,
         position:data.position,
         Message:data.Message,
         imageURL: imageURL

        }
        fetch('http://localhost:5055/reviewSend',{
           method:'POST',
           headers:{'content-type':'application/json'},
           body:JSON.stringify(reviewData)
       })
       .then(result=>{
           if(result){
               alert('Thanks For Your Review !')
           }else{
                alert('Sorry Sir, Your Review Did Not Send !')
           }
       })


        }

        const handleReviewChange=events=>{
            console.log(events.target.files[0]);
            const imageData=new FormData()
             imageData.set('key','b758f93efcaa58bc0ea0713fb7388856')
             imageData.append('image',events.target.files[0])
             axios.post('https://api.imgbb.com/1/upload',
             imageData )
            .then(function (response) {
              setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
              console.log(error);
            })
        }
    return (
        <>
        <Navbar></Navbar>
        <section className='banner'>
         <div className="row px-3">
          <div className="col-lg-6">
              <div className="review-caption">
                  <h6>Hey Dear User,</h6>
                  <h1>Please Share Your Feed <br /> Back With Us.</h1>
                  <p>Loans are advantageous as a relatively inexpensive way of borrowing money. We believe in those made to do more</p>
                  <button className='view-more mt-3'>View More</button>
              </div>
          </div>
          <div className="col-lg-6">

          </div>
         </div>
        </section>
            <div className="add-review">
             <div className="row px-4">
                 <div className="caption-for-review text-center mb-5">
                     <span>Apply For Review </span>
                     <h3> Share Your Feedback Here </h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Provident quis iusto autem minima odio, temporibus harum placeat
                           cum ipsa doloribus iure.</p>
                 </div>
               <div className="col-lg-6 mt-3">
               <div className="review-form mt-5">
               
             <form onSubmit={handleSubmit(onSubmit)}>
                <input name='name' {...register('name')} placeholder='Your Name' type='text' required/> 
                
                 <br />
                 <input type='text' name='position' {...register("position",)} value='Author' required/> 
                
                <br />
                 <input onChange={handleReviewChange} type='file' required/> 
                
                <br />
                <textarea type='text' name="Your Message" id="" cols="30" rows="6"  {...register("Message")} placeholder='Loan Reason Description' required></textarea> 
               
               <br />
                <button type="submit" value='Upload Service'>Send Review </button>
              </form>
             </div>
               </div>
               <div className="col-lg-6">
                   <div className="review-img text-center">
                    <img src={reviewImg} alt="" />
                   </div>
               </div>
             </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddReview;