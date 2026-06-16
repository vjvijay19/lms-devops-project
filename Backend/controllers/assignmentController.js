const db = require("../models/db");

exports.createAssignment = (req,res)=>{

 const {
   course_id,
   title,
   description,
   due_date
 } = req.body;

 const created_by = req.user.id;

 const sql =
 "INSERT INTO assignments(course_id,title,description,due_date,created_by) VALUES (?,?,?,?,?)";

 db.query(
  sql,
  [course_id,title,description,due_date,created_by],
  (err,result)=>{

   if(err){
     return res.status(500).json(err);
   }

   res.status(201).json({
    message:"Assignment Created"
   });

  }
 );

};

exports.getAssignments=(req,res)=>{

 const {course_id}=req.params;

 const sql =
 "SELECT * FROM assignments WHERE course_id=?";

 db.query(
  sql,
  [course_id],
  (err,result)=>{

   if(err){
    return res.status(500).json(err);
   }

   res.json(result);

  }
 );

};

exports.submitAssignment=(req,res)=>{

 const {assignment_id}=req.body;

 const student_id = req.user.id;

 const file_url = req.files[0].location;

 const sql =
 "INSERT INTO submissions(assignment_id,student_id,file_url) VALUES (?,?,?)";

 db.query(
  sql,
  [assignment_id,student_id,file_url],
  (err,result)=>{

   if(err){
    return res.status(500).json(err);
   }

   res.status(201).json({
    message:"Assignment Submitted"
   });

  }
 );

};

// const sns = require("../utils/sns");
 
/*
const params = {
  Message: "New Assignment Published",
  TopicArn: process.env.SNS_TOPIC_ARN
};

sns.publish(params, (err, data) => {
  if (err) console.log(err);
  else console.log("SNS Sent:", data);
});  */