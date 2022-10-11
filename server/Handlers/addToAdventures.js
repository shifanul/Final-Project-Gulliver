// ADDING TO ADVENTURES.

const addToAdventures = async (req, res) => {
  const { MongoClient } = require("mongodb");
  require("dotenv").config();
  const { MONGO_URI } = process.env;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = new MongoClient(MONGO_URI, options);
  const { image, id, userEmail, date, time, name } = req.body;

  try {
    await client.connect();
    const db = client.db("Gullivar");
    const result = await db
      .collection("users")
      .updateOne(
        { email: userEmail },
        { $push: { Adventures: { image, date, time, id, name } } }
      );
    res.status(200).json({
      status: 200,
      message: "Successfully added",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      data: req.body,
      message: "Error adding to Adventures",
    });
  } finally {
    client.close();
  }
};

module.exports = { addToAdventures };
