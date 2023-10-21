import mongoose from "mongoose";
import Repo from "./repository.model";

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  id: { type: String, unique: true },
  user: { type: mongoose.ObjectId, ref: User, required: true },
  description: { type: mongoose.Mixed, required: true },
  repo: { type: mongoose.ObjectId, ref: Repo },
  date_opened: { type: Date, default: new Date() },
  status: { type: String, default: "Opened", enum: ["Opened", "Closed"] },
  comment: [
    {
      data: { type: mongoose.Mixed },
      user: { type: mongoose.ObjectId, ref: User },
    },
  ],
});

const Issue = new mongoose.model("Issue", issueSchema);

export default Issue;
