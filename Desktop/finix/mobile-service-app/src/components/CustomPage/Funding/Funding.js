import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import CustomBanner from '../CustomBanner/CustomBanner';
import NeedHelp from '../../Home/NeedHelp/NeedHelp'
import Footer from '../../Share/Footer/Footer';
const Funding = () => {
    return (
        <div className='need-overflow'>
       <Navbar></Navbar>
       <CustomBanner></CustomBanner>
       <NeedHelp></NeedHelp>
       <Footer></Footer>
            
        </div>
    );
};

export default Funding;