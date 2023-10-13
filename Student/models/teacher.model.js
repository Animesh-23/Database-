import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile_no: { type: Number, required: true, unique: true },
  education: { type: String, required: true },
  subjects: [{ type: mongoose.ObjectId, ref: Subject }],
  exprience: { type: String, required: true },
  salary: { type: Number, required: true },
  class_teacher_of_class: Number,
});

const Teacher = new mongoose.model("Teacher", teacherSchema);

export default Teacher;
