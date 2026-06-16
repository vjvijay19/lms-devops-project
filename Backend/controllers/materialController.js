const db = require("../models/db");

exports.uploadMaterial = (req,res)=>{

 const {course_id,title}=req.body;

 console.log(req.body);
 console.log(req.files);

 const file_url = req.files[0].location;

 const uploaded_by = req.user.id;

 const sql =
 "INSERT INTO course_materials(course_id,title,file_url,uploaded_by) VALUES (?,?,?,?)";

 db.query(
 sql,
 [course_id,title,file_url,uploaded_by],
 (err,result)=>{

   if(err){
     return res.status(500).json(err);
   }

   res.status(201).json({
     message:"Material Uploaded",
     file_url
   });

 });

};