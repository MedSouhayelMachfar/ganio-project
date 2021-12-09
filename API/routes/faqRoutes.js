const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqController");

router.route("/").get(faqController.getFrequentlyData);

module.exports = router;
