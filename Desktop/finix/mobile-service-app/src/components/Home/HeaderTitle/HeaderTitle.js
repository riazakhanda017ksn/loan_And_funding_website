import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderTitle.css'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const HeaderTitle = () => {
    return (
        <div className='row px-3 mt-5 pt-5'>
            <div className="col-lg-6 mt-5 pt-3 ">
                <div className="header-section mt-5 pt-5">
                    <div className="title mt-5">
                        <span className='primary-color little-caption'>We are here for</span>
                        <h1>We believe in those made to do more</h1>
                        <p>Loans are advantageous as a relatively inexpensive way of borrowing money. Start or grow your own business</p>
                        <div class="header-button class-for-visibility text-left ">
                        <Link className='px-5'>View Now</Link>
                        </div>
                    </div>
                </div>
                <div className="social-media-follow mt-5 d-flex align-items-center px-4">
        <div className="follow-us-part mt-5 pt-5 mr-5">
            <p>Follow Us </p>
        </div>
        <div className="list-list-part mt-5 pt-5">
            <ul>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">
                <span> <FontAwesomeIcon icon={faFacebook} /> </span>
                </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">
                <span> <FontAwesomeIcon icon={faInstagram} /> </span>
                </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">
                <span> <FontAwesomeIcon icon={faTwitter} /> </span>
                </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">
                <span> <FontAwesomeIcon icon={faLinkedinIn} /> </span>
                </a></li>
            </ul>
        </div>

        </div>
            </div>

            <div className="col-lg-6"></div>
        </div>
    );
};

export default HeaderTitle;