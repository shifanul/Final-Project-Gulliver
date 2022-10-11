// FIND ALL OF THE EVENTS

const getEvents = async (req, res) => {
  const { MongoClient } = require("mongodb");
  require("dotenv").config();
  const { MONGO_URI } = process.env;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Gullivar");
    console.log("connected!");

    // FIND ALL EVENTS IN MONGO
    const result = await db.collection("events").find().toArray();

    result
      ? res
          .status(200)
          .json({ status: 200, message: "All of the events:", data: result })
      : res.status(404).json({
          status: 404,
          data: "You sent: " + req,
          message: "No events found.",
        });
  } catch (e) {
    console.log(e);
    client.close();
    console.log("disconnected!");
  }
  client.close();
  console.log("disconnected!");
};

module.exports = { getEvents };
