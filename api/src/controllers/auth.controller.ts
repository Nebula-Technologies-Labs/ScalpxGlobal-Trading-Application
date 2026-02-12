import adminModel from "@models/adminModel";
import userModel from "@models/userModel";
import generateToken from "@util/generateToken";

export const registerAdminUser = async (req, res) => {
  try {
    const { userName, userId, password } = req.body;

    if (!userName || !password || !userId)
      return res.status(401).json({ message: "userId or Password invalid" });

    const admin = await adminModel.create({
      password,
      role: "ADMIN",
      userId,
      userName,
    });

    if (admin)
      return res.status(200).json({ message: "Admin Created Successfully" });
  } catch (error) {
    return res.status(401).json({ message: "Bad Request" });
  }
};

export const loginAdminUser = async (req, res) => {
  try {
    const { userId, password } = req.body;
    if (!userId || !password)
      return res.status(401).json({ message: "userId or password invalid" });

    const admin = await adminModel.findOne({ userId });
    if (!admin)
      return res.status(401).json({ message: "userId or password invalid" });

    const verified = await admin.comparePassword(password);
    if (!verified)
      return res.status(401).json({ message: "userId or password invalid" });
    const token = await generateToken({ id: admin._id, role: admin.role });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: "Bad Request" });
  }
};

export const loginClientUser = async (req, res) => {
  try {
    const { userId, password } = req.body;
    if (!userId || !password)
      return res.status(403).json({ message: "UserId or Password Invalid" });

    const client = await userModel.findOne({ userId });
    if (!client)
      return res.status(401).json({ message: "UserId or Password Invalid" });

    const verified = await client.comparePassword(password);
    if (!verified)
      return res.status(401).json({ message: "UserId or Password invalid" });

    const token = await generateToken({ id: client._id, role: client.role });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: "Bad Request" });
  }
};
