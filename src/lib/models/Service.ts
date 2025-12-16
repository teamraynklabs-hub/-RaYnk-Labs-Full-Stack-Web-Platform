import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    image: {
      url: { type: String },
      publicId: { type: String },
    },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Service =
  models.Service || model("Service", ServiceSchema);

export default Service;
