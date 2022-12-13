import { Request, Response, NextFunction } from "express";
import axios, { AxiosError } from "axios";

const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  // req.locals.
  try {
    const dbResponse = await axios.get(
      `${process.env.DB_URL}/api/collections/todos/records`,
      {
        headers: {
          Authorization: req.cookies.token,
        },
      }
    );

    const { items } = dbResponse.data;
    res.locals.todos = items;
  } catch (err: unknown) {
    // res.clearCookie("token");
    console.log("Something went wrong during getting todos");
    res.render("error", { message: "Something went wrong during getting todos" });
    return;
  }

  next();
};

export default {
  getTodos,
};
