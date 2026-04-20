const mongoose = require("mongoose");

const IdiomSchema = new mongoose.Schema({
    idiom: {
        type: String
    },
    meaning: {
        type: String
    },
    example: {
        type: String
    }
})

const Idioms = mongoose.model("Idioms", IdiomSchema);
module.exports = Idioms;