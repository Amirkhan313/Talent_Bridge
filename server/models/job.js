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

const jobSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    type: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    description: { type: String, required: true, trim: true },
    sallery: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    companyInfo: { type: companyInfoSchema, required: true },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
