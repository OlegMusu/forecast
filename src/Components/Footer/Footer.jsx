import { useState } from "react";
import logo from "../../Images/logo.png";
import Facebook from "../../Images/footer/facebook.svg";
import Instagram from "../../Images/footer/instagram.svg";
import Whatsapp from "../../Images/footer/whatsapp.svg";
import {
  FooterStyle,
  FooterContainer,
  Title,
  AddressText,
  FooterList,
  FooterItem,
} from "./Footer.styled";

export default function Footer() {
  return (
    <>
      <FooterStyle>
        <FooterContainer className="container">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div>
            <Title>Address</Title>
            <ul>
              <li>
                <AddressText>Svobody str. 35</AddressText>
              </li>
              <li>
                <AddressText>Kyiv</AddressText>
              </li>
              <li>
                <AddressText>Ukraine</AddressText>
              </li>
            </ul>
          </div>
          <div>
            <Title>Contact us</Title>
            <FooterList>
              <FooterItem>
                <a href="">
                  <img src={Instagram} alt="" />
                </a>
              </FooterItem>
              <FooterItem>
                <a href="">
                  <img src={Facebook} alt="" />
                </a>
              </FooterItem>
              <FooterItem>
                <a href="">
                  <img src={Whatsapp} alt="" />
                </a>
              </FooterItem>
            </FooterList>
          </div>
        </FooterContainer>
      </FooterStyle>
    </>
  );
}
