import { Router } from "express";
import { singIn, singOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", singIn);
authRouter.delete(`/sign-out/:id`, singOut);

export default authRouter;
