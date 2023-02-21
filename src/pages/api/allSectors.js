import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oyjsjo4.mongodb.net/?retryWrites=true&w=majority`;
export default async function myData(req, res) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db("testForAfif");
    const collection = db.collection("SectorData");
    const data = await collection.find({}).toArray();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
  return data;
}
