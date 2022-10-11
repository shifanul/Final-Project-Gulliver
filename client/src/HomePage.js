//HOME PAGE ---- HOME PAGE INFORMATION!
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Watch } from "react-loader-spinner";
import Map from "./Map";

const HomePage = () => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  let userEmail = sessionStorage.getItem("user");

  useEffect(() => {
    fetch(`/api/get-events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data);
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
        <p>Loading your Adventure!</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Adventures!</h1>
      <Div>
        {events &&
          events.map((event) => {
            return (
              <Wrapper>
                {!userEmail ? (
                  <div>
                    <Div1>{event.name} </Div1>
                    <Div2 src={event.imgSrc}></Div2>
                    <Div3>{event.time}</Div3>
                    <Div4>{event.date}</Div4>
                  </div>
                ) : (
                  <Link to={`/adventure/${event._id}`}>
                    <Div1>{event.name} </Div1>
                    <Div2 src={event.imgSrc}></Div2>
                    <Div3>{event.time}</Div3>
                    <Div4>{event.date}</Div4>
                  </Link>
                )}
              </Wrapper>
            );
          })}
      </Div>
      <Map />
    </div>
  );
};

const Wrapper = styled.section`
  display: inline-block;
  margin: 20px;
  width: 25vw;
`;
const Div = styled.section`
  text-align: center;
`;
const Div1 = styled.section``;
const Div2 = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 20px;
`;
const Div3 = styled.section``;
const Div4 = styled.section``;

const style = {
  position: "fixed",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default HomePage;
