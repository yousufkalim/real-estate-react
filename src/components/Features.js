import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import mobile from "../assets/Mobile.png";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { color } from "@mui/system";
import { CardActionArea } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Features = ({ cRef }) => {
  return (
    <div className="feature" ref={cRef}>
      <div className="Features_content">
        <div className="feat1">App Features</div>
        <div className="feat2">
          Lorem Ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry. Lorem Ipsum has been the industry's
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={12} className="maingrid">
          <Grid item xs={12} sm={12} md={6} className="grid1">
            <div className="featimg">
              <img
                src={mobile}
                style={{ width: "44vw" }}
                className="app_mobile_img"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} margin="auto">
            <Card
              sx={{
                backgroundColor: "#262626",
              }}
              className="message"
            >
              <CardActionArea>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                  className="cardcontent"
                >
                  <CheckBoxIcon className="checkbox" />
                  <div className="heading">
                    <p className="card_title">CREATIVE DESIGN</p>
                  </div>
                </CardContent>
                <div className="plaintext">
                  <p className="card_p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra nunc ante velit vitae. Est tellus vitae, nullam
                    lobortis.
                  </p>
                </div>
              </CardActionArea>
            </Card>
            <br />
            <Card
              sx={{
                backgroundColor: "#262626",
              }}
              className="message"
            >
              <CardActionArea>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                  className="cardcontent2"
                >
                  <CheckBoxIcon className="checkbox" />
                  <div className="heading">
                    <p className="card_title">EASY TO USE</p>
                  </div>
                </CardContent>
                <div className="plaintext">
                  <p className="card_p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra nunc ante velit vitae. Est tellus vitae, nullam
                    lobortis
                  </p>
                </div>
              </CardActionArea>
            </Card>
            <br />
            <Card
              sx={{
                backgroundColor: "#262626",
              }}
              className="message"
            >
              <CardActionArea>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                  className="cardcontent3"
                >
                  <CheckBoxIcon className="checkbox" />
                  <div className="heading">
                    <p className="card_title">BETTER USE EXPERIENCE</p>
                  </div>
                </CardContent>
                <div className="plaintext">
                  <p className="card_p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra nunc ante velit vitae. Est tellus vitae, nullam
                    lobortis
                  </p>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Features;
