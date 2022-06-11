import { Router } from "express";
import { pin } from "../Models/Pin.js";

const router = Router();

router.post("/createPin", async (req, res) => {
  try {
    const pinData = new pin(req.body);
    pinData.save();
    res.status(200).json({ id: pinData._id });
  } catch (err) {
    res.status(500).send("Invalid data");
  }
  return;
});

router.get("/getPin", async (req, res) => {
  try {
    const data = await pin.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({ message: "Error in parsing" });
  }
  return;
});

export const pinRouter = router;
