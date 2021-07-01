import React from 'react';
import Experience from '../../Home/Experience/Experience';
import FundingCircle from '../../Home/FundingCircle/FundingCircle';
import ReviewSection from '../../Home/ReviewSection/ReviewSection';
import Team from '../../Home/Team/Team';
import WhyPeopleChoose from '../../Home/WhyPeopleChoose/WhyPeopleChoose';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import CustomBanner from '../CustomBanner/CustomBanner';

const AboutUs = () => {
    return (
        <div className="need-overflow">
            <Navbar></Navbar>
            <CustomBanner></CustomBanner>
            <Experience></Experience>
            <WhyPeopleChoose></WhyPeopleChoose>
            <ReviewSection></ReviewSection>
            <FundingCircle></FundingCircle>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;