import mongoose from "mongoose";
import Teacher from "./teacher.model";
import Class from "./class.model";

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject_code: { type: String, required: true },
  teachers: [{ type: mongoose.ObjectId, ref: Teacher }],
  class: [{ type: mongoose.ObjectId, ref: Class }],
});

const Subject = new mongoose.model("Subject", subjectSchema);

export default Subject;
