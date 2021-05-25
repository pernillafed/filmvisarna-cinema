const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showingSchema = new Schema({
    movieId: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    screenId: [{ type: Schema.Types.ObjectId, ref: 'Screen' }],
    date: Date,
    timestamps: true,
    bookedSeats: [String]
});

const Showings = mongoose.model("showing", showingSchema);

module.exports = Showings;