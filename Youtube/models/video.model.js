import mongoose, { mongo } from "mongoose";
import User from "./user.model";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {
    views: { type: Number, default: 0 },
    created_on: { type: Date, default: new Date() },
    tags: [
      {
        type: String,
        enum: ["App dev", "Web dev", "Php", "Python", "Cooking"],
      },
    ],
    links: [{ type: String }],
  },
  likes: [{ type: mongoose.ObjectId, ref: User }],
  dislikes: [{ type: mongoose.ObjectId, ref: User }],
  owner_channel: { type: mongoose.ObjectId, ref: User, required: true },
  comments: [
    {
      comment: { type: String, required: true },
      user: { type: mongoose.ObjectId, ref: User },
      posted_on: { type: Date, default: new Date() },
      likes: [{ type: mongoose.ObjectId, ref: User }],
      dislikes: [{ type: mongoose.ObjectId, ref: User }],
      replies: [
        {
          user: { type: mongoose.ObjectId, ref: User },
          reply: { type: String },
          replied_on: { type: Date, default: new Date() },
        },
      ],
    },
  ],
});

const Video = new mongoose.model("Video", videoSchema);

export default Video;
