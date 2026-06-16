const express = require("express");
const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {
 gradeSubmission,
 getSubmissions,
 myMarks
} = require("../controllers/gradeController");

router.put(
 "/grade",
 authMiddleware,
 gradeSubmission
);

router.get(
 "/submissions/:assignment_id",
 authMiddleware,
 getSubmissions
);

router.get(
 "/mymarks",
 authMiddleware,
 myMarks
);

module.exports = router;