import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Developer from "../models/developer.js";
import Job from "../models/job.js";

dotenv.config();

const upsertMany = async (Model, items) => {
  if (!Array.isArray(items) || items.length === 0) return;
  await Promise.all(
    items.map((item) =>
      Model.updateOne({ id: item.id }, { $set: item }, { upsert: true })
    )
  );
};

const run = async () => {
  try {
    await connectDB();
    const data = { developers: [], jobs: [] };
    await upsertMany(Developer, data.developers || []);
    await upsertMany(Job, data.jobs || []);
    console.log("Seed completed (no external data source configured).");
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
};

run();
