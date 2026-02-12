import mongoose, { Model } from "mongoose";

const UserProfileSchema = new mongoose.Schema({});

const UserProfileModel = mongoose.model("userProfile", UserProfileSchema);

export default UserProfileModel;
