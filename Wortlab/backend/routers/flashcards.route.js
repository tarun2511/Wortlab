const express = require("express");
const router = express.Router();
const Word = require("../db/word.model");


router.get("/", async (req, res) => {
    try{
        const { category } = req.query;
        const filter = {};
        if(category) filter.deck = category;
        console.log(filter)
        const words = await Word.find(filter);
        res.status(200).json(words);
    }
    catch(err){
        res.status(400).send(err);
    }
})


router.post("/addWord", async(req, res) => {
    try{
        const { front, back, deck } = req.body;
        const newWord = new Word({
            front,
            back,
            deck
        })
        await newWord.save();
        res.status(201).json({message: "Word successfully added"})
    }
    catch(err){
        console.log("Could not add the word");
        res.status(400).json({error: err});
    }
})

module.exports = router;
