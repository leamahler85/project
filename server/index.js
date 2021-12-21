const express = require("express");
const mongoose = require("mongoose");
// middleware
const app = express();
const cors = require('cors');

const CrewModel = require("./models/Crew");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://leam:jason-crew@cluster0.vyhct.mongodb.net/database-project?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);


// CREATE
app.post("/insert", async (req, res) => {

    const crewName = req.body.crewName;

    const crew = new CrewModel({name: crewName,});

    try {
        await crew.save();
        res.send("inserted data");
    } catch(error) {
        console.log(error);
    }
})

// READ
app.get("/read", async (req, res) => {
    CrewModel.find({}, (error, result) => {
        if (error) {
            res.send(error);
        }
        res.send(result); 
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001...");
});