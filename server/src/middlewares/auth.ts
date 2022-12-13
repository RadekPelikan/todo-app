import axios from "axios";
import { Request, Response, NextFunction } from "express";

const isTokenValid = async (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies.token === undefined) return res.redirect("/login");
  try {
    const authDBResponse = await axios.post(`${process.env.DB_URL}/api/collections/todos/records`, {
      headers: {
        Authorization: req.cookies.token,
      },
    });
    console.log("AUTH good");
  } catch(err: unknown) {
    console.log("AUTH failed");
    res.redirect("/login");
    return;
  }

  next();
  
    
  // try {
  //   console.log(req.cookies.token);
  //   const dbResponse = await axios.post(
  //     `${process.env.DB_URL}/api/admins/auth-refresh`,
  //     {
  //       headers: {
  //         Authorization: req.cookies.token,
  //       },
  //     }
  //   );
  //   const token: string = dbResponse.data.token;
  //   console.log("TOKEN:", token);
  //   req.cookies.token = token;
  //   res.cookie("token", token);
  // } catch (err: unknown) {
  //   // res.clearCookie("token");
  //   console.log("AUTH failed");
  //   res.render("error", { message: "AUTH failed" });
  //   return;
  // }
  // next();
};

export default {
  isTokenValid,
};
