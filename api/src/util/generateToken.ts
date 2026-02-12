import jwt from "jsonwebtoken";

const generateToken = async ({ id, role }: { id: any; role: string }) => {
  const token = jwt.sign({ id, role }, process.env.SECRET);
  return token;
};

export default generateToken;
