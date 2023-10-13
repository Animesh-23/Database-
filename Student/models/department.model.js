import mongoose from "mongoose";
import Teacher from "./teacher.model";
import Student from "./student.model";

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hod: { type: mongoose.ObjectId, ref: Teacher, required: true },
  teachers: [{ type: mongoose.ObjectId, ref: Teacher }],
  students: [{ type: mongoose.ObjectId, ref: Student }],
});

const Department = new mongoose.model("Department", departmentSchema);

export default Department;
