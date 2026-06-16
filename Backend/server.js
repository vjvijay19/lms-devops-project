require('dotenv').config();

const courseRoutes =
require("./routes/courseRoutes");

const materialRoutes =
require("./routes/materialRoutes");

const assignmentRoutes =
require("./routes/assignmentRoutes");

const submissionRoutes = require("./routes/submissionRoutes");

const gradeRoutes =
require("./routes/gradeRoutes");

const dashboardRoutes=
require("./routes/dashboardRoutes");


const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.send('LMS Backend Running');
});

app.use("/api/auth", authRoutes);

app.use("/api/course",courseRoutes);

app.use(
 "/api/material",
 materialRoutes
);

app.use(
 "/api/assignment",
 assignmentRoutes
);

app.use("/api/submissions", submissionRoutes);

app.use(
 "/api/grade",
 gradeRoutes
);

app.use(
 "/api/dashboard",
 dashboardRoutes
);

// Protected Route
app.get(
  "/protected",
  authMiddleware,
  (req, res) => {
    res.json({
      message: "Authorized User"
    });
  }
);


app.listen(process.env.PORT, ()=>{
  console.log(`Server running on port ${process.env.PORT}`);
});

