import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

import userSchema from "../models/userSchema";

router.post("/register", async (req, res) => {
  const userData = req.body;

  const existingEmail = await userSchema.findOne({ email: userData.email });

  if (existingEmail) {
    return res.json("O email já está em uso.");
  }

  const newUser = await userSchema.create(userData);
  return res.json("Conta criada com sucesso.");
});

router.post("/login", async (req, res) => {
  const userData = req.body;

  const existingUser = await userSchema.findOne({
    email: userData.email,
    password: userData.password,
  });

  const isEmailValid = userData.email === existingUser?.email;
  const isPasswordValid = userData.password === existingUser?.password;

  if (!isEmailValid && !isPasswordValid) {
    return res.json("Email incorreto ou Senha incorreta.");
  }

  return res.json("Conta encontrada.");
});

export default router;
