const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

// mongodb connections
const uri =
  "mongodb+srv://socialApp:zA4ICJZ3SIc10bkB@cluster0.fkczj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// perform actions on the collection object
async function run() {
  try {
    const socialData = client.db("SocialDatabase");
    const usersData = socialData.collection("UsersData");
    // Collect user data
    app.post("/usersData", async (req, res) => {
        const userData = req.body;
        const result = await usersData.insertOne(userData);
        res.send(result);
    });
    // app.put('/usersData', async (req, res) =>{
    //     const query = {}
    // })
    a
  } catch {}
}
run().catch((error) => console.log(error.message));

app.get("/", (req, res) => {
  res.send("Server running");
});


app.listen(port);
