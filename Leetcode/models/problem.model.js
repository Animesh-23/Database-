import mongoose from "mongoose";
import User from "./user.model";
import Topic from "./topic.model";
const problemSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  sr_no: { type: Number },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"] },
  examples: [
    {
      input: { type: String || Number || [Number] || [String] },
      output: { type: String || Number || [Number] || [String] },
      explanation: { type: String },
    },
  ],
  test_cases: [
    {
      input: { type: String || Number || [Number] || [String] },
      output: { type: String || Number || [Number] || [String] },
    },
  ],
  constraints: { type: mongoose.Mixed },
  realted_topics: [{ type: mongoose.ObjectId, ref: Topic }],
  similar_questions: [{ type: mongoose.ObjectId, ref: Problem }],
  submissions: [
    {
      code: { type: mongoose.Mixed, required: true },
      user: { type: mongoose.ObjectId, ref: User },
      accepted: Boolean,
    },
  ],
  discussion: [
    {
      comment: { type: mongoose.Mixed },
      user: { type: mongoose.ObjectId, ref: User },
      votes: [{ type: mongoose.ObjectId, rer: User }],
      replies: [
        { body: mongoose.Mixed, user: { type: mongoose.ObjectId, ref: User } },
      ],
      date: { type: Date, default: new Date() },
    },
  ],
  solutions: [
    {
      title: { type: String, required: true },
      user: { type: mongoose.ObjectId, ref: User },
      votes: [{ type: mongoose.ObjectId, ref: User }],
      views: { type: Number, default: 0 },
      date: { type: Date, default: new Date() },
      explaination: { type: mongoose.Mixed },
      code: { type: String },
    },
  ],
});

const Problem = new mongoose.model("Problem", problemSchema);

export default Problem;
