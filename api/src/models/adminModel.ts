import { Model } from "mongoose";
import { AdminDTO } from "types/User";
import bcrypt from "bcryptjs";
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "ADMIN" },
    userName: { type: String },
  },
  { timestamps: true },
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next;
});

adminSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const adminModel = mongoose.model("admin", adminSchema) as Model<AdminDTO>;

export default adminModel;
