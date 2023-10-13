import mongoose from "mongoose";
import User from "./user.model";

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  avatar: { type: Buffer, default: "---" },
  bio: { type: String, default: "These is friendly group" },
  admin: [{ type: mongoose.ObjectId, ref: User }],
  created_by: { type: mongoose.ObjectId, ref: User },
  created_at: { type: Date, default: new Date() },
  members: [{ type: mongoose.ObjectId, ref: User }],
  all_chats: [
    { body: String, user: mongoose.ObjectId, ref: User, date: new Date() },
  ],
});

const Group = new mongoose.model("Group", groupSchema);

export default Group;
