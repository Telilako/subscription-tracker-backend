import express from "express";

const userRouter = express();

userRouter.get("/user", (req,res) => {
res.send({message: "get all users"})
})
userRouter.get("/user/:id", (req,res) => {
res.send({message: "get user by id"})
})
userRouter.post("/user", (req,res) => {
res.send({message: "create user"})
})
userRouter.put("/user/:id", (req,res) => {
res.send({message: "update user by id"})
})

userRouter.delete("/user/:id", (req,res) => {
res.send({message: "get all users"})
})
export default userRouter;