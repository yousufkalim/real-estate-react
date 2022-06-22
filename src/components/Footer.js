import React from "react";
import logo from "../images/logo.png";
import Apple from "../images/Apple.png";
import Google from "../images/Google.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} />
      <div className="footertext">
        <p>
          Lorem Ipsum is simply dummy text of
          <br /> the printing and typesetting industry
        </p>
      </div>
      <div className="imgfooter">
        <img src={Apple} /> <img src={Google} />
      </div>

      <div className="footertext2">
        <p>
          <a style={{ color: "white" }} href="/terms">
            Terms & Conditions
          </a>{" "}
          <a style={{ color: "white" }} href="/privacy">
            Privacy Policy
          </a>
        </p>
      </div>
      <div className="linefooter">
        <hr />
      </div>
      <div className="footercopyrights">
        <span className="footercopyrights1"> © 2022 </span> Real Estate,
        <span className="footercopyrights1"> Developed by</span>
        <a
          href="https://www.falconconsulting.fr/"
          target="blank"
          className="footercopyrights2"
        >
          {" "}
          Falcon Consulting.{" "}
        </a>
        <span className="footercopyrights1"> All rights reserved. </span>
      </div>
    </div>
  );
};
export default Footer;
