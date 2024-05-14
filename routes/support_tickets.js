const express = require("express");
const router = express.Router();

const support_ticket_controller = require("../controllers/support_tickets");
const login = require("../middleware/login");

// List all support tickets
router.get("/support_tickets", support_ticket_controller.getSupportTickets);
// List specific support ticket
router.get("/support_tickets/:id", support_ticket_controller.getSupportTicket);
// Add support ticket
router.post("/support_tickets/add", login.required, support_ticket_controller.addSupportTicket);
//Inform estimated deadline
router.put("/support_tickets/inform-estimated-deadline/:id", login.required, support_ticket_controller.informEstimatedDeadline);
// Remove support ticket
router.delete("/support_tickets/remove/:id", login.required, support_ticket_controller.removeSupportTicket);
// //Conclude support ticket
// router.put("/support_tickets/conclude/:id", login.required, support_ticket_controller.concludeSupportTicket);
// //Approve support ticket
// router.put("/support_tickets/approve/:id", login.required, support_ticket_controller.approveSupportTicket);

module.exports = router;
