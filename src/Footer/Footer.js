import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { FooterItem,WrapperFooter,FooterTitle,LogoFooter,Icon } from './FooterStyled'
import logo from '../Images/logo.png';
export default function Footer() {
  return (
    <>
        <WrapperFooter className='bg-secondary'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-xs-12'>
                        <LogoFooter src={logo} className="img-fluid mt-4" alt="LogoFooter"/>
                        <FooterTitle className='text-white'>APP CHẠY BỘ</FooterTitle>
                    </div>
                    <div className='col-md-3 col-xs-12'></div>
                    <div className='col-md-5 col-xs-12 mt-4 text-white text-center'>
                        <Link to="/nguoi-dung" style={{ textDecoration: 'none',color:'white' }}><FooterItem className='mr-3 '>Thông Tin</FooterItem></Link> 
                        <Link to="/thong-ke" style={{ textDecoration: 'none',color:'white' }}><FooterItem className='mr-3'>Thống Kê</FooterItem></Link> 
                        <Link to="/phan-tich" style={{ textDecoration: 'none',color:'white' }}><FooterItem className='mr-3'>Phân Tích</FooterItem></Link> 
                        <div className='text-center mt-4'>
                            <a href='https://www.facebook.com/' className='text-white'>   <Icon className='mr-4'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Icon></a>  
                            <a href='https://www.youtube.com/'  className='text-white'>   <Icon className='mr-4'><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></Icon></a> 
                            <a href='https://www.instagram.com/'className='text-white'>   <Icon className='mr-4'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Icon></a>  
                        </div>
                    </div>
                    {/* <div className='col-1'></div> */}
                    {/* <div className='col-1'></div> */}
                </div>
            </div>    
        </WrapperFooter>
        <div>
            <p className='mt-2'>Copyright: ©2022 Đức Lương. All rights reserved.</p>
        </div>
    </>
  )
}
