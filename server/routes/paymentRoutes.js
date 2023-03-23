const {
  checkout,
  paymentVerification,
} = require("../controllers/paymentController");
const { response } = require("express");
const express = require("express");
const router = express.Router();


router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.post('/delete/:id', async (req, res) => {
  const pid = req.params.id;
  const result = await cartmodel.deleteOne({ _id: pid });
  res.send(result);
})

module.exports = router;
