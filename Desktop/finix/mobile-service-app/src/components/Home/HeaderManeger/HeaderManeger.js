import React from "react";
import Navbar from "../../Share/Navbar/Navbar";
import Experience from "../Experience/Experience";
import Footer from "../../Share/Footer/Footer";
import FundingCircle from "../FundingCircle/FundingCircle";
import GroupWork from "../GroupWork/GroupWork";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import ReviewSection from "../ReviewSection/ReviewSection";
import Service from "../Service/Service";
import WhyPeopleChoose from "../WhyPeopleChoose/WhyPeopleChoose";
import "./HeaderManeger.css";

const HeaderManeger = () => {
  return (
    <div>
      <section className="banner-images ">
        <Navbar></Navbar>
        <HeaderTitle></HeaderTitle>
      </section>
      <div className="need-overflow">
        <Service></Service>
        <Experience></Experience>
        <WhyPeopleChoose></WhyPeopleChoose>
        <FundingCircle></FundingCircle>
        <ReviewSection></ReviewSection>
        <GroupWork></GroupWork>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HeaderManeger;
