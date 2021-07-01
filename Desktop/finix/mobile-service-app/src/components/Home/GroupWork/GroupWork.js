import React from 'react';
import './GroupWork.css'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import GroupWorkDetails from '../GroupWorkDetails/GroupWorkDetails';
const GroupWork = () => {
  const [news,setNews]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5055/news')
    .then(res=>res.json())
    .then(data=>setNews(data))
  },[])
    return (
        <section class="group-work">

        <div class="container">
          <div class="row py-3">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            
              <div class="why-choose text-center">
              <h6>Recent news</h6>
              <h2>Success story posts</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
          </div>
          <div class="col-lg-3"></div>
          </div>
          </div>
      <div class="row py-4 px-5">
       {
         news.map(news=><GroupWorkDetails newsItem={news}></GroupWorkDetails>)
       }
      </div>
      </section>
      
    );
};

export default GroupWork;