//PROFILE PAGE ---- PROFILE INFORMATION!
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import styled from "styled-components";
import { FiCalendar } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from "moment";

const ProfilePage = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <Wrapper>
        <Icon />

        <Person>
          <DisplayName>{currentUser && currentUser.username}</DisplayName>
          <Handle></Handle>
          <Bio></Bio>
          <Joined>
            {" "}
            <FiCalendar></FiCalendar> Joined {moment().format("MMM YYYY")}{" "}
          </Joined>
          <Follow>
            <Title>Following: 10 </Title> <Title>Followers: 1</Title>
          </Follow>
          <Feeter>
            <MiddleBanner to="/added-adventures">Adventures</MiddleBanner>
            <MiddleBanner to="/added-event">Created Adventure</MiddleBanner>
            <MiddleBanner>Likes</MiddleBanner>
          </Feeter>
        </Person>

        <Feed>
          <>
            <Adventures />
          </>
        </Feed>
      </Wrapper>
    </>
  );
};

const Icon = styled(BsPersonCircle)`
  width: 150px;
  height: 150px;
  padding: 25px;
  margin-top: 20px;
  margin-left: 20px;
  color: gray;
  border: lightgray solid 1px;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: -100px;
  width: 10px;
  height: 60vh;
`;

const Wrapper = styled.div`
  font-family: sans-serif;
  width: 800px;
  margin-left: 400px;
`;

const Handle = styled.p`
  color: gray;
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  padding: 0;
  margin-left: 20px;
`;

const Adventures = styled.span``;

const Person = styled.span``;

const DisplayName = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-left: 20px;
`;

const Bio = styled.p`
  font-size: 17px;
  font-weight: bold;
  width: 800px;
  margin-left: 20px;
`;

const Joined = styled.span`
  color: gray;
  margin-left: 20px;
`;

const Follow = styled.p`
  font-weight: bold;
  margin-left: 22px;
`;

const Title = styled.span`
  font-weight: normal;
  margin-right: 1%;
  color: gray;
`;

const Feeter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
  width: 800px;
  border-bottom: solid lightgray 2px;
`;

const MiddleBanner = styled(Link)`
  &.active {
    border-bottom: 5px black solid;
  }
  background-color: white;
  border: none;
  font-size: 20px;
  font-weight: bold;
  width: 800px;
  padding: 5%;
  padding-bottom: 5px;
  margin-right: 5px;
`;

export default ProfilePage;
