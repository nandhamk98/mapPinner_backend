import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: "String",
    min: 6,
    max: 25,
    required: true,
    unique: true,
  },
  email: {
    type: "String",
    min: 10,
    max: 50,
    required: true,
  },
  password: {
    type: "String",
    min: 6,
    max: 15,
    required: true,
  },
});

export const user = model("user", userSchema);
