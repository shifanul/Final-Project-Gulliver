const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { getEvent } = require("./Handlers/getEvent");
const { getEvents } = require("./Handlers/getEvents");
const { postEvent } = require("./Handlers/postEvent");
const { deleteEvent } = require("./Handlers/deleteEvent");
const { getUsers } = require("./Handlers/getUsers");
const { addToAdventures } = require("./Handlers/addToAdventures");
const { removeFromAdventures } = require("./Handlers/removeFromAdventures");
const { getAdventures } = require("./Handlers/getAdventures");
const { getReview } = require("./Handlers/getReview");
const { postReview } = require("./Handlers/postReview");

express()
  .use(helmet())
  .use(morgan("dev"))
  .use(express.json())

  //EVENT ENDPOINTS
  .get("/api/get-event/:event", getEvent)
  .get("/api/get-events", getEvents)

  //USERS ENDPOINT
  .get("/api/get-users/:email", getUsers)

  //POST EVEN ENDPOINT
  .post("/api/add-to-event", postEvent)
  //DELETE EVENT ENDPOINT
  .delete("/api/delete-event/:_id", deleteEvent)

  //ADD ADVENTURES
  .post(`/api/add-to-adventure`, addToAdventures)

  //REMOVE FROM ADVENTURES
  .patch(`/api/remove-from-adventures`, removeFromAdventures)

  .get(`/api/get-adventures/:userEmail`, getAdventures)

  .post("/api/review", postReview)

  .get("/api/review", getReview)

  //RANDOM JOKE API
  // .get("https://icanhazdadjoke.com/", (req, res) => {
  //   res.status(200).json({
  //     status: 200,
  //     message: "Random joke",
  //   });
  // })

  //CATCH ALL ENDPOINT
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(8000, () => {
    console.log("server launched on server 8000");
  });
