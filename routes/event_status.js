const express = require("express");
const router = express.Router();

const event_statusController = require("../controllers/event_status");
const login = require("../middleware/login");
const utils = require("../utils");

// List all ad states
router.get("/event_status", event_statusController.getEvents_Status);
// List specific ad state
router.get("/event_status/:id", event_statusController.getEvent_Status);
// Add ad state
router.post("/event_status/add", login.required, event_statusController.addEvent_Status);
// Edit ad
router.put("/event_status/edit/:id", login.required, event_statusController.editEvent_Status);
// Remove ad
router.delete("/event_status/remove/:id", login.required, event_statusController.removeEvent_Status);

module.exports = router;
