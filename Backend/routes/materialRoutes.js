const express = require("express");
const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const upload =
require("../middleware/uploadMiddleware");

const {
 uploadMaterial
} = require("../controllers/materialController");

router.post(
 "/upload",
 authMiddleware,
 upload.any(),
 uploadMaterial
);

module.exports = router;