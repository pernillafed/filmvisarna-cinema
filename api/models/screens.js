const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const screenSchema = new Schema({
    name: String,
    rows: [{String}],
    seatsPerRow: {String}
});

const Screen = mongoose.model("Screen", screenSchema);

module.exports = Screen;