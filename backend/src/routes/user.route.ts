import express from "express";
import { test } from "../controllers/user.controller.ts";
import { signup } from "../controllers/auth.controller.ts";

const router = express.Router();

router.get('/', test);

router.post('/signup', signup)

export default router;