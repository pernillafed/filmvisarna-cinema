const express = require("express");
const router = express.Router();

const showingsController = require("../controllers/showingsController");

router.get("/:showingId", showingsController.getShowingById);

module.exports = router;