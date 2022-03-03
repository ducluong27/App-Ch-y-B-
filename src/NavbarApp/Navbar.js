import React from 'react';
import { useState} from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import {ImageLogo, NavItem, Nav} from './NavbarStyle'
export default function Navbar() {
    // const [Fixed,setFixed]=useState("navbar navbar-expand-sm navbar-dark bg-secondary navbar-default navbar-static-top");
    
    // const HandleNav =()=>{
    //     const navbar = document.getElementsByClassName("navbar");
    //     var sticky = navbar.offsetTop;
    //     if (window.pageYOffset >= sticky) {
    //         setFixed("navbar navbar-expand-sm navbar-dark bg-secondary fixed-top");
    //     } 
    //     else {
    //         setFixed("navbar navbar-expand-sm navbar-dark bg-secondary navbar-default navbar-static-top");
    //     }
    // }
    const fixedNavbar="navbar navbar-expand-sm navbar-dark bg-secondary fixed-top";
    const noFixedNavbar="navbar navbar-expand-sm navbar-dark navbar-default navbar-static-top";
    const [navbar,setNavbar]=useState(false);
    const changeNavbar =()=>{
        if(window.scrollY>=80){
            setNavbar(true);
        }
        else setNavbar(false);
    }
    window.addEventListener('scroll',changeNavbar);
  return <div>
        <Nav className={navbar ? fixedNavbar: noFixedNavbar}>
            <a className="navbar-brand ml-3" href="/"><ImageLogo className="logoImage ml-3 mt-1" src={logo} alt="LogoRun"/></a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button >
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mt-2 mt-lg-0 ml-auto mr-3">
                    <NavItem className="nav-item">
                        <Link className="nav-link text-white ml-2"  to="/nguoi-dung">Thông tin</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link className="nav-link text-white ml-2" to="/thong-ke">Thống kê</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link className="nav-link text-white ml-2" to="/phan-tich">Phân tích</Link>
                    </NavItem>
                </ul>
            </div>
        </Nav>
  </div>;
}
