// GETTING THE USERS DATA AND INFORMATION

const getUsers = async (req, res) => {
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

    const Email = req.params.email;

    // FIND ALL EVENTS IN MONGO
    const result = await db.collection("users").findOne({ email: Email });

    result
      ? res.status(200).json({ status: 200, message: "user:", data: result })
      : res.status(404).json({
          status: 404,
          data: "You sent: " + req,
          message: "user not found.",
        });
  } catch (e) {
    console.log(e);
    client.close();
    console.log("disconnected!");
  }
  client.close();
  console.log("disconnected!");
};

module.exports = { getUsers };
