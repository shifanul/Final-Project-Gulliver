//POST NEW EVENT

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const postEvent = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const newEvent = req.body;

  try {
    await client.connect();
    const db = client.db("Gullivar");
    result = await db.collection("events").insertOne(newEvent);

    result
      ? res.status(200).json({ status: 200, data: result })
      : res
          .status(400)
          .json({ status: 400, Error: "Event not found.", data: newEvent });
  } catch (e) {
    res.status(500).json({ status: 500, Error: e });
  }

  client.close();
};

module.exports = { postEvent };
