import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react/cjs/react.development";
import Navbar from "../../../components/Share/Navbar/Navbar";
import newsImg from "../../../images/value.png";
import Footer from "../../Share/Footer/Footer";
import "./AddNews.css";
const AddNews = () => {
  const [imageURL, setImageURL] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const newsDate = new Date();
  const onSubmit = (data) => {
    const newsItem = {
      newsName: data.name,
      News_Link: data.News_Link,
      imageURL: imageURL,
      newsDate: newsDate,
    };
    
    fetch('http://localhost:5055/addNews',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(newsItem)
  })
  .then(result=>{
      if(result){
          alert("Wow !! You Have Been Passed Your News To Your Profile")
      }else{
           alert("Sorry !! You Could Not Passed Your News To Your Profile")
      }
  })
  };

  const handleAddNews = (events) => {
    console.log(events.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "b9c36745cce260532e007ff3f6b9c0cd");
    imageData.append("image", events.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload",imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="need-overflow">
      <Navbar></Navbar>
      <div className="news-background">
        <div className="row px-3">
          <div className="col-lg-7">
            <div className="member-caption">
              <h6>Hey Admin,</h6>
              <h1>
                Welcome To Your News Post Page <br /> And Update Your News
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
      <div className="row px-5 py-5 News-bg">
        <div className="news-heading py-5 text-center">
          <span>Add Recent News</span>
          <h2>Success story posts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="col-lg-6">
          <div className="container-for-news-form mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                {...register("name")}
                placeholder="News Caption"
                type="text"
                required
              />

              <br />
              <input
                type="text"
                name="News_Link"
                {...register("News_Link")}
                placeholder="News Link"
                required
              />

              <br />
              <input type="file" onChange={handleAddNews} required />
              <br />
              <button type="submit" value="Upload Service">
                Post News
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="news-img mt-4">
            <img src={newsImg} alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddNews;
