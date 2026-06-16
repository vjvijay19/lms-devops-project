const express = require("express");
const router = express.Router();

const { submitAssignment } = require("../controllers/submissionController");

router.post("/submit", submitAssignment);

module.exports = router;