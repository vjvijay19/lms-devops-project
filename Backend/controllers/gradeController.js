const db = require("../models/db");

exports.gradeSubmission = (req,res)=>{

 const {
  submission_id,
  marks,
  feedback
 } = req.body;

 const sql =
 "UPDATE submissions SET marks=?,feedback=? WHERE id=?";

 db.query(
  sql,
  [marks,feedback,submission_id],
  (err,result)=>{

   if(err){
    return res.status(500).json(err);
   }

   res.json({
    message:"Submission Graded"
   });

  }
 );

};

exports.getSubmissions = (req,res)=>{

 const { assignment_id } = req.params;

 const sql =
 "SELECT * FROM submissions WHERE assignment_id=?";

 db.query(
  sql,
  [assignment_id],
  (err,result)=>{

   if(err){
    return res.status(500).json(err);
   }

   res.json(result);

  }
 );

};

exports.myMarks = (req,res)=>{

 const student_id = req.user.id;

 const sql =
 "SELECT * FROM submissions WHERE student_id=?";

 db.query(
  sql,
  [student_id],
  (err,result)=>{

   if(err){
    return res.status(500).json(err);
   }

   res.json(result);

  }
 );

};