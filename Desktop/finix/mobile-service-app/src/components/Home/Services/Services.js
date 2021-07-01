import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Services = ( props ) => {
const {LoanName,LoanDescription,LoanReason, LoanTypes,LoanReasonDescription,imageURL,LoanGuideline}=props.serviceItems
console.log('name of loan',props.serviceItems);
  return (


    <div class="row">
                
    <div class="col-lg-6">
      <div class="img-header">
        <div class="img-header-partssss mt-5">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="the-mother-togle-bar">
        <div class="toogle-bars-header">
          <h3>{LoanName}</h3>
          <p>
        {
          LoanDescription
        }
          </p>
        </div>
        <div class="toogle-bars-ul">
        <h3 className='pb-2 font-sizing'>{LoanTypes}</h3>
          <ul>
            <li>Secured loans</li>
            <li>Unsecured loans</li>
            <li>Revolving credit facilities</li>
            <li>Business cash advances</li>
          </ul>
        </div>
        <div class="toogle-bars-header">
          <h3 className='pb-1 font-sizing'>{LoanReason}</h3>
          <p>
         {LoanReasonDescription}
          </p>
        </div>
        <div class="toogle-bars-header">
          <h3 className='pb-2 font-sizing'>{LoanGuideline}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et
            Quis.
          </p>
        </div>
        <div className="buy-this-service">
          <button >Take Loan</button>
        </div>
      </div>
    </div>
  </div>

        
  );
};

export default Services;
