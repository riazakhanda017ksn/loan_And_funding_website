import React from 'react';

const ReviewSwctionDetails = (props) => {
    const {name,position,Message,imageURL}=props.reviewItems
   
    return (
        <>
          <div className="flex-system-item mt-5 px-5">
         
         <div className="client-comment mt-5 pt-5">
            <p>{Message}</p>

             <h6 className='mt-3'>{name}</h6>
             <small>{position}</small>
         </div>
    
    
         <div className="client-img text-center">
           <img src={imageURL} alt="" />
         </div>
         </div>  
        </>
    );
};

export default ReviewSwctionDetails;