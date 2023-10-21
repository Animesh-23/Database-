import mongoose from "mongoose";
import Repo from "./repository.model";
import Issue from "./issue.model";
import Pull_Request from "./pull_request.model";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 50 },
  avatar: { type: Buffer, default: "---" },
  bio: { type: String, default: "I'm developer", maxlength: 300 },
  followers: [{ type: mongoose.ObjectId, ref: User }],
  following: [{ type: mongoose.ObjectId, ref: User }],
  pronounce: { type: String, enum: ["he/him", "they/them", "her/she"] },
  social_accounts: [
    { name: String, link: { type: String, required: true, unique: true } },
  ],
  address: { type: String, maxlength: 300 },
  repository: [{ type: mongoose.ObjectId, ref: Repo }],
  star: [{ type: mongoose.ObjectId, ref: Repo }],
  contribution: {
    issue: [{ type: mongoose.ObjectId, ref: Issue }],
    pull_request: [{ type: mongoose.ObjectId, ref: Pull_Request }],
  },
});

const User = new mongoose.model("User", userSchema);

export default User;
