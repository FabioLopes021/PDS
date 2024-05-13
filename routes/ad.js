const express = require("express");
const router = express.Router();

const adController = require("../controllers/ad");
const login = require("../middleware/login");

// List all ads
router.get("/ad", adController.getAd);
// // List specific ad
// router.get("/ad/:id", adController.getArtist);
// // Add ad
// router.post("/ad/add", login.required, adController.addAd);
// // Edit ad
// router.put("/ad/edit/:id", login.required, adController.editAd);
// // Remove ad
// router.delete("/ad/remove/:id", login.required, adController.removeAd);

module.exports = router;
