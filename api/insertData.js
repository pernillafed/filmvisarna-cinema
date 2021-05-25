const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const uri = 'mongodb+srv://dbTest:dbTestPassword@cluster0.gneaa.mongodb.net/cinemaDB?retryWrites=true&w=majority';
const movieData = require('./data/movieData.json');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDb connected")
  insertData();
  console.log(movieData);
}).catch((err) => {
  console.log(err)
})

async function insertData() {
  console.log('Data is being stored...');
  await Movie.create(movieData);
  console.log('Data stored...')
  mongoose.connection.close();
}