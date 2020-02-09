import React, { Component } from 'react';
import Card from './CardUI.js'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

import styled from "styled-components";

export default class Cards extends Component {
    render(){
        return (
            <CardsWrapper>
                <div className = "container-fluid d-flex justify-content-center">
                <div className = "row">
                    <div className = "col-md-3" >
                        <Card imgsrc = {img1} title = "Saffat Aziz" description = "Full Stack/ Team Lead"/>
                    </div>
                    <div className = "col-md-3">
                        <Card imgsrc = {img2} title = "Adil Ughratdar" description = "Data Management"/>
                    </div>
                    <div className = "col-md-3">
                        <Card imgsrc = {img3} title = "Kevin Kalathil" description = "Machine Learning"/>
                    </div>
                    <div className = "col-md-3">
                        <Card imgsrc = {img4} title = "Leon Si" description = "Back End "/>
                    </div>
                </div>
            </div>

            </CardsWrapper>
        );
    }
}    

const CardsWrapper = styled.nav`

@media (max-width: 576px) {
  .navbar-nav {
    flex-direction: row !important;
`;
