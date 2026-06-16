// const sns = require("../utils/sns");
const db = require("../models/db"); // or your DB file

exports.submitAssignment = (req, res) => {

  const { assignment_id, student_id, file_url } = req.body;

  const sql = "INSERT INTO submissions(assignment_id, student_id, file_url) VALUES (?, ?, ?)";

  db.query(sql, [assignment_id, student_id, file_url], (err, result) => {
    if (err) return res.status(500).json(err);

   /* 🔔 SNS Step 7
    const params = {
      Message: "New Assignment Submission Received",
      TopicArn: process.env.SNS_TOPIC_ARN
    };

    sns.publish(params, (err, data) => {
      if (err) console.log(err);
      else console.log("SNS Sent:", data);
    }); */

    res.json({ message: "Submission successful" });
  });
};

exports.getSubmissions=(req,res)=>{

 const {assignment_id}=req.params;

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

exports.myMarks=(req,res)=>{

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