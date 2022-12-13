import { Router } from "express";
import auth from "../../middlewares/auth";
import apiTodosController from "../../controllers/api/todos";
import frontendTodosController from "../../controllers/frontend/todos";

const router = Router();

// router.get("/", auth.isTokenValid, apiTodosController.getTodos, frontendTodosController.getTodos);
router.get("/", apiTodosController.getTodos, frontendTodosController.getTodos);




// router.get("/", bookController.getBooks);
// router.get("/:id", bookController.getBook);
// router.post("/", bookController.postBook);
// router.put("/:id", bookController.putBook);
// router.patch("/:id", bookController.patchBook);
// router.delete("/:id", bookController.deleteBook);

export default router;
