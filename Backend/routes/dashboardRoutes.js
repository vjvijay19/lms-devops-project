const express=require("express");
const router=express.Router();

const authMiddleware=
require("../middleware/authMiddleware");

const {
 teacherDashboard,
 studentDashboard
}=require("../controllers/dashboardController");

router.get(
 "/teacher",
 authMiddleware,
 teacherDashboard
);

router.get(
 "/student",
 authMiddleware,
 studentDashboard
);

module.exports=router;