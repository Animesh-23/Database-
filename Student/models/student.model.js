import mongoose from "mongoose";
import Subject from "./subject.model";
import Class from "./class.model";
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  prn_no: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  roll_no: { type: Number, required: true },
  mobile_no: { type: Number, required: true },
  address: { type: String, required: true },
  class: { type: mongoose.ObjectId, ref: Class, required: true },
  subjects: [{ type: mongoose.ObjectId, ref: Subject }],
});

const Student = new mongoose.model("Student", studentSchema);

export default Student;
