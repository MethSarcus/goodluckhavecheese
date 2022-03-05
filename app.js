const express = require("express");
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,  "build", "index.html"));
    });
  }

app.use(cors());

const testData = {race: "protoss", glhf: false, cheese: true};

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://methsarcus:LC25g9IwqrE2r1mM@cheesestats.vtr92.mongodb.net/CheeseStats?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// global.bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({
//   extended: true,
//   limit: '50mb',
//   parameterLimit: 100000
// }))
// app.use(bodyParser.json({
//   limit: '50mb',
//   parameterLimit: 100000
// }))

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    client.connect(err => {
        const collection = client.db("cheeseDB").collection("stats");
        // perform actions on the collection object
        collection.insertOne(testData, (err, data) => {
          if(err) return console.log(err);
          res.send(('saved to db: ' + data));
          client.close();
      });
      });
    //res.json({ message: "Hello from server!" });
  });

  app.post('/', (req, res) => {
      let race = req.body.race;
      let glhf = req.body.glhf;
      let cheese = req.body.cheese;
      let dataToInsert = {race: race, glhf: glhf, cheese: cheese};
      client.connect(err => {
        const collection = client.db("cheeseDB").collection("stats");
        // perform actions on the collection object
        collection.insertOne(dataToInsert, (err, data) => {
          if(err) return console.log(err);
          res.send(data);
          client.close();
      });
      });
  });

    
// app.post("/track", (req, res) => {
//   console.log("Connected to React");
//   res.json("You did it");
//   //res.redirect("/");
// });
  


// client.connect(err => {
//     const collection = client.db("cheeseDB").collection("stats");

//     app.post('/track', (req, res) => {
//     console.log(req.body);
//     collection.insertOne(req.body, (err, data) => {
//         if(err) return console.log(err);
//         res.send(('saved to db: ' + data));
//     })
// });
//     // perform actions on the collection object
//     client.close();
// });





