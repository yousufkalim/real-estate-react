import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Apple from '../images/Apple.png'
import Google from '../images/Google.png'
import MockupBG from '../images/MockupBG.png'
import phones from '../images/phones.svg'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

 const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={12} className="maingrid">
        <Grid item xs={12} sm={12} md={6} className="grid1">
            <div className='container'>
            <div className='text'>
                WE PROVIDE <br/>GREAT SERVICES
                </div>
                <br/>
                <div className='line'>
                <hr style={{
                    border:'none',
                    }} />
                </div>
                <br/>
                <div className='text1'>
                Software House with a team of experienced<br/> developers and project managers.<br/>
                We provide ourselves in delivering high-<br/>quality work for our partners.
                </div>
                <br/><br/>
                <div className='img'>
                    <img src={Apple} />{' '}
                    <img src={Google} />
                </div>
                </div>
            
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="grid2" sx={{position: "relative", left: 0, top: 0}}>
        {/* style={{height:'85vh', marginTop:'19vh', marginLeft:'20vh' }} */}
        <div>
            <img src={MockupBG} className="fishes" />
            </div>
            <img src={phones} className="fish" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main;
