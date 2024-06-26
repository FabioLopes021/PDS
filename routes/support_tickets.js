const express = require("express");
const router = express.Router();

const support_ticket_controller = require("../controllers/support_tickets");
const login = require("../middleware/login");

// List all support tickets
router.get("/support_tickets", support_ticket_controller.getSupport_tickets);
// List specific support ticket
router.get("/support_tickets/:id", support_ticket_controller.getSupport_Ticket);
// Add support ticket
router.post("/supportTickets/add", login.required, support_ticket_controller.addSupport_Ticket);
//Inform estimated deadline
router.put("/support-ticket/inform-estimated-deadline/:id", login.required, support_ticket_controller.informEstimatedDeadline);
// Remove support ticket
router.delete("/support_tickets/remove/:id", login.required, support_ticket_controller.removeSupport_Ticket);
//Conclude support ticket
router.put("/support_ticket/conclude/:id", login.required, support_ticket_controller.concludeSupportTicket);
//Approve support ticket
router.put("/support_ticket/approve/:id", login.required, support_ticket_controller.approveSupport_ticket);

module.exports = router;
