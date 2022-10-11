//ADDING TO MY ADVENTURES
import { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

const MyAdventures = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    currentUser && (
      <Wrapper>
        {currentUser.Adventures.map((info) => {
          return (
            <Div>
              <Name>{info.name}</Name>
              <Time>{info.time}</Time>
              <Date>{info.date}</Date>
              <Img src={info.image}></Img>
            </Div>
          );
        })}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  height: fit-content;
  margin: 100px;
`;
const Div = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid gray;
  width: fit-content;
  padding: 30px;
  margin-left: 500px;
`;

const Name = styled.p`
  font-family: sans-serif;
  font-size: 30px;
`;
const Time = styled.p`
  font-size: 20px;
`;
const Date = styled.p`
  font-size: 20px;
`;
const Img = styled.img`
  border-radius: 20px;
  height: 250px;
  width: 250px;
`;

export default MyAdventures;
