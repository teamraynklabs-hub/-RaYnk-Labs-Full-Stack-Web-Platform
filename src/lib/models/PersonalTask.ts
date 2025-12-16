import { Schema, model, models } from "mongoose";

const PersonalTaskSchema = new Schema(
  {
    adminId: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const PersonalTask =
  models.PersonalTask || model("PersonalTask", PersonalTaskSchema);

export default PersonalTask;
