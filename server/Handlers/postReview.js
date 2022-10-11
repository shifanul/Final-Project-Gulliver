//POST REVIEWS TO MONGO COLLECTION

const postReview = async (req, res) => {
  const { MongoClient } = require("mongodb");
  require("dotenv").config();
  const { MONGO_URI } = process.env;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const client = new MongoClient(MONGO_URI, options);
  const { name, review, rating } = req.body;

  try {
    await client.connect();
    const db = client.db("Gullivar");
    const result = await db
      .collection("reviews")
      .insertOne({ name: name, review: review, rating: rating });

    res.status(200).json({
      status: 200,
      data: result,
      message: "Successfully posted reviews",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "error posting review" });
  } finally {
    client.close();
  }
};

module.exports = { postReview };
