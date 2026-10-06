import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req,res) => {
    const {name, email} = req.body;
    res.json({message: name})
})
authRouter.post("/Sign-in", (req,res) => {
res.send({message: "Sign-in"})
})
authRouter.post("/Signout", (req,res) => {
    res.send({message: "SignOut"})
})

export default authRouter;