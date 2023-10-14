import mongoose from "mongoose";
import User from "./user.model";

const contestSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  participants: [
    {
      user: { type: mongoose.ObjectId, ref: User },
      problems_solved: [{ type: mongoose.ObjectId, ref: Problem }],
    },
  ],
  problem: [
    {
      problem: { type: mongoose.ObjectId, ref: Problem },
      point: { type: nuber },
    },
  ],
  date: { type: Date, required: true },
});

const Contest = new mongoose.model("Contest", contestSchema);

export default Contest;
