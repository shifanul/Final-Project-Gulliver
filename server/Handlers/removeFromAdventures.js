//REMOVING FROM ADVENTURES.

const removeFromAdventures = async (req, res) => {
  const { MongoClient } = require("mongodb");
  require("dotenv").config();
  const { MONGO_URI } = process.env;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const client = new MongoClient(MONGO_URI, options);
  const { company, userEmail } = req.body;
  console.log(req.body);

  try {
    await client.connect();
    const db = client.db("Gullivar");
    result = await db
      .collection("users")
      .updateOne(
        { email: userEmail },
        { $pull: { Adventures: { id: company } } }
      );
    res.status(200).json({
      status: 200,
      message: "Successfully removed",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      data: req.body,
      message: "Error removing from Adventures",
    });
  } finally {
    client.close();
  }
};

module.exports = { removeFromAdventures };
