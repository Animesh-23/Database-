import mongoose from "mongoose";
import Problem from "./problem.model";

const topicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  problems: [{ type: mongoose.ObjectId, ref: Problem }],
});

const Topic = new mongoose.model("Topic", topicSchema);
export default Topic;
