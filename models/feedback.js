import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
import { title } from "process";

const feedbackSchema = new Schema(
  {
    budget: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    satisfaction: {
      type: Number,
      required: true,
    },
    hexagonSelection: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const FeedBack =
  mongoose.models.FeedBack || mongoose.model("Feedback", feedbackSchema);

export default FeedBack;
