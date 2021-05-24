const express = require("express");
const session = require('express-session');
const mongoose = require("mongoose");

const port = 3001;
const uri =
  "mongodb+srv://dbTest:dbTestPassword@cluster0.gneaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// Routes
// const consoleRoutes = require("./routes/consoleRoutes");
// const gameRoutes = require("./routes/gameRoutes");
// const genreRoutes = require("./routes/genreRoutes");

// Server Setup
const app = express();

app.use(express.json());

app.use(
    session({
        name: "Ballerina",
        secret: "Let's all go to the movies",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: "auto" }
    })
);

// Mongo DB Atlas Setup
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes setup
// app.use("/api/v1/consoles", consoleRoutes);
// app.use("/api/v1/games", gameRoutes);
// app.use("/api/v1/genres", genreRoutes);

// Start Server
app.listen(port, (err) => {
  if (err) {
    console.error("The server could not start.");
    console.log(err);
  }
  console.log(`Listening on port ${port}`);
});