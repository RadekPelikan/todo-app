import { Router } from "express";
import todosRouter from "./todos"
import authRouter from "./auth"

const router = Router();

router.use("/todos", todosRouter);
router.use("/auth", authRouter);

router.get("/*", (req, res) => {
  res.status(404).json({message: "API not found"})
});


// router.get("/", bookController.getBooks);
// router.get("/:id", bookController.getBook);
// router.post("/", bookController.postBook);
// router.put("/:id", bookController.putBook);
// router.patch("/:id", bookController.patchBook);
// router.delete("/:id", bookController.deleteBook);

export default router;
