// Init
import React from "react";
import logo from "../images/logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Hidden } from "@mui/material";
import { useScrollPosition } from "../hooks/useScrollPosition";
import "../utils/i18n";
import { useTranslation } from "react-i18next";
// Component
const pages = ["About", "Features", "Contact us"];

const Header = ({ onNavPress = () => {} }) => {
  const { i18n, t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [pageName, setPageName] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const HandlePage = (name) => {
    onNavPress(name);
    setPageName(name);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <AppBar
      className="nav"
      sx={{
        position: "fixed",
        background: "#191A1F",
        boxShadow: scrollPosition <= 2 && "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className="headerLogo"
            src={logo}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              mr: 1,
            }}
          />

          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className="iconbars"
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              onClick={(e) => {
                HandlePage(e);
              }}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Button
              className="menuitems"
              name={"About"}
              onClick={(e) => HandlePage(e.target.name)}
              sx={{
                my: 2,
                color: "#FAFAFA",
                display: "block",
                fontSize: "14px",
                fontWeight: "700px",
                margin: "20px",
              }}
            >
  
             {t("About")}
            </Button>
            <Button
              className="menuitems"
              name={"Features"}
              onClick={(e) => HandlePage(e.target.name)}
              sx={{
                my: 2,
                color: "#FAFAFA",
                display: "block",
                fontSize: "14px",
                fontWeight: "700px",
                margin: "20px",
              }}
            >
             {t("Features")}
            </Button>
            <Button
              className="menuitems"
              name={"Contactus"}
              onClick={(e) => HandlePage(e.target.name)}
              sx={{
                my: 2,
                color: "#FAFAFA",
                display: "block",
                fontSize: "14px",
                fontWeight: "700px",
                margin: "20px",
              }}
            >
              {t("Contactus")}
            </Button>
          </Box>




 <button className="flag01" style={{border:"none" ,outline:"none",  width: "38px",height: "20px" , position:'relative',
    left:' -29px' }} onClick={() => i18n.changeLanguage("en")}>
        <img
          alt="English"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
          style={{    width: "38px",height: "20px" , marginTop: "-7px", cursor:"pointer"
        }}
          className="flags-appbar langFlags"
        />
      </button>
      <button className="flag02"  style={{border:"none" , outline:"none",  width: "38px",height: "20px" , position:'relative',
    left:' -13px' }}onClick={() => i18n.changeLanguage("fr")}>
        <img
          alt="France"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
          style={{    width: "38px",height: "20px" , marginTop: "-7px",cursor:"pointer"
      }}
          className="flags-appbar langFlags"
        />
      </button>





          <Box sx={{ flexGrow: 0 }}>
            <button
              className="btn"
              variant="text"
              style={{
                background: "#837C6B",
                color: "#FAFAFA",
                borderRadius: "56px",
                border: "none",
                fontSize: "18px",
                fontWeight: "600px",
              }}
            >
              {t("Download App")}
            </button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
