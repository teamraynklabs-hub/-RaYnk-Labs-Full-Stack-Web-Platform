import { Schema, model, models } from "mongoose";

const CourseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    image: {
      url: { type: String },
      publicId: { type: String },
    },

    duration: { type: String },
    level: { type: String },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Course =
  models.Course || model("Course", CourseSchema);

export default Course;
