import express from "express"
import { createUser, getUsers } from "../controllers/user.controller.js";
import { validate } from "../middleware/validate.middleware.js"
import { createUserSchema } from "../validators/user.validator.js";

const router = express.Router();

router.post("/", validate(createUserSchema), createUser);
router.post("/", createUser);
router.get("/", getUsers);

export default router;
