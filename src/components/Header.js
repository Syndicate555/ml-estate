import React, { Component } from "react";
import logo from "./uottaHack.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Header extends Component {
  render() {
    return (
      <NavWrapper
        className="navbar navbar-expand-sm 
      navbar-dark px-sm-5"
      >
        {/* 
        https://www.iconfinder.com/680017/camera_image_photo_photography_icon
        
        Creative Commons (Attribution-Noncommercial 3.0 Unported);
        https://www.iconfinder.com/laurareen */}
        <img src={logo} alt="store" className="navbar-brand" />
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
              ML Estate
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
height:90px;
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 2rem;
  text-transform:capitalize;
}
.navbar-brand{
  height:70px;
  width:140px;
  padding: 20px;
}
@media (max-width: 576px) {
  .navbar-nav {
    flex-direction: row !important;
`;