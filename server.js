import express, { json } from "express";
import {config} from 'dotenv'
import authRouter from "./routes/authRoute.js"
import userRouter from "./routes/userRoute.js"
import subsRouter from "./routes/subsRoute.js"

const app = express();
config();
const PORT = process.env.PORT;
console.log(PORT)
app.use(json())
app.use("/auth", authRouter)
app.use("/cust", userRouter);
app.use("/subs", subsRouter);
app.get("/", (req,res) => {
    res.send({message: "Welcome to subscription track!!"})
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port!!`)
})