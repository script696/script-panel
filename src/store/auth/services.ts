import { UserData } from "./types";
import axiosInstance from "../../api/axiosInstance";

class Auth {
  static fetchLogin({ email, password }: UserData) {
    return axiosInstance.post("/auth/signin", {
      email,
      password,
    });
  }
}

export default Auth;
