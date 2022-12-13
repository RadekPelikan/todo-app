import { Router } from "express";
import apiAuthController from "../../controllers/api/auth";
import frontendAuthController from "../../controllers/frontend/auth";

const router = Router();

router.post("/login", apiAuthController.postLogin);
router.post("/logout", apiAuthController.postLogout);



// router.get("/", bookController.getBooks);
// router.get("/:id", bookController.getBook);
// router.post("/", bookController.postBook);
// router.put("/:id", bookController.putBook);
// router.patch("/:id", bookController.patchBook);
// router.delete("/:id", bookController.deleteBook);

export default router;
