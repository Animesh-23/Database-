import mongoose from "mongoose";
import Teacher from "./teacher.model";
import Class from "./class.model";
import Student from "./student.model";

const divisionSchema = new mongoose.Schema({
  name: { type: String, enum: ["A", "B"], required: true },
  class_teacher: {
    type: mongoose.ObjectId,
    ref: Teacher,
    required: true,
    unique: true,
  },
  class: { type: mongoose.ObjectId, ref: Class, required: true },
  students: [{ type: mongoose.ObjectId, ref: Student }],
  class_representative: {
    type: mongoose.ObjectId,
    ref: Student,
    required: true,
    unique: true,
  },
});

const Division = new mongoose.model("Division", divisionSchema);

export default Division;
