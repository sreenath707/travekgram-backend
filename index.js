const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userRoutes = require('./src/routes/user');
const postRoutes = require('./src/routes/post');

// const DataRoutersOne = require('./src/routers/dataOne');
const cors = require("cors");
const path = require("path");


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.use(userRoutes);
app.use(postRoutes);



const port = 80;
mongoose
  .connect(
    "mongodb+srv://sreenath:1234@cluster0.x9z2p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then((result) => {
    console.log("db connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

