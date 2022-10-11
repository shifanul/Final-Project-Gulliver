// GET A SPECIFIC EVENT

const getEvent = async (req, res) => {
  const { MongoClient, ObjectId } = require("mongodb");
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
    const { event } = req.params;
    // FIND THE REQUESTED EVENT BY _ID
    console.log(req.params);
    const result = await db
      .collection("events")
      .findOne({ _id: ObjectId(event) });

    result
      ? res
          .status(200)
          .json({ status: 200, message: "Found event:", data: result })
      : res.status(404).json({
          status: 404,
          data: "You sent: " + req.params.event,
          message: "event not found.",
        });
  } catch (e) {
    console.log(e);
    client.close();
    console.log("disconnected!");
  }
  client.close();
  console.log("disconnected!");
};

module.exports = { getEvent };
