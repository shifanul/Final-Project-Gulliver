//CREATE PAGE ---- CREATING THE ADVENTURE INFORMATION/PAGE!
import styled from "styled-components";
import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [companyId, setCompanyId] = useState("");

  const handleClick = (ev) => {
    ev.preventDefault();
    fetch("/api/add-to-event", {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        location,
        details,
        tags,
        imgSrc,
        time,
        date,
        companyId,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  console.log(handleClick);

  return (
    <Wrapper>
      <Form onSubmit={handleClick}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(ev) => {
              setName(ev.target.value);
            }}
          />
        </label>
        <label>
          phone:
          <input
            type="tel"
            value={phone}
            onChange={(ev) => {
              setPhone(ev.target.value);
            }}
          />
        </label>
        <label>
          location:
          <input
            type="text"
            value={location}
            onChange={(ev) => {
              setLocation(ev.target.value);
            }}
          />
        </label>
        <label>
          details:
          <textarea
            value={details}
            onChange={(ev) => {
              setDetails(ev.target.value);
            }}
          />
        </label>
        <label>
          tags:
          <input
            type="text"
            value={tags}
            onChange={(ev) => {
              setTags(ev.target.value);
            }}
          />
        </label>
        <label>
          Image upload:
          <input
            type="file"
            value={imgSrc}
            onChange={(ev) => {
              setImgSrc(ev.target.value);
            }}
          />
        </label>
        <label>
          time:
          <input
            type="time"
            value={time}
            onChange={(ev) => {
              setTime(ev.target.value);
            }}
          />
        </label>
        <label>
          date:
          <input
            type="date"
            value={date}
            onChange={(ev) => {
              setDate(ev.target.value);
            }}
          />
        </label>
        <label>
          companyId
          <input
            type="number"
            value={companyId}
            onChange={(ev) => {
              setCompanyId(ev.target.value);
            }}
          />
        </label>

        <button type="submit">submit</button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

export default Create;
