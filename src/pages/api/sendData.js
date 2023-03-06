const { MongoClient } = require("mongodb");

async function run(req, res) {
  if (req.method === "POST") {
    const sata = req.body;

    console.log(sata);

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8y10for.mongodb.net/?retryWrites=true&w=majority`

    );

    const db = client.db("testForAfif");
    const userCollection = db.collection("userData");
    const result = await userCollection.insertOne(sata);

    console.log(result);

    res.status(201).json({ massage: "data inserted successfully" });

    // client.close();
  }
}

export default run;
