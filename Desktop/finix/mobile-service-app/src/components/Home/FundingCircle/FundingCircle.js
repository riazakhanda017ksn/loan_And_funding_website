import React from "react";
import './FundingCircle.css'
import company from '../../../images/company2.png'
const FundingCircle = () => {
  return (
    <section class="dxt-parts-of-our-company">
        
        <div class="container">
          <div class="row py-3">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            
              <div class="why-choose text-center">
              <h6>Funding circles</h6>
              <h2>You deserve a better business loan</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
          </div>
          <div class="col-lg-3"></div>
          </div>
          </div>
          <br />
        <div class="row px-5">
          <div class="col-lg-6">
            <div class="our-company">
              <div class="Our-company-rules">
                <h2>Our company values</h2>
              </div>
              <div class="Our-company-rules-list">
                <ul>
                  <li class="mb-4">
                    <h3>Innovative</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li class="mb-4">
                    <h3>Talent</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li class="mb-4">
                    <h3>Enabling</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li class="mb-4">
                    <h3>Commercially responsible</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="padding">
              <div class="Our-company-rules-img px-4">
                <img src={company} alt="" />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FundingCircle;
