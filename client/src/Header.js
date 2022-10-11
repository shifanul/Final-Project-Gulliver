//HEADER PAGE ---- HEADER INFORMATION!
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../src/img/Logo.png";
import LoginButton from "./Login";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  return (
    <Wrapper>
      <LogoLink to={"/"}>
        <LogoImg src={Logo}></LogoImg>
      </LogoLink>{" "}
      <Title to={"/"}>Gullivar</Title>
      <Wrapper2>
        <Home to={"/"}>Home</Home>
        <Profile to={"/profile"}>Profile</Profile>
        <Adventure to={"/Create"}>CreateAdventures!</Adventure>
      </Wrapper2>
      <LoginButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #eaddca;
  flex-direction: row;
  display: flex;
  align-items: center;
  height: 70px;
`;

const Wrapper2 = styled.div`
  margin-left: 0vh;
  margin-top: 12px;
`;

const Profile = styled(Link)`
  text-decoration: none;
  margin: 0 35px;
  font-size: 20px;
  font-weight: 500;
  font-family: poppins, sans-serif;
  color: #f83c3c;
  width: fit-content;
`;
const Home = styled(Link)`
  text-decoration: none;
  margin: 0 35px;
  font-size: 20px;
  font-weight: 500;
  font-family: poppins, sans-serif;
  color: #f83c3c;
  width: fit-content;
`;
const Adventure = styled(Link)`
  text-decoration: none;
  margin: 0 35px;
  font-size: 20px;
  font-weight: 500;
  font-family: poppins, sans-serif;
  color: #f83c3c;
  width: fit-content;
`;

const LogoImg = styled.img`
  text-decoration: none;
  height: 60px;
  width: 100px;
  margin: 0 35px;
  margin-top: 12px;
`;

const Title = styled(Link)`
  color: #f83c3c;
  font-size: 30px;
  font-weight: bold;
  margin-top: 12px;
  margin-left: -100px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  margin: 0 35px;
  color: white;
`;

export default Header;
