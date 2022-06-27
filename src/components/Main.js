import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Apple from "../images/Apple.png";
import Google from "../images/Google.png";
import MockupBG from "../assets/MockupBG.png";
import phones from "../images/phones.svg";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Main = ({ cRef }) => {
  return (
    <Box sx={{ flexGrow: 1 }} ref={cRef}>
      <Grid container columns={12} className="maingrid">
        <Grid item xs={12} sm={12} md={5} className="grid1">
          <div className="container">
            <div className="text">
              WE PROVIDE <br />
              GREAT SERVICES
            </div>

            <div className="line">
              <hr
                style={{
                  border: "none",
                }}
              />
            </div>
            <div className="text1">
              Software House with a team of experienced
              <br /> developers and project managers.
              <br />
              We provide ourselves in delivering high-
              <br />
              quality work for our partners.
            </div>
            <br />

            <div className="img">
              <img src={Apple} className="appleImg" />
              <img src={Google} className="appleImg" />
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          className="grid2"
          sx={{ position: "relative", left: 0, top: 0 }}
        >
          <div>
            <img src={MockupBG} className="bgimg" />
          </div>
          {/* <img src={phones} className="frontimg" /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
