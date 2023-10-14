import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: Buffer },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  leetcodeId: { type: String, required: true, unique: true },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  location: String,
  birthdate: Date,
  summary: String,
  skills: [{ type: String }],
  experience: {
    work: {
      type: Number,
      default: 0,
    },
    education: {
      type: String,
    },
  },
  social: {
    google: String,
    github: String,
    portfolio: String,
    linkedin: String,
    twitter: String,
  },
  global_rank: { type: Number, required: true },
  global_rank_contest: { type: Number },
  contests_attended: [
    {
      contest: { type: mongoose.ObjectId, ref: Contest },
      contest_rank: { type: Number },
    },
  ],
  problems_solved: [
    {
      problem: { type: mongoose.ObjectId, ref: Problem },
      solutions: [
        {
          solution: String,
          language: {
            type: String,
            enum: ["Java", "C++", "Python", "Go", "Rust", "Javascript"],
          },
          date: Date,
          status: {
            type: String,
            enum: [
              "Memory Limit Exceeded",
              "Time Limit Exceeded",
              "Wrong Answer",
              "Accepted",
            ],
          },
        },
      ],
    },
  ],
  discussion: [
    {
      post: { type: string },
      user: { type: mongoose.ObjectId, ref: User },
      votes: { user: { type: mongoose.ObjectId, ref: User } },
      replies: [
        {
          comment: { type: String },
          user: { type: mongoose.ObjectId, ref: User },
        },
      ],
    },
  ],
});

const User = new mongoose.model("User", userSchema);

export default User;
