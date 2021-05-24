const Movie = require("../models/Movie");

const addMovie = async (req, res) => {
    let movie = await Movie.create(req.body);
    res.json(movie);
};

const getAllMovies = async (req, res) => {
    let movies = await Movie.find().exec();
    res.json(movies);
};

module.exports = {
    addMovie,
    getAllMovies
}