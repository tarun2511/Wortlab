const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(cors({origin: 'http://localhost:3000'}));
const mongoose = require("mongoose");
app.use(express.json());
const flashCardRoute = require("./routers/flashcards.route");
const port = process.env.PORT || 4200;

// app.use("/", (res) => {
//     res.send("Hello from the backend");
// });

app.use("/v1/flashcards", flashCardRoute);

const server = () => {
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("successfully connected to the DB");
        app.listen(port, () => {
            console.log(`server listening to port ${port}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

server();