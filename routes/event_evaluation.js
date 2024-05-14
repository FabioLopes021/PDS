const express = require("express");
const router = express.Router();

const event_evalController = require("../controllers/event_evaluation");
const login = require("../middleware/login");
const utils = require("../utils");

// List all ad states
router.get("/event_evaluation", event_evalController.getEvents_Eval);
//List specific ad state
router.get("/event_evaluation/:id", event_evalController.getEvent_Eval);
// Add ad state
router.post("/event_evaluation/add", login.required, event_evalController.addEvents_Eval);
// Edit ad
router.put("/event_evaluation/edit/:id", login.required, event_evalController.editEvents_Eval);
// Remove ad
router.delete("/event_evaluation/remove/:id", login.required, event_evalController.removeEvents_Eval);

module.exports = router;
