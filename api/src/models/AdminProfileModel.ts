import mongoose from "mongoose";

const AdminMdodelSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  userName: { type: String, required: true },
});

const AdminProfileModel = mongoose.model("admin", AdminMdodelSchema);

export default AdminProfileModel;
