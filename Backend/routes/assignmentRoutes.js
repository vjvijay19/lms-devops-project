const express = require("express");
const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const upload =
require("../middleware/uploadMiddleware");

const {
 createAssignment,
 getAssignments,
 submitAssignment
} = require("../controllers/assignmentController");

router.post(
 "/create",
 authMiddleware,
 createAssignment
);

router.get(
 "/:course_id",
 authMiddleware,
 getAssignments
);

router.post(
 "/submit",
 authMiddleware,
 upload.any(),
 submitAssignment
);

module.exports = router;