const express = require("express");
const router = express.Router();

const ad_statesController = require("../controllers/ad_states");
const login = require("../middleware/login");
const utils = require("../utils");
const user = require("../models/user");

// List all ad states
router.get("/ad_states", ad_statesController.getAd_States);
// List specific ad state
router.get("/ad_states/:id", ad_statesController.getAd_State);
// Add ad state
router.post("/ad_states/add", login.required, ad_statesController.addAd_State);
// Edit ad
router.put("/ad_states/edit/:id", login.required, ad_statesController.editAd_State);
// Remove ad
router.delete("/ad_states/remove/:id", login.required, ad_statesController.removeAd_State);

module.exports = router;
