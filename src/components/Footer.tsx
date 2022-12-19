import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { Button } from "react-bootstrap";

const Footer = () => {
    const utils = [
        "Audio Description",
        "Help Center",
        "Gift Cards",
        "Media Center",
        "Investor Relations",
        "Jobs",
        "Terms of Use",
        "Privacy",
        "Legal Notices",
        "Cookie Preferences",
        "Corporate Information",
        "Contact Us",
    ];
    return (
        <div className="mv-footer-container container">
            <div className="mv-footer-app">
                <a href="#">
                    <FaFacebookF color="white" size={20} />
                </a>
                <a href="#">
                    <BsInstagram color="white" size={20} />
                </a>
                <a href="#">
                    <BsTwitter color="white" size={20} />
                </a>
                <a href="#">
                    <BsYoutube color="white" size={20} />
                </a>
            </div>
            <div className="mv-footer-utils row">
                {utils.map((item, index) => (
                    <a href="#" key={index} className="mv-footer-utilItem col-lg-3">
                        {item}
                    </a>
                ))}
            </div>
            <div className="mv-footer-btn-service mt-2">
                <Button variant="outline-secondary" className="btn">Service Code</Button>
            </div>
            <div className="mv-footer-inc mt-2">
                <p>© 1997-2022 Netflix, Inc.</p>
            </div>
        </div>
    );
};

export default Footer;
