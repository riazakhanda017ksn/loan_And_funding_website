import React from "react";
import logo2 from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Footer.css";
import { faFacebook, faInstagram, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-number-one">
          <div class="row py-5 px-5">
            <div class="col-lg-3 mt-5">
              <div class="footer-logo-parts">
                <div class="footer-img">
                  <img src={logo2} alt="" />
                </div>

                <div class="footer-description">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div class="follow-us-in-footer">
                  <ul>
                    <p>Follow us:</p>
                    <li>
                      <a href="">
                      <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                       <FontAwesomeIcon icon={faSkype} />
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="quick-list">
                <div class="sector-of-Quick-Links">
                  <h3>Quick Links</h3>
                </div>
                <div class="quick-link-ul">
                  <ul>
                    <li>
                      <a href=""> About</a>
                    </li>
                    <li>
                      <a href="">Our Performance</a>
                    </li>
                    <li>
                      <a href=""> Help (FAQ)</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>

                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="quick-list">
                <div class="sector-of-Quick-Links">
                  <h3>Other Resources</h3>
                </div>
                <div class="quick-link-ul">
                  <ul>
                    <li>
                      <a href=""> Support</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Terms of Service</a>
                    </li>
                    <li>
                      <a href=""> Business Loans</a>
                    </li>

                    <li>
                      <a href="">Loan Services</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="quick-list">
                <div class="sector-of-Quick-Links">
                  <h3>Contact Us</h3>
                </div>
                <div class="contact-footer-ul">
                  <ul>
                    <li>6890 Blvd, The Bronx, NY 1058 New York, USA</li>
                    <li>
                      <a href="mailto:info@website.com"> info@gmail.com</a>
                    </li>

                    <li>
                      <a href="tel:+1514312-5678">+1514312-5678</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <div class="footer-number-two text-center">
        <div class="container">
          <div class="row py-3">
            <div class="col-lg-12">
              <div class="-footer-cap">
                <p>
                  &copy;all rights are reserved by-2021 <a href="">riaZ</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
