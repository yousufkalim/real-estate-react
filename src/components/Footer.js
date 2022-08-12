import React from "react";
import logo from "../images/logo.png";
import Apple from "../images/Apple.png";
import Google from "../images/Google.png";
import "../utils/i18n";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="footer">
      <img src={logo} />
      <div className="footertext">
        <p>
        
        </p>
      </div>
      <div className="imgfooter">
        <img src={Apple} className="appleImg2" />{" "}
        <img src={Google} className="appleImg2" />
      </div>

      <div className="footertext2">
        <p>
          <a style={{ color: "white" }} href="/terms">
            {t ("Terms & Conditions")}
          </a>
          &nbsp; &nbsp;
          <a style={{ color: "white" }} href="/privacy">
            {t("Privacy Policy")}
          </a>
        </p>
      </div>
      <div className="linefooter">
        <hr />
      </div>
      <div className="footercopyrights">
        <span className="footercopyrights1"> © 2022 </span> {t("Real Estate,")}
        <span className="footercopyrights1"> {t("Developed by")}</span>
        <a
          href="https://www.falconconsulting.fr/"
          target="blank"
          className="footercopyrights2"
        >
          {" "}
          Falcon Consulting.{" "}
        </a>
        <span className="footercopyrights1"> {t("All rights reserved.")} </span>
      </div>
    </div>
  );
};
export default Footer;
