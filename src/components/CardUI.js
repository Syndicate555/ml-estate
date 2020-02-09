import React, { Component } from 'react';

import styled from "styled-components";
import './card-style.css';

const Card = props => {
        return (
            <CardWrapper>
                <div className = "card text-center">
                <div className = "overflow">
                    <img src = {props.imgsrc} alt = "Image 1" className = "top"/>
                </div>
                <div className = "card-body text-dark">
                <h4 className = "card-title"> {props.title}</h4>
                <p className = "card-text text-secondary">
                {props.description}
                </p>
                </div>
            </div>
            </CardWrapper>
        );
    }
    

const CardWrapper = styled.nav`
background: var(--mainBlue);
height:90px;
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 2rem;
  text-transform:capitalize;
}
.top{
  height:280px;
  width:280px;
  padding: 5px;
  margin:0px;
  transform:scale(1);
  transition:transform 0.5s ease;

}
.overflow{
    overflow:hidden;
    
}

.top:hover{
    transform:scale(1.2)
}
@media (max-width: 576px) {
  .navbar-nav {
    flex-direction: row !important;
`;

export default Card;
