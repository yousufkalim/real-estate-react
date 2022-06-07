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


 

const Features = () => {
  return (
    <div className='feature'>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
            <div>
            <img src={mobile}  style={{height:'90vh'}}/>
            </div>
        </Grid>



        <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    <br/>
    <Card sx={{ maxWidth: 345 }}>
        
      <CardActionArea>
        <CardContent sx={{display: 'flex', justifyContent:'flex-start'}}>
        <CheckBoxIcon/>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    <br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </Box>
        </div>



  )
}
export default Features;
