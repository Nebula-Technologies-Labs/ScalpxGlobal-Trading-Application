import { AppError } from "@util/AppError";
import { loginRequestBody } from "./auth.schema";
import { AuthRepository } from "./auth.repository";
import generateToken from "@util/generateToken";
import UserProfileModel from "@models/userProfileModel";

export class AuthService {
  private authRepository = new AuthRepository();

  loginUser = async (data: loginRequestBody) => {
    const user = await this.authRepository.findUserByUserId(data.userId);

    if (!user) throw new AppError("Invalid UserId or Password");

    const validUser = await user.comparePassword(data.password);
    if (!validUser) throw new AppError("Invalid UserId or Password");

    const token = await generateToken({
      id: String(user._id),
      role: user.role,
    });

    return token;
  };
}
