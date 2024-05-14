const express = require("express");
const router = express.Router();

const museum_categoryController = require("../controllers/museum_category");
const login = require("../middleware/login");
const utils = require("../utils");

//List all collections
router.get("/museum_category", museum_categoryController.getMuseum_Categories);
// List specific collection
router.get("/museum_category/:id", museum_categoryController.getMuseum_Category);
// Add collection
router.post("/museum_category/add", login.required, museum_categoryController.addMuseum_Category);
// Edit collection
router.put("/museum_category/edit/:id", login.required, museum_categoryController.editMuseum_Category);
// Remove artist
router.delete("/museum_category/remove/:id", login.required, museum_categoryController.removeMuseum_Category);

module.exports = router;
