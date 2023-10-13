import mongoose from "mongoose";
import Teacher from "./teacher.model";
import Student from "./student.model";
import Subject from "./subject.model";

const classSchema = new mongoose.Schema({
  class: { type: Number, required: true },
  students: [{ type: mongoose.ObjectId, ref: Student }],
  all_subjects: [{ type: mongoose.ObjectId, ref: Subject }],
  all_teachers: [{ type: mongoose.ObjectId, ref: Teacher }],
});

const Class = new mongoose.model("Class", classSchema);

export default Class;
