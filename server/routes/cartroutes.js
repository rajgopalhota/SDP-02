const { response } = require("express");
const express = require("express");
const router = express.Router();
const cartmodel = require("../models/cart");


//cart
router.post("/cartpost", async (req, res) => {
    const username = req.body.username;
    const image = req.body.image;
    const name = req.body.name;
    const price = req.body.price;
    let cartpost = new cartmodel({
        username: username,
        image: image,
        name: name,
        price: price,
    });
    console.log(cartpost)
    try {
        await cartpost.save();
        res.send("success");
    } catch (err) {
        console.log(err);
        res.send("fail");
    }
});

router.get("/cart", async (req, res) => {
    try {
        const items = await cartmodel.find();
        res.json(items);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


// Deleting cart
router.delete('/delete/:id', async (req, res) => {
    const pid = req.params.id;
    const result = await cartmodel.deleteOne({ _id: pid });
    res.send(result);
})


module.exports = router;