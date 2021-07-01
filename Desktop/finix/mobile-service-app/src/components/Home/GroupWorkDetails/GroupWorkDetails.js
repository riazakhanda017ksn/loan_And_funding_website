import React from 'react';

const GroupWorkDetails = (props) => {

    const{newsName,News_Link,imageURL}=props.newsItem
    const date=new Date()
    return (
        <>
             <div class="col-lg-4 ">
                
     <a href={News_Link} target="_blank" rel="noopener noreferrer">
     <div class="container-of-group-work">
      <div class="group-img">
      
      <img src={imageURL} alt=""/>
      
      
      <div class="group-work">
      <span>{date.toDateString()}</span>
      <h2><a href="">{newsName}</a></h2>
      <a href={News_Link}>Read More</a>
      </div>
      </div>
      </div>
     </a>
    
      
      </div> 
        </>
    );
};

export default GroupWorkDetails;