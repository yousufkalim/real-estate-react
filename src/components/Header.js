// Init
import React from "react";
import logo from '../images/logo.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb'; 

// Component
const pages = ['About', 'Features', 'Contact us'];

const Header = ({onNavPress=()=>{}}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [pageName , setPageName] = React.useState("")

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
const HandlePage = (name) =>{
  onNavPress(name)
  setPageName(name)
}
  return (
    <AppBar className="nav" sx={{position:"fixed",background:"#191A1F"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} sx={{ display: { 
            xs: 'none',
             md: 'flex',
              }, mr: 1 }} />
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              onClick={(e) =>{ HandlePage(e)}}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
          
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',display:"flex",justifyContent:"center" } }}>
            
              <Button className="menuitems"
                
                name={"About"}
                onClick={(e)=> HandlePage( e.target.name)}
                sx={{ my: 2, color: '#FAFAFA',
                 display: 'block',
                  fontSize:'14px',
                   fontWeight:'700px',
                  margin:'20px' }}
              >
                About
              </Button>
              <Button className="menuitems"
                
                name={"Features"}
                onClick={(e)=> HandlePage( e.target.name)}
                sx={{ my: 2, color: '#FAFAFA',
                 display: 'block',
                  fontSize:'14px',
                   fontWeight:'700px',
                  margin:'20px' }}
              >
                Features
              </Button>
              <Button className="menuitems"
                name={"Contactus"}
                onClick={(e)=> HandlePage( e.target.name)}
                sx={{ my: 2, color: '#FAFAFA',
                 display: 'block',
                  fontSize:'14px',
                   fontWeight:'700px',
                  margin:'20px' }}
              >
                Contactus
              </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
          <button className="btn" variant="text" style={{background:"#837C6B",
           color:'#FAFAFA',
            borderRadius:'56px',
            width:'254px',
            height:'60px',
            border:'none',
            fontSize:'20px',
            fontWeight:'600px'
            }}>Download App</button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
