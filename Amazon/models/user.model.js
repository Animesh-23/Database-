import mongoose from "mongoose";
import Product from "./product.model";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  cart: [{ type: mongoose.ObjectId, ref: Product }],
  my_list: [
    {
      title: { type: String, required: true },
      products: [
        {
          product: { type: mongoose.ObjectId, ref: Product },
          quantity: { type: Number, default: 1 },
        },
      ],
    },
  ],
  order: [
    {
      product: { type: mongoose.ObjectId, ref: Product },
      quantity: { type: Number, default: 1 },
      status: { type: String, enum: ["Ordered", "Delivered", "Cancelled"] },
    },
  ],
  seller_account: {
    item: [{ type: mongoose.ObjectId, ref: Product }],
  },
});

const User = new mongoose.model("User", userSchema);

export default User;
