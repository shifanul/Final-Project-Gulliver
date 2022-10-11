//GET ALL THE REVIEWS

const getReview = async (req, res) => {
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
    const result = await db.collection("reviews").find().toArray();

    res.status(200).json({
      status: 200,
      data: result,
      message: "Successfully retrieved reviews",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "couldnt retrieve reviews" });
  } finally {
    client.close();
  }
};

module.exports = { getReview };
