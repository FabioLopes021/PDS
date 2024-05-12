const express = require("express");
const router = express.Router();

const collectionsController = require("../controllers/collections");
const login = require("../middleware/login");
const utils = require("../utils");

// List all collections
router.get("/collections", collectionsController.getCollections);
// List specific collection
router.get("/collections/:id", collectionsController.getCollection);
// Add collection
router.post("/collections/add", login.required, collectionsController.addCollection);
// // Edit artist
// router.put("/collections/edit/:id", login.required, collectionsController.editArtist);
// // Remove artist
// router.delete("/collections/remove/:id", login.required, collectionsController.removeArtist);

module.exports = router;
