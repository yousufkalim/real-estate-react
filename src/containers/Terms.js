// Init
import React from "react";

// Importing Components
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import "../utils/i18n";
import { useTranslation } from "react-i18next";

// Home Component
export default function Terms() {
  const { i18n, t } = useTranslation();
  return (
    <div className="abc">
       <button className="flag01" style={{border:"none" ,outline:"none",  width: "38px",height: "20px" , position:'relative',
        left:' 89%', top:"10px" }} onClick={() => i18n.changeLanguage("en")}>
        <img
          alt="English"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
          style={{    width: "38px",height: "20px" , marginTop: "-7px", cursor:"pointer"
        }}
          className="flags-appbar langFlags"
        />
      </button>
      <button className="flag02"  style={{border:"none" , outline:"none",  width: "38px",height: "20px" , position:'relative',
    left:' 90%', top:"10px" }}onClick={() => i18n.changeLanguage("fr")}>
        <img
          alt="France"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
          style={{    width: "38px",height: "20px" , marginTop: "-7px",cursor:"pointer"
      }}
          className="flags-appbar langFlags"
        />
      </button>

      <div>
        <div
          style={{
            padding: "5%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "2.5rem", fontWeight: "800" , color:"white" }}>
          {t ("Terms & Conditions")}
          </Typography>
        </div>

        <div style={{ padding: "5%" , color:"white" }}>
          <Typography>
            <ul>
              <b style={{ fontSize: "1.5rem" }}> {t("Introduction")}</b>
              <li>
                {t("These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Real Estate accessible at realestate.com.")}
              </li>
              <li>
                {t ("These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website ifyou disagree with any of these Website Standard Terms and Conditions.")}
              </li>
              <li>
                {t("Minors or people below 18 years old are not allowed to use this Website.")}
              </li>
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Intellectual Property Rights")}</b>
              <li>
                {t("Other than the content you own, under these Terms, Real Estate and/or its licensors own all the intellectual property rights and materials contained in this Website.")}
              </li>
              <li>
                {t ("You are granted limited license only for purposes of viewing the material contained on this Website.")}
              </li>
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Restrictions")}</b>
              <br />
             {t("You are specifically restricted from all of the following:")}
              <li>{t("publishing any Website material in any other media;")}</li>
              <li>
                {t ("selling, sublicensing and/or otherwise commercializing any Website material;")}
              </li>
              <li>{t("publicly performing and/or showing any Website material;")}</li>
              <li>
                {t("using this Website in any way that is or may be damaging to this Website;")}
              </li>
              <li>
                {t("using this Website in any way that impacts user access to this Website;")}
              </li>
              <li>
                {t("using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;")}
              </li>
              <li>
                {t("engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;")}
              </li>
              <li>
                {t("using this Website to engage in any advertising or marketing.")}
              </li>
            </ul>
            { t ("Certain areas of this Website are restricted from being access by  you and Real Estate may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you  must maintain confidentiality as well.")}
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Your Content")}</b>
              <br />
              {t("In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material youchoose to display on this Website. By displaying Your Content, you grant Real Estate a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.")}
              <br />  {t("Your Content must be your own and must not be invading any  third-party's rights. Real Estate reserves the right to remove any  of Your Content from this Website at any time without notice.")}
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("No warranties")}</b>
              <br />{t("This Website is provided “as is,” with all faults, and Real Estateexpress no representations or warranties, of any kind related tothis Website or the materials contained on this Website. Also,nothing contained on this Website shall be interpreted as advisingyou.")}
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Limitation of liability")}</b>
              <br /> {t("In no event shall Real Estate, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Real Estate, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.")}
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Indemnification")}</b>
              <br />
              <b style={{ fontSize: "1.1rem" }}> {t("You hereby indemnify to the fullest extent Real Estate from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.")}
              </b>
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Severability")}</b>
              <br /> {t("If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.")}
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Variation of Terms")}</b>
              <br /> {t("Real Estate is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.")}
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Assignment")}</b>
              <br />{t("The Real Estate is allowed to assign, transfer, and subcontractits rights and/or obligations under these Terms without anynotification. However, you are not allowed to assign, transfer, orsubcontract any of your rights and/or obligations under theseTerms.")}
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Entire Agreement")}</b>
              <br /> {t("These Terms constitute the entire agreement between Real Estate and you in relation to your use of this Website, and supersede all prior agreements and understandings.")}
            </ul>
            <ul>
              <b style={{ fontSize: "1.5rem" }}>{t("Governing Law & Jurisdiction")}</b>
              <br /> {t("These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.")}
            </ul>
          </Typography>
        </div>
      </div>

      <Footer />
    </div>
  );
}
