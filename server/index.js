const express = require("express");
const path = require('path');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

const PORT = process.env.PORT || 5000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://methsarcus:LC25g9IwqrE2r1mM@cheesestats.vtr92.mongodb.net/CheeseStats?retryWrites=true&w=majority";

  app.post('/', body('race').isString(), body('glhf').isBoolean(), body('cheese').isBoolean(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

      let race = req.body.race;
      let glhf = req.body.glhf;
      let cheese = req.body.cheese;
      
      let dataToInsert = {race: race, glhf: glhf, cheese: cheese};
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
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

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}
