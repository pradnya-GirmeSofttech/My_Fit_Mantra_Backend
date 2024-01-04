// controller/Habit.js
import { Habit } from "../model/habits.js"; // Assuming the file is named habits.js

export const createHabit = async (req, res) => {
  try {
    const newHabit = await Habit.create(req.body);
    res.status(201).json(newHabit);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
