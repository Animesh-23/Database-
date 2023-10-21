import mongoose from "mongoose";
import Repo from "./repository.model";

const pull_requestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  labels: [{ type: String, enum: ["feature", "bug_fix", "implementation"] }],
  user: { type: mongoose.ObjectId, ref: User, required: true },
  repo: { type: mongoose.ObjectId, ref: Repo },
  description: { type: mongoose.Mixed, required: true },
  date_opened: { type: Date, default: new Date() },
  status: { type: String, default: "Raised", enum: ["Raised", "Merged"] },
  comment: [
    {
      data: { type: mongoose.Mixed },
      user: { type: mongoose.ObjectId, ref: User },
    },
  ],
});

const Pull_Request = new mongoose.model("Pull_Request", pull_requestSchema);

export default Pull_Request;
