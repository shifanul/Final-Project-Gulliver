//ADVENTURE PAGE ---- ALL ADVENTURES!
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { Watch } from "react-loader-spinner";
import { CurrentUserContext } from "./CurrentUserContext";
import { useAuth0 } from "@auth0/auth0-react";
import Reviews from "./Ratings";

const Adventure = () => {
  const { adventures, setAdventures, load, setLoad } =
    useContext(CurrentUserContext);
  //GRABBING THE EVENT ID
  const { _id } = useParams();
  console.log(_id);
  //GRABBING THE EVENT DATA
  const [event, setEvent] = useState(null);
  //LOADING SPINNER
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState(false);
  const [remove, setRemove] = useState(true);

  const { user, loginWithRedirect } = useAuth0();

  const addToAdventure = () => {
    if (user) {
      const body = {
        name: event.name,
        image: event.imgSrc,
        date: event.date,
        time: event.time,
        id: event.companyId,
      };

      setAdventures([...adventures, body]);

      fetch("/api/add-to-adventure", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          ...body,
          userEmail: user.email.toLowerCase(),
        }),
      })
        .then((res) => res.json())
        .then(setLoad(!load))
        .catch((error) => {
          console.error("error", error);
        });
    } else {
      loginWithRedirect();
    }
  };

  const handleRemove = () => {
    setAdventures(
      adventures.filter((adventure) => adventure.id !== event.companyId)
    );

    fetch("/api/remove-from-adventures", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user.email,
        company: event.companyId,
      }),
    })
      .then((res) => {
        setLoad(!load);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  useEffect(() => {
    fetch(`/api/get-event/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data.data);
      });
    // loading spinner set
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch(`/api/review`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data.data);
      });
    // loading spinner set
    setLoading(false);
  }, []);

  // spinner if fetch is done
  if (loading) {
    return (
      <div style={style}>
        <Watch
          margin="200"
          height="200"
          width="200"
          radius="48"
          color="#336699"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        <p>Loading the Adventure!</p>
      </div>
    );
  }

  return (
    <div>
      {event && (
        <Wrapper>
          <Info>
            <Img src={event.imgSrc}></Img>
            <Name>{event.name}</Name>
            <Tags>Tags : {event.tags}</Tags>
            <Details>Details : {event.details}</Details>
            <Phone>Phone : {event.phone}</Phone>
            <Location>Location : {event.location}</Location>
            <Date>Date : {event.date}</Date>
            <Time>Time : {event.time}</Time>
            <Company>Company id : {event.companyId}</Company>
            {!adventures.filter((advn) => {
              return advn.id === event.companyId;
            }).length ? (
              <button onClick={addToAdventure}>Join Event!</button>
            ) : (
              <button onClick={handleRemove}>Joined</button>
            )}
          </Info>
          <Wrapper2>
            <StyledReviews />
            <Wrapper3>
              {review &&
                review.map((info) => {
                  return (
                    <>
                      <Name>{info.name}</Name>
                      <InfoName>{info.review}</InfoName>
                      <InfoStars>Stars:{info.rating}</InfoStars>
                    </>
                  );
                })}
            </Wrapper3>
          </Wrapper2>
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 50vw;
  flex-direction: column;
  margin-left: 350px;
`;

const Wrapper2 = styled.div`
  margin-top: 20px;
`;

const Wrapper3 = styled.div`
  margin-top: -300px;
  margin-bottom: 50px;
  margin-left: 70px;
`;

const StyledReviews = styled(Reviews)``;

const Info = styled.div`
  padding: 2%;
  width: fit-content;
  height: 530px;
  border-radius: 10px;
  background-color: #86bbd8;
  color: #3a3633;
  margin-left: 100px;
  margin-top: 20px;
`;

const Img = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 20px;
`;

const Location = styled.p`
  font-family: sans-serif;
  font-weight: bold;
`;
const Date = styled.p`
  font-family: sans-serif;
  font-weight: bold;
`;
const Time = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Tags = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  opacity: 0.5;
  margin-bottom: 10px;
`;

const Phone = styled.p`
  font-family: sans-serif;
  font-weight: bold;
`;

const Company = styled.p`
  font-size: 15px;
  opacity: 0.5;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 25px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;
const Details = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  font-family: sans-serif;
`;

const InfoName = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: bold;
`;

const InfoStars = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: bold;
`;

const style = {
  position: "fixed",
  padding: "200px",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
export default Adventure;
