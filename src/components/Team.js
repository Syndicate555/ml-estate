import React, { Component } from "react";
import styled from "styled-components";

export default class Team extends React.Component {
    render() {
      return (
          <TeamWrapper>
            <p>
              Footer
            </p>

          </TeamWrapper>
          
      );
    }
  }

  const TeamWrapper = styled.nav`
  background: green;
  text-align: center;
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