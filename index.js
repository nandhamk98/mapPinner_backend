import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./Routes/UserRoute.js";
import { pinRouter } from "./Routes/PinRoute.js";

dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to DB"))
  .catch((err) => console.error(`Connection Failed : ${err}`));

app.use("/api/users", userRouter);
app.use("/api/pin", pinRouter);

app.listen(port, () => console.log(`Listening to port: ${port}`));
app.get("/", (req, res) => {
  res.send("This is my new App");
});
