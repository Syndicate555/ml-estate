import React, { Component } from "react";
import styled from "styled-components";

export default class TeamIntro extends Component {
    render() {
      return (
          <TeamWrapper>
            <p>
              Meet The Team!
            </p>

          </TeamWrapper>
          
      );
    }
  }

  const TeamWrapper = styled.nav`
  background: Yellow;
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