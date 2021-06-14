import React from "react";
import ContactDiv from "./styles.js";
import Pin from "../../pin.png";
import Email from "../../email.png";
import LinkedIn from "../../linkedin-logo.png";

function Contact() {
  return (
    <ContactDiv>
      <h1>Contact me!</h1>
      <h4>
        If you want to know more about me, tell me something is wrong with this
        website, give me some feedback about this or you just want to talk, feel
        free to email me or send a DM on LinkedIn!
      </h4>
      <div className="contactDiv">
        <div className="contactInfo">
          <img src={Pin} height="30" width="30" />
          <a href="https://goo.gl/maps/mydeHfWzqpGK8wwx7">
            <h4>Bahia Blanca, Buenos Aires, Argentina.</h4>
          </a>
        </div>
        <div className="contactInfo">
          <img src={Email} height="30" width="30" />
          <a href="mailto:juanmcereceda@gmail.com?">
            <h4>juanmcereceda@gmail.com</h4>
          </a>
        </div>
        <div className="contactInfo">
          <img src={LinkedIn} height="30" width="30" />
          <a href="http://www.linkedin.com/in/juancereceda">
            <h4>Juan Martín Cereceda</h4>
          </a>
        </div>
      </div>
    </ContactDiv>
  );
}

export default Contact;
