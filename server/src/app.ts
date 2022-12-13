import express, {
  Application,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
import path from "path";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
// const PocketBase = require("pocketbase/cjs");

const app: Application = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

import { apiRouter, FrontendRouter } from "./routes";


app.use("/api", apiRouter);
app.use("/", FrontendRouter);

// const test = async () => {
//   // console.log(process.env.DB_ADMIN_EMAIL, process.env.DB_ADMIN_PASSWORD)
//   const pb = new PocketBase(process.env.DB_URL);

//   console.log(pb.authStore.isValid)
//   const adminData = await pb.admins.authWithPassword(
//     "admin@localhost.com",
//     "admin123456"
//     );
//     console.log(pb.authStore.isValid)
//   // const resultList = await pb.collection('todos').getList(1, 50);
// };
// test();

// app.get("/", async (req: Request, res: Response) => {

//   const collectionName = "todos";
//   let token = "";
//   try {
//     const authResponse = await axios.post(
//       `${process.env.DB_URL}/api/admins/auth-with-password`,
//       {
//         identity: process.env.DB_ADMIN_EMAIL,
//         password: process.env.DB_ADMIN_PASSWORD,
//       }
//     );
//     token = authResponse.data.token;
//   } catch (err) {
//     console.error("AUTH FAILED");
//     console.log(err)
//     res.render("index", { title: "FUCK", items: [], err });
//     return;
//   }
//   try {

//     const response = await axios.get(
//       `${process.env.DB_URL}/api/collections/${collectionName}/records`,
//       {
//         headers: {
//           Authorization: token,
//         },
//       }
//     );
//     const { items } = response.data;
//     res.render("index", { title: "AAA", items });

//   } catch (err :any) {
//     console.log("GET FAILED");
//     res.render("index", { title: "FUCK", items: [], err });
//   }
// });

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server listening on port ${process.env.BACKEND_URL}`);
});
