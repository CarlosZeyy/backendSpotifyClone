import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://CarlosZey:ca180501@cluster0.eo4ce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotifyClone");

// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);
