import express from "express";

const subsRouter = express();

subsRouter.get("/", (req,res) => {
res.send({message: "get all subscriptions"})
})
subsRouter.get("/user/:id", (req,res) => {
res.send({message: "get subscription"})
})
subsRouter.post("/add", (req,res) => {
res.send({message: "create subscription"})
})
subsRouter.put("/user/:id", (req,res) => {
res.send({message: "update subscription"})
})
subsRouter.delete("/user/:id", (req,res) => {
res.send({message: "get subscription"})
})
export default subsRouter;