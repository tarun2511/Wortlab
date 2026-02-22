const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
    front: {
        type: String,
        // required: [true, "Please enter a valid word"]
    },
    back: {
        type: String,
    },
    deck: {
        type: String,
        // required: [true, "Please enter a valid deck"]
    }
});

const Word = mongoose.model("Word", WordSchema);
module.exports = Word;