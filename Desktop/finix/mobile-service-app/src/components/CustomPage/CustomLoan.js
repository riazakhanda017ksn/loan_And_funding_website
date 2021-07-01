import React from 'react';
import Service from '../Home/Service/Service';
import Footer from '../Share/Footer/Footer';
import Navbar from '../Share/Navbar/Navbar';
import CustomBanner from './CustomBanner/CustomBanner';
import SecondBanner from './SecondBanner/SecondBanner';

const CustomLoan = () => {
    return (
        <div className="need-overflow">
        <Navbar></Navbar>
        <SecondBanner></SecondBanner>
        <Service></Service>
        <Footer></Footer>
            
        </div>
    );
};

export default CustomLoan;