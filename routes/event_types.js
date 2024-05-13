const express = require("express");
const router = express.Router();

const event_typesController = require("../controllers/event_types");
const login = require("../middleware/login");
const utils = require("../utils");

// List all ad states
router.get("/event_types", event_typesController.getEvent_Types);
// List specific ad state
router.get("/event_types/:id", event_typesController.getEvent_Type);
// Add ad state
router.post("/event_types/add", login.required, event_typesController.addEvent_Type);
// Edit ad
router.put("/event_types/edit/:id", login.required, event_typesController.editEvent_Type);
// Remove ad
router.delete("/event_types/remove/:id", login.required, event_typesController.removeEvent_Type);

module.exports = router;
