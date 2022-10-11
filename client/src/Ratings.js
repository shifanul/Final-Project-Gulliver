import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import FetchedRev from "./FetchedRev";
// import Loader from "./Loader";

const Reviews = () => {
  const { user, loginWithRedirect } = useAuth0();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [comment, setComment] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetch("/api/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
        setloading(true);
      })
      .catch((error) => {
        console.error("error:", error);
        setError(true);
      });
  }, [submit]);

  const handleSubmit = (e) => {
    if (user) {
      fetch("/api/review", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.nickname.toUpperCase(),
          review: text,
          rating: rating,
        }),
      })
        .then((res) => res.json())
        .then(setComment(""))
        .then(setRating(null))
        .then(setSubmit(!submit))
        .catch((error) => {
          console.error("error:", error);
          setError(true);
        });
    } else {
      loginWithRedirect();
    }
  };

  return loading ? (
    <Wrapper>
      <Div>
        <P>Rate:</P>
        <LabelDiv>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <>
                <Label>
                  <Input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={(e) => setRating(e.target.value)}
                  />

                  <FaStar
                    size={40}
                    color={
                      ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    style={{ cursor: "pointer", transition: "200ms" }}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </Label>
              </>
            );
          })}
        </LabelDiv>
        <H1>Write a Review</H1>
        <textarea
          type="text"
          value={text}
          onChange={(ev) => {
            setText(ev.target.value);
          }}
        />
        <Button onClick={handleSubmit}>Submit</Button>

        <H1>Reviews</H1>
      </Div>
    </Wrapper>
  ) : (
    loading
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  border: none;
  background-color: gray;
  padding: 4px;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    cursor: pointer;
  }
`;
const P = styled.p`
  font-family: poppins;
  font-weight: bold;
`;
const H1 = styled.h1`
  border-bottom: 2px solid black;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label``;
const Wrapper = styled.form`
  width: 80%;
  margin-left: 5rem;
  height: 80vh;
  margin-top: 10px;
`;
const Input = styled.input`
  display: none;
`;

export default Reviews;
