const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

router.post("", movieController.addMovie);
router.get("", movieController.getAllMovies);

module.exports = router;