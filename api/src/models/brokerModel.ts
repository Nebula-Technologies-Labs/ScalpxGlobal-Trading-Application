import { Model } from "mongoose";
import { BrokerDTO } from "types/User";
import bcrypt from "bcryptjs";
const mongoose = require("mongoose");

const brokerSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "Broker" },
    userName: { type: String },
  },
  { timestamps: true },
);

brokerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next;
});

brokerSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const brokerModel = mongoose.model("broker", brokerSchema) as Model<BrokerDTO>;

export default brokerModel;
