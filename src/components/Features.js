import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import  Paper  from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import mobile from '../images/mobile.svg';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { color } from '@mui/system';
import { CardActionArea } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


 

const Features = ({cRef}) => {
  return (
    <div className='feature'  ref={cRef}>
        <br/><br/><br/><br/><br/>
        <div className='feat1'>
            App Features
        </div>
        <br/>
        <div className='feat2'>
        Lorem Ipsum is simply dummy text of the
         printing and <br/>typesetting industry. Lorem Ipsum has been the industry's
        </div><br/><br/><br/><br/><br/><br/>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={12} className="maingrid">
        <Grid item xs={12} sm={12} md={6} className="grid1">
            <div className='featimg'>
            <img src={mobile}  style={{height:'80vh'}}/>
            </div>
        </Grid>
        
        <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ maxWidth: 570, height:160, backgroundColor:'#262626' }} className="message">
      <CardActionArea>
        <CardContent sx={{display: 'flex', justifyContent:'flex-start'}}>
        <CheckBoxIcon className='checkbox'/>
        <div className='heading'>
          <Typography gutterBottom variant="h5" component="div">
            CREATIVE DESIGN
          </Typography>
          </div>
        
        </CardContent>
        <div className="plaintext" >
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
           Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis<br/> enim.
           Faucibus amet etiam tincidunt rhoncus, ullamcorper 
          </Typography>
          </div>
        </CardActionArea>
    </Card>
    <br/>
    <Card sx={{ maxWidth: 570, height:160, backgroundColor:'#262626' }} className="message">
      <CardActionArea>
        <CardContent sx={{display: 'flex', justifyContent:'flex-start'}}>
        <CheckBoxIcon className='checkbox'/>
        <div className='heading'>
          <Typography gutterBottom variant="h5" component="div">
            EASY TO USE
          </Typography>
          </div>
        
        </CardContent>
        <div className="plaintext" >
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
           Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis<br/> enim.
           Faucibus amet etiam tincidunt rhoncus, ullamcorper 
          </Typography>
          </div>
        </CardActionArea>
    </Card>
    <br/>
    <Card sx={{ maxWidth: 570, height:160, backgroundColor:'#262626' }} className="message">
      <CardActionArea>
        <CardContent sx={{display: 'flex', justifyContent:'flex-start'}}>
        <CheckBoxIcon className='checkbox'/>
        <div className='heading'>
          <Typography gutterBottom variant="h5" component="div">
            BETTER USE EXPERIENCE
          </Typography>
          </div>
        
        </CardContent>
        <div className="plaintext" >
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
           Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis<br/> enim.
           Faucibus amet etiam tincidunt rhoncus, ullamcorper 
          </Typography>
          </div>
        </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </Box>
        </div>



  )
}
export default Features;
