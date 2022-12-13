import { Router } from "express";
import todosRouter from "./todos"
import authRouter from "./auth"
import authController from "../../controllers/api/auth"

const router = Router();

router.use("/", authRouter);
router.use("/todos", todosRouter);

/* Redirecting */
router.post("/login", authController.postLogin);
router.post("/logout", authController.postLogout);

router.get("/*", (req, res) => {
  res.render("error", {message: "Page not found"})
});


// router.get("/", bookController.getBooks);
// router.get("/:id", bookController.getBook);
// router.post("/", bookController.postBook);
// router.put("/:id", bookController.putBook);
// router.patch("/:id", bookController.patchBook);
// router.delete("/:id", bookController.deleteBook);

export default router;
