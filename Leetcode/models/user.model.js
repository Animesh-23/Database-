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
  problems_solved: [{ type: mongoose.ObjectId, ref: Problem }],
});

const User = new mongoose.model("User", userSchema);

export default User;
