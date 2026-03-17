import mongoose from "mongoose";

const companyInfoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const developerSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    jobTitle: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    sallery: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    companyInfo: { type: companyInfoSchema, required: true },
  },
  { timestamps: true }
);

const Developer = mongoose.model("Developer", developerSchema);

export default Developer;
