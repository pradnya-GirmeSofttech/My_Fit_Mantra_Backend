import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  habitName: String,
  frequency: String,
  description: String,
  //   timeSlot: [
  //     {
  //       time: String,
  //     },
  //   ],
});

export const Habit = mongoose.model("Habit", habitSchema);
