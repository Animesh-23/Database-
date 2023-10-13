import mongoose from "mongoose";
import Teacher from "./teacher.model";
import Student from "./student.model";
import Subject from "./subject.model";

const classSchema = new mongoose.Schema({
  class: { type: Number, required: true },
  class_teacher: { type: mongoose.ObjectId, ref: Teacher },
  students: [{ type: mongoose.ObjectId, ref: Student }],
  all_subjects: [{ type: mongoose.ObjectId, ref: Subject }],
});

const Class = new mongoose.model("Class", classSchema);

export default Class;
