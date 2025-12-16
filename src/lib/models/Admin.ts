import mongoose, { Schema, model, models } from "mongoose";

export interface AdminDocument {
  email: string;
  password: string;
  role: "admin" | "super-admin";
  createdAt: Date;
}

const AdminSchema = new Schema<AdminDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "super-admin"],
      default: "admin",
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Admin = models.Admin || model<AdminDocument>("Admin", AdminSchema);

export default Admin;
