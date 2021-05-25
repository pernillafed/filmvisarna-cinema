const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const uri = 'uri goes here';
const movieData = require('./data/movieData.json');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDb connected")
  // insertData();
}).catch((err) => {
  console.log(err)
})

async function insertData() {
  console.log('Data is being stored...');
  await Movie.create(movieData);
  console.log('Data stored...')
  mongoose.connection.close();
}