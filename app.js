import express from "express";
import HabitRouter from "./router/Habit.js";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", HabitRouter);
