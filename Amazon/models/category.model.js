import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  prouduct: [{ type: mongoose.ObjectId, ref: Product }],
});

const Category = new mongoose.model("Category", categorySchema);

export default Category;
