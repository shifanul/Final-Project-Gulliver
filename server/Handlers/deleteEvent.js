// DELET EVENT FROM MONGO DB

const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const deleteEvent = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const id = req.params._id;
  console.log(req.params);

  try {
    await client.connect();
    const db = client.db("Gullivar");

    const deleting = await db
      .collection("events")
      .deleteOne({ _id: ObjectId(id) });

    res.status(200).json({ status: 200, Message: "Deleted event.", deleting });
  } catch (e) {
    res.status(400).json({ status: 400, Error: e });
  }
};

module.exports = { deleteEvent };
