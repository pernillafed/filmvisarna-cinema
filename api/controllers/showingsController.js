const Showings = require("../models/Showings");

const getShowingById = async (req, res) => {
    Showings.findById(req.params.showingId).exec((err, showing) => {
        if (err) {
            res.status(404).json({error: err});
            return;
        }
        if (!showing) {
            res.status(404).json({error: `Could not find showing with id: ${req.params.showingId}`});
            return;
        }
        res.json(showing);
    });
};


module.exports = {
    getShowingById
}