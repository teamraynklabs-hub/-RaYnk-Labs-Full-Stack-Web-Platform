import { Schema, model, models } from "mongoose";

const TeamMemberSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: { type: String },

    image: {
      url: { type: String },
      publicId: { type: String },
    },

    socialLinks: {
      linkedin: String,
      github: String,
      twitter: String,
    },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const TeamMember =
  models.TeamMember || model("TeamMember", TeamMemberSchema);

export default TeamMember;
