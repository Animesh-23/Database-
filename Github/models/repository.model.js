import mongoose from "mongoose";
import User from "./user.model";
import Issue from "./issue.model";
import Pull_Request from "./pull_request.model";

const repoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fork: [{ type: mongoose.ObjectId, ref: User }],
  star: [{ type: mongoose.ObjectId, ref: User }],
  about: { type: String, default: "These is repo", maxlength: 500 },
  is_public: { type: Boolean, default: true },
  code: { type: mongoose.Mixed },
  branch: [{ type: String, default: "main" }],
  issue: [
    {
      type: mongoose.ObjectId,
      ref: Issue,
    },
  ],
  pull_request: [
    {
      type: mongoose.ObjectId,
      ref: Pull_Request,
    },
  ],
});

const Repo = new mongoose.model("Repo", repoSchema);

export default Repo;
