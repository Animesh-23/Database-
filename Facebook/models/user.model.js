import mongoose from "mongoose";
import Post from "./post.model";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  date_of_birth: { type: Date, required: true },
  joined_date: { type: Date, default: new Date() },
  profile_pic: { type: Buffer, default: "))((" },
  backgroud_pic: { type: Buffer, default: "()()" },
  realtionship_status: { type: String, enum: ["Single", "Married"] },
  bio: { type: mongoose.Mixed },
  post: [{ type: mongoose.ObjectId, ref: Post }],
  friend: [{ type: mongoose.ObjectId, ref: User }],
  interest: [
    { type: String, enum: ["Sports", "Politics", "Exams", "Science Fiction"] },
  ],
  story: { type: Buffer, expires: 86400 },
});

const User = new mongoose.model("User", userSchema);
export default User;
