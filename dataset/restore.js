const { MongoClient } = require("mongodb");
const books = require("./books.json");

async function restore() {
  const client = await MongoClient.connect(
    "mongodb+srv://zsobral:bracubi@cluster0.u65nn.mongodb.net/test"
  );
  const db = client.db("book-store");
  await db.collection("books").insertMany(books);
  await client.close();
}

restore()
  .then(() => console.log("finish"))
  .catch(console.log);
