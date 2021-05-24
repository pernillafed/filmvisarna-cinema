const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const screenSchema = new Schema({

});

const Screen = mongoose.model("Screen", screenSchema);

module.exports = Screen;