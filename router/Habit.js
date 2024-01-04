// router/Habit.js
import express from "express";
import { createHabit } from "../controller/Habit.js";

const router = express.Router();

router.route("/createHabit").post(createHabit);

export default router;
