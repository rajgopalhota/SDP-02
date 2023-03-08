const {
  checkout,
  paymentVerification,
} = require("../controllers/paymentController");
const { response } = require("express");
const express = require("express");
const router = express.Router();


router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

module.exports = router;
