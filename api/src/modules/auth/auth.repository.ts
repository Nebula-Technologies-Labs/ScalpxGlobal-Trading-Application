import userModel from "@models/userModel";

export class AuthRepository {
  findUserByUserId = async (userId: string) => {
    return userModel.findOne({ userId });
  };
}
