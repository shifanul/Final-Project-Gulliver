//AUTH0 LOGIN FUNCTIONALITY
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      <Button
        onClick={() =>
          isAuthenticated
            ? logout({ returnTo: window.location.origin })
            : loginWithRedirect()
        }
      >
        {isAuthenticated ? "Log Out" : "Log In"}
      </Button>
    </Wrapper>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  margin: 0 35px;
  font-size: 20px;
  font-weight: 500;
  font-family: poppins, sans-serif;
  color: #f83c3c;
  width: fit-content;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 50vw;
`;

export default LoginButton;
