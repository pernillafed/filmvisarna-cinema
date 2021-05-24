const Movie = require("../models/Movie");

const addMovie = async (req, res) => {
    let movie = await Movie.create(req.body);
    res.json(movie);
};

module.exports = {
    addMovie
}