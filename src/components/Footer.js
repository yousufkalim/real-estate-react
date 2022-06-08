import React from 'react';
import logo from '../images/logo.png';
import Apple from '../images/Apple.png';
import Google from '../images/Google.png';

const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} />
        <div className='footertext'>
            <p>Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry</p>
        </div>
        <div className='imgfooter'>
            <img src={Apple} />{' '}
            <img src={Google} />
            </div>
            <div className='footertext2'>
            <p>Terms & Conditions {' '} Privacy Policy</p>
        </div>
    </div>
  )
}
export default Footer;
