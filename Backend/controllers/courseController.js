const db = require("../models/db");

exports.createCourse = (req,res)=>{

 const {
  course_name,
  description
 } = req.body;

 const teacher_id =
 req.user.id;

 const sql =
 "INSERT INTO courses(course_name,description,teacher_id) VALUES (?,?,?)";

 db.query(
 sql,
 [course_name,description,teacher_id],
 (err,result)=>{

 if(err){

  return res.status(500).json(err);

 }

 res.status(201).json({
  message:"Course Created"
 });

 });

};

exports.getCourses=(req,res)=>{

 const sql =
 "SELECT * FROM courses";

 db.query(
 sql,
 (err,result)=>{

 if(err){

  return res.status(500).json(err);

 }

 res.json(result);

 });

};

exports.enrollCourse=(req,res)=>{

 const {course_id}=req.body;

 const student_id =
 req.user.id;

 const sql =
 "INSERT INTO enrollments(student_id,course_id) VALUES (?,?)";

 db.query(
 sql,
 [student_id,course_id],
 (err,result)=>{

 if(err){

  return res.status(500).json(err);

 }

 res.status(201).json({
  message:"Course Enrolled"
 });

 });

};