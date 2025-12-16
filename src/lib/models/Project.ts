import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    image: {
      url: { type: String },
      publicId: { type: String},
    },

    techStack: [{ type: String }],

    projectType: {
      type: String,
      enum: ["completed", "ongoing"],
      default: "completed",
    },

    link: { type: String },
  },
  { timestamps: true }
);

const Project =
  models.Project || model("Project", ProjectSchema);

export default Project;
