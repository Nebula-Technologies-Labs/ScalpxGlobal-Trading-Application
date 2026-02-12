import userModel from "@models/userModel";

export const fetchUserProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password");
    if (!user) return res.status(401).json({ message: "unAuthorized Access" });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
