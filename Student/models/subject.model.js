import mongoose from "mongoose";
import Teacher from "./teacher.model";
import Class from "./class.model";

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject_code: { type: String, required: true },
  teachers: [{ type: mongoose.ObjectId, ref: Teacher }],
  classes: [{ type: mongoose.ObjectId, ref: Class }],
  sub_type: { type: String, enum: ["Theory", "Practical"] },
});

const Subject = new mongoose.model("Subject", subjectSchema);

export default Subject;
