import { Request, Response, NextFunction } from "express";
import axios, { AxiosError } from "axios";

const postLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const authResponse = await axios.post(
      `${process.env.DB_URL}/api/collections/users/auth-with-password`,
      {
        identity: email,
        password,
      }
    );
    const { token } = authResponse.data;
    res
      .cookie("token", token, { httpOnly: true })
      .status(302)
      .redirect("/todos");
  } catch (error) {
    // TODO: Fix this
    console.error(error);
    const err = error as AxiosError;
    if (err.response?.status === 400) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

const postLogout = async (req: Request, res: Response, next: NextFunction) => {
  res.clearCookie("token").status(302).redirect("/login");
};

export default {
  postLogin,
  postLogout,
};
