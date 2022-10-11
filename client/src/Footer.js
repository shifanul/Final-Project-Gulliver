//FOOTER PAGE ---- FOOTER INFORMATION!
import styled from "styled-components";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <Wrapper>
      <Slogan>Stay Connected </Slogan>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FiFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FiInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FiTwitter />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #eaddca;
  flex: auto;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-family: sans-serif;
  height: 60px;
  padding: 100px;
`;

const Slogan = styled.p`
  color: #f83c3c;
  padding: 2%;
  font-size: 30px;
  margin-right: 55%;
`;

export default Footer;
