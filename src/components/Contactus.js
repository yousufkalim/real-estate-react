import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import quote from "../images/quote.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Contactus = ({ cRef }) => {
  // const scroll=()=>{
  //     myRef.current.scrollIntoView({behavior:"smooth", block:"start"})
  // }
  return (
    <Box sx={{ flexGrow: 1 }} ref={cRef}>
      <Grid container columns={12} className="maingrid">
        <Grid item xs={12} sm={12} md={6} className="grid1">
          <div className="container1">
            <div className="contactus_headings">
              <div className="text2">Get a Quote</div>
              <div className="line1">
                <hr
                  style={{
                    border: "none",
                  }}
                />
              </div>

              <div className="text3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper
              </div>
            </div>
            <div className="imgquote">
              <img src={quote} style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <form className="form">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="email"
                  class="form-control row1"
                  id="inputName4"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="password"
                  class="form-control row2"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="email"
                  class="form-control row3"
                  id="inputPhone4"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="password"
                  class="form-control row4"
                  id="inputBudget4"
                  placeholder="Budget"
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                rows="16"
                type="comment"
                class="form-control row5"
                id="Message"
                placeholder="Type Your Message"
              />
            </div>
            <button
              className="btn1"
              variant="text"
              style={{
                borderRadius: "56px",
                // width: "200px",
                // height: "45px",
                border: "none",
                fontSize: "18px",
                fontWeight: "600px",
              }}
            >
              {" "}
              <a href="#"> Send</a>{" "}
            </button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Contactus;
