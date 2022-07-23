import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';


import '../css/Contact.css';
import FP from '../images/contactpic.jpeg';



function Contact() {




    return (
        <div className="ContactGrid">


            <div className="cIntro">
                <h1 className="Intro">Lets' get in <span className="introSpan">touch</span></h1>
                <p className="Intro2">Have a question, need help, or interested in web development?</p>
            </div>
            <div className="grid3">
                <div className="contactInformation">
                    <img src={FP} className="cPic" />

                    <p className="locationIcon"> <FaMapMarkerAlt className="locIcon" /> LOCATION</p>
                    <br />
                    <p className="location">Sweden, Stockholm City</p>

                    <p className="emailIcon"> <FaEnvelope /> EMAIL</p>
                    <br />
                    <p className="emIcon">Stephano@live.se</p>

                    <p className="phoneIcon"> <FaPhone /> +46</p>
                    <br />
                    <p className="phIcon">0739883407</p>

 
                </div>
                <div className="div3">
                    <form className="form1">
                        <div className="name">
                            <label className="label1">NAME *</label>
                            <input placeholder="Name here..." className="input1"></input>
                        </div>
                        <div className="email">
                            <label className="label1">EMAIL *</label>
                            <input placeholder="Email here..." className="input1"></input>

                        </div>
                        <div className="phone">
                            <label className="label1">PHONE NUMBER *</label>
                            <input placeholder="number here..." className="input1"></input>

                        </div>
                        <div className="msg">
                            <label id="message" className="label4">MESSAGE *</label>
                            <textarea id="message" placeholder="your message..." className="input4"></textarea>

                        </div>
                        <button className="subm">SUBMIT</button>

                    </form>
                </div>

            </div>







        </div>
    );
}

export default Contact;
