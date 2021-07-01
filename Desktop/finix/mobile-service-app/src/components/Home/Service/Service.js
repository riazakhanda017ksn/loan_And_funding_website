import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PayDayLoan from "../../../images/1212.png";
import EducationLoan from "../../../images/education.png";
import HouseLoan from "../../../images/house.png";
import BusinessLoan from "../../../images/loan.png";
import PersonalLoan from "../../../images/personal.png";
import Agriculture from "../../../images/tractor.png";
import "./Service.css";

const Service = () => {
  const AgriculturalLoan = "AgriculturalLoan";
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5055/loan")
      .then((res) => res.json())
      .then((data) => setLoans(data));
  }, []);

  const history=useHistory()
  const handleClick=(_id)=>{
  const url=`service/${_id}`
   history.push(url)
  }


  return (
    <section class="slider-section ">
      <div class="row ">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <div class="short-caption text-center">
            <h6>Knowledge of the market</h6>
            <h2>Only the best professional services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="toogle-parts">
            {/* <ul class="nav custom-ul-li " id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active text-center img-customize" id="home-tab" data-toggle="tab"  id={'#PaydayLoan'}
                 role="tab" aria-controls="home" aria-selected="true" >
                 
                   <span><img src={Agriculture} alt="" /></span>
                <h4>Agricultural loan</h4>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center img-customize" id="profile-tab" data-toggle="tab"
                 href='#PersonalLoan' role="tab" aria-controls="profile" aria-selected="false">
                
                 
                 <span><img src={PersonalLoan} alt="" /></span>
                 <h4>Personal loan</h4>
                
                
                
                
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center img-customize" id="contact-tab" data-toggle="tab" href="#BusinessLoan" role="tab" aria-controls="business"
                 aria-selected="false">
                
                 <span><img src={BusinessLoan} alt="" /></span>
                 <h4>Business loan</h4>
                </a>
              </li>
        
              <li class="nav-item">
                <a class="nav-link text-center img-customize" id="contact-tab" data-toggle="tab" href="#EducationLoan" role="tab" aria-controls="education"
                 aria-selected="false">
                 <span><img src={EducationLoan} alt="" /></span>
                
                 <h4>Education loan</h4>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center img-customize" id="contact-tab" data-toggle="tab" href="#HomeLoan" role="tab" aria-controls="house"
                 aria-selected="false">
                 <span><img src={HouseLoan} alt="" /></span>
                
                 <h4>House loan</h4>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center img-customize" id="contact-tab" data-toggle="tab" href="#PaydayLoan" role="tab" aria-controls="payday"
                 aria-selected="false">
                
                 <span><img src={PayDayLoan} alt="" /> </span>
                 <h4>Payday loan</h4>
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              {
                loans.map(loan=><Services serviceItems={loan}></Services>)
              }
            </div> */}

            <Tabs>
              <TabList>
                <Tab>
                  <div className="img-div ">
                    <div className="tab-navbar text-center">
                      <img src={Agriculture} alt="" />
                    </div>
                  </div>
                  <h5>Agricultural Loan</h5>
                </Tab>

                <Tab>
                  <div className="img-div text-center">
                    <div className="tab-navbar text-center">
                      <img src={PersonalLoan} alt="" />
                    </div>
                  </div>

                  <h5 className='text-center'>Personal Loan</h5>
                </Tab>
                <Tab>
                  <div className="img-div text-center">
                    <div className="tab-navbar text-center">
                      <img src={BusinessLoan} alt="" />
                    </div>
                  </div>
                  <h5 className='text-center'>Business Loan</h5>
                </Tab>
                <Tab>
                  <div className="img-div ">
                    <div className="tab-navbar text-center">
                      <img src={EducationLoan} alt="" />{" "}
                    </div>
                  </div>
                  

                  <h5 className='text-center'>Education Loan</h5>
                </Tab>
                <Tab>
                  <div className="img-div text-center">
                    <div className="tab-navbar text-center">
                      <img src={HouseLoan} alt="" />
                    </div>
                  </div>
                  <h5 className='text-center'>House Loan</h5>
                </Tab>
                <Tab>
                  <div className="img-div ">
                    <div className="tab-navbar text-center">
                      <img src={PayDayLoan} alt="" />
                    </div>
                  </div>
                  <h5 className='text-center'>Payday Loan</h5>
                </Tab>
              </TabList>
              {
                loans.map(loan=><TabPanel><div class="row">
                
                <div class="col-lg-6">
                  <div class="img-header">
                    <div class="img-header-partssss mt-5">
                      <img src={loan.imageURL} alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="the-mother-togle-bar">
                    <div class="toogle-bars-header">
                      <h3>{loan.LoanName}</h3>
                      <p>
                    {
                      loan.LoanDescription
                    }
                      </p>
                    </div>
                    <div class="toogle-bars-ul">
                    <h3 className='pb-2 font-sizing'>{loan.LoanTypes}</h3>
                      <ul>
                        <li>Secured loans</li>
                        <li>Unsecured loans</li>
                        <li>Revolving credit facilities</li>
                        <li>Business cash advances</li>
                      </ul>
                    </div>
                    <div class="toogle-bars-header">
                      <h3 className='pb-1 font-sizing'>{loan.LoanReason}</h3>
                      <p>
                     {loan.LoanReasonDescription}
                      </p>
                    </div>
                    <div class="toogle-bars-header">
                      <h3 className='pb-2 font-sizing'>{loan.LoanGuideline}</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et
                        Quis.
                      </p>
                    </div>
                    <div className="buy-this-service">
                      <button onClick={()=>handleClick(loan._id)}>Take Loan</button>
                    </div>
                  </div>
                </div>
              </div>
              </TabPanel>      
                )
              }
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
