import { Schema, model, models } from "mongoose";

const CommonTaskSchema = new Schema(
  {
    title: { type: String, required: true },
    completedBy: [{ type: Schema.Types.ObjectId, ref: "Admin" }],
  },
  { timestamps: true }
);

const CommonTask =
  models.CommonTask || model("CommonTask", CommonTaskSchema);

export default CommonTask;
