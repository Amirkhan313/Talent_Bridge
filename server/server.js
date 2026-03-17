import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import connectDB from "./config/db.js";
import Developer from "./models/developer.js";
import Job from "./models/job.js";

dotenv.config(); // MUST be first

connectDB();

const app = express();

app.use(cors({ exposedHeaders: ["X-Total-Count"] }));
app.use(express.json());

const buildPaging = (query) => {
  const limit = query?._limit ? Number(query._limit) : null;
  const page = query?._page ? Number(query._page) : null;
  const skip = page && limit ? (page - 1) * limit : null;
  return { limit, skip };
};

// developers
app.get("/api/developers", async (req, res) => {
  const { limit, skip } = buildPaging(req.query);
  let q = Developer.find().sort({ createdAt: -1 });
  if (skip !== null) q = q.skip(skip);
  if (limit !== null) q = q.limit(limit);
  if (limit !== null) {
    const totalCount = await Developer.countDocuments();
    res.set("X-Total-Count", String(totalCount));
  }
  const developers = await q;
  res.json(developers);
});

app.get("/api/developers/:id", async (req, res) => {
  const developer = await Developer.findOne({ id: req.params.id });
  if (!developer) return res.status(404).json({ message: "Developer not found" });
  res.json(developer);
});

app.post("/api/developers", async (req, res) => {
  const payload = { ...req.body };
  if (!payload.id) payload.id = crypto.randomUUID();
  const developer = await Developer.create(payload);
  res.status(201).json(developer);
});

app.put("/api/developers/:id", async (req, res) => {
  const developer = await Developer.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );
  if (!developer) return res.status(404).json({ message: "Developer not found" });
  res.json(developer);
});

app.delete("/api/developers/:id", async (req, res) => {
  const developer = await Developer.findOneAndDelete({ id: req.params.id });
  if (!developer) return res.status(404).json({ message: "Developer not found" });
  res.json({ ok: true });
});

// jobs
app.get("/api/jobs", async (req, res) => {
  const { limit, skip } = buildPaging(req.query);
  let q = Job.find().sort({ createdAt: -1 });
  if (skip !== null) q = q.skip(skip);
  if (limit !== null) q = q.limit(limit);
  if (limit !== null) {
    const totalCount = await Job.countDocuments();
    res.set("X-Total-Count", String(totalCount));
  }
  const jobs = await q;
  res.json(jobs);
});

app.get("/api/jobs/:id", async (req, res) => {
  const job = await Job.findOne({ id: req.params.id });
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

app.post("/api/jobs", async (req, res) => {
  const payload = { ...req.body };
  if (!payload.id) payload.id = crypto.randomUUID();
  const job = await Job.create(payload);
  res.status(201).json(job);
});

app.put("/api/jobs/:id", async (req, res) => {
  const job = await Job.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

app.delete("/api/jobs/:id", async (req, res) => {
  const job = await Job.findOneAndDelete({ id: req.params.id });
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
