const mongoose = require("mongoose");

const NVVSchema = new mongoose.Schema({
    NVV: {
        type: String
    },
    meaning: {
        type: String
    },
    example: {
        type: String
    }
})

const NVVs = mongoose.model("NVVs", NVVSchema);
module.exports = NVVs;