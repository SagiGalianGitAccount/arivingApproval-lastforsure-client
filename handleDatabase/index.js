const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = "mongodb+srv://sagi:sagi@cluster0.k5awmqw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const collection = client.db("barmitzva").collection("guests");

collection.deleteMany({}).then(() => {
    console.log("all items removed !");
}).catch((error) => {
    console.log("could not remove items :", error);
});
