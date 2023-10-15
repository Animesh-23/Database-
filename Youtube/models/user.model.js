import mongoose from "mongoose";
import Video from "./video.model";
import Post from "./post.model";

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: Buffer, default: "0000" },
  background_image: { type: Buffer, default: "0000" },
  joined_date: { type: Date, default: new Date() },
  about: {
    bio: {
      type: String,
      default: "I'm just started",
    },
    links: [{ name: { type: String }, link: { type: String, required: true } }],
    channel_details: {
      subscriber: [{ type: mongoose.ObjectId, ref: User }],
      uploaded_video: [
        { video: { type: mongoose.ObjectId, ref: Video }, live: Boolean },
      ],
      location: { type: String },
    },
  },
  created_playlist: [
    {
      videos: [{ type: mongoose.ObjectId, ref: Video }],
      isPrivate: Boolean,
    },
  ],
  community_post: [
    {
      type: mongoose.ObjectId,
      ref: Post,
    },
  ],
  liked_video: [{ type: mongoose.ObjectId, ref: Video }],
  watch_later_video: [{ type: mongoose.ObjectId, ref: Video }],
  watch_history: [{ type: mongoose.ObjectId, ref: Video }],
  search_history: [{ type: String }],
  is_watch_history_pause: { type: Boolean, default: false },
  is_search_history_pause: { type: Boolean, default: false },
  subscription: [
    {
      channel: { type: mongoose.ObjectId, ref: User },
      notification: { type: String, enum: ["All", "Personalized", "None"] },
    },
  ],
});

const User = new mongoose.model("User", userSchema);

export default User;
