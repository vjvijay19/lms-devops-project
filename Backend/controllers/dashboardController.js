const db = require("../models/db");

exports.teacherDashboard = (req,res)=>{

 const teacher_id = req.user.id;

 const sql = `
 SELECT
 (SELECT COUNT(*) FROM courses WHERE teacher_id=?)
 AS total_courses,

 (SELECT COUNT(*)
 FROM enrollments e
 JOIN courses c
 ON e.course_id=c.id
 WHERE c.teacher_id=?)
 AS total_students,

 (SELECT COUNT(*)
 FROM assignments a
 JOIN courses c
 ON a.course_id=c.id
 WHERE c.teacher_id=?)
 AS total_assignments,

 (SELECT COUNT(*)
 FROM submissions s
 JOIN assignments a
 ON s.assignment_id=a.id
 JOIN courses c
 ON a.course_id=c.id
 WHERE c.teacher_id=?)
 AS total_submissions
 `;

 db.query(
 sql,
 [teacher_id,teacher_id,teacher_id,teacher_id],
 (err,result)=>{

  if(err){
   return res.status(500).json(err);
  }

  res.json(result[0]);

 });

};

exports.studentDashboard=(req,res)=>{

 const student_id=req.user.id;

 const sql=`
 SELECT

 (SELECT COUNT(*)
 FROM enrollments
 WHERE student_id=?)
 AS enrolled_courses,

 (SELECT COUNT(*)
 FROM submissions
 WHERE student_id=?)
 AS submitted_assignments,

 (SELECT IFNULL(SUM(marks),0)
 FROM submissions
 WHERE student_id=?)
 AS total_marks
 `;

 db.query(
 sql,
 [student_id,student_id,student_id],
 (err,result)=>{

  if(err){
   return res.status(500).json(err);
  }

  res.json(result[0]);

 });

};