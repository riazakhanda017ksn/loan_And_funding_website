import React from "react";
import { useForm } from "react-hook-form";
import help from '../../../images/check.png';
import "./NeedHelp.css";
const NeedHelp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const messageUs={
        name:data.name,
        email:data.email,
        number:data.number,
        subject:data.subject,
        message:data.message,


    }
    fetch('http://localhost:5055/help',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(messageUs)

    })
    .then(result=>{
    if(result){
        alert('Thanks For Message !! After Few Days We will Knock You !')
    }else{
        alert('Sorry Dear Users !! Your Message Could Not Send !')
    }
    })
  };
  return (
    <div className=" need-help-bg ">
      <div class="container">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <div class="team-management text-center">
              <h6>Need Help</h6>
              <h2>We Are Here To Help You </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
      <div className="row px-5">
        <div className="col-lg-6">
          <div className="container-for-news-form mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                {...register("name")}
                placeholder="Name"
                type="text"
                required
              />

              <br />
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="Your Email"
                required
              />
              <br />
              <input
                type="number"
                name="number"
                {...register("number")}
                placeholder="Your Number"
                required
              />

              <br />
              <input
                type="text"
                name="subject"
                {...register("subject")}
                placeholder="Subject"
                required
              />

              <br />
              <textarea
                className="need-width mb-3"
                {...register("message")}
                name="message"
                id=""
                cols="30"
                rows="4"
                placeholder="Share Your Opinion"
                required
              ></textarea>
              <br />
              <button type="submit" value="Send Message">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
            <div className="help-img">
                <img src={help} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
