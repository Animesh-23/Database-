import mongoose from "mongoose";
import Post from "./post.model";

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: Buffer, default: "-----" },
  email: { type: String, required: true, unique: true },
  followers: [
    { chats: { type: String }, user: { type: mongoose.ObjectId, ref: User } },
  ],
  following: [
    { chats: { type: String }, user: { type: mongoose.ObjectId, ref: User } },
  ],
  bio: { type: String, default: "I am anonymous user" },
  groups: [{ type: mongoose.ObjectId, ref: Group }],
  birth_date: { type: Date, required: true },
  posts: [{ type: mongoose.ObjectId, ref: Post }],
  story: {
    video: {
      type: Buffer,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    expires: 86400,
  },
  comments: [
    { data: { type: String }, post: { type: mongoose.ObjectId, ref: Post } },
  ],
  likes: [{ type: mongoose.ObjectId, ref: Post }],
  dislikes: [{ type: mongoose.ObjectId, ref: Post }],
});

const User = new mongoose.model("User", userSchema);

export default User;
