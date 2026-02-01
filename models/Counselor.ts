// src/models/Counselor.ts
import mongoose from 'mongoose';

const CounselorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  specialization: String,
  availableSlots: [String], // e.g., ["10:00 AM", "2:00 PM"]
});

export default mongoose.models.Counselor || mongoose.model('Counselor', CounselorSchema);