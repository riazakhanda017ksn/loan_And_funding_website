import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import member from "../../../images/57314.jpg";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
import "./MemberUpload.css";
const MemberUpload = () => {
  const [imageURL, setImageURL] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const myDate = new Date();
  console.log("my date is", myDate);
  const onSubmit = (data) => {
    const memberUpload = {
      name: data.name,
      professional: data.professional,
      fbLink: data.fbLink,
      imageURL: imageURL,
      myDate: myDate,
    };
    fetch("http://localhost:5055/addMemberCollection", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(memberUpload),
    }).then((result) => {
      if (result) {
        alert("Dear Admin You Are Success To Add A Xpart Person To Your Profile");
      } else {
        alert("Sorry Admin ! You Could Not Success Please Try Again !.");
      }
    });
  };
  const handleAddPeople = (events) => {
    console.log(events.target.files[0]);
    const imageData = new FormData();
    imageData.set("key","b9c36745cce260532e007ff3f6b9c0cd");
    imageData.append("image", events.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)

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
      <section className="memberUpload">
        <div className="row px-3">
          <div className="col-lg-7">
            <div className="member-caption">
              <h6>Hey Admin,</h6>
              <h1>
                Welcome To Your Member Global <br /> Leadership Team
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
      </section>
      <div className="adding-member-from py-5">
        <div className="row px-4 bg-white">
          <div className="Xpart-people-upload-caption text-center px-5">
            <span>Expert people Add Section</span>
            <h2>Global leadership team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-lg-6 pt-4">
            <div className="adding-member mt-5 pt-5">
              <h5>Apply For Add Expert People </h5>
              <div className="container-for-form mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="custom-edit">
                    <input
                      name="name"
                      {...register("name")}
                      placeholder="Name"
                      type="text"
                      required
                    />
                  </div>
                  <br />
                  <div className="custom-edit">
                    <input
                      type="text"
                      name="professional"
                      {...register("professional")}
                      placeholder="Professional"
                      required
                    />
                  </div>
                  <br />
                  <div className="custom-edit">
                    <input
                      type="text"
                      name="fbLink"
                      {...register("fbLink")}
                      placeholder="Facebook Profile"
                      required
                    />
                  </div>
                  <br />
                  <div className="custom-edit-for-file">
                    <input type="file" onChange={handleAddPeople} required />
                  </div>

                  <br />
                  <button type="submit" value="Upload Service">
                    Add Member{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="adding-member">
              <img src={member} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MemberUpload;
