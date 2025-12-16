import { Schema, model, models } from "mongoose";

const SoftwareSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },

    image: {
      url: { type: String },
      publicId: { type: String },
    },

    status: {
      type: String,
      enum: ["upcoming", "live"],
      default: "upcoming",
    },

    link: { type: String },
  },
  { timestamps: true }
);

const Software =
  models.Software || model("Software", SoftwareSchema);

export default Software;
