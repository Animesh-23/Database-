import mongoose from "mongoose";
import Category from "./category.model";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand_name: { type: String, enum: ["Samsung"], required: true },
  details: { type: mongoose.Mixed, required: true },
  description: { type: String, required: true },
  category: { type: mongoose.ObjectId, ref: Category },
  price: { type: Number, required: true },
  offer: [
    {
      name: { type: String, required: true },
      details: { type: mongoose.Mixed, required: true },
    },
  ],
  ratings: [
    {
      star: { type: Number, enum: [1, 2, 3, 4, 5] },
      comment: { type: String },
      customer: { type: mongoose.ObjectId, ref: User },
    },
  ],
});

const Product = new mongoose.model("Product", productSchema);

export default Product;
