import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { collection: "customer" }
);

export default mongoose.model("Customer", CustomerSchema);
