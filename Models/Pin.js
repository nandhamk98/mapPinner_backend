import mongoose from "mongoose";

const { Schema, model } = mongoose;

const pinSchema = new Schema(
  {
    username: {
      type: "String",
      required: true,
    },
    title: {
      type: "String",
      required: true,
      min: 5,
      max: 30,
      required: true,
      unique: true,
    },
    desc: {
      type: "String",
      required: true,
      min: 15,
      max: 50,
      required: true,
    },
    long: {
      type: "Number",
      required: true,
    },
    lat: {
      type: "Number",
      required: true,
    },
    rating: {
      type: "Number",
      min: 0,
      max: 5,
    },
  },
  { timestamp: true }
);

export const pin = model("pin", pinSchema);
