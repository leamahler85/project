const mongoose = require("mongoose");

const CrewSchema = new mongoose.Schema({
    name: {
        type: String,
    },
})

const Crew = mongoose.model("Crew", CrewSchema);
module.exports = Crew;