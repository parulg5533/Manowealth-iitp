// src/models/Appointment.ts
import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  studentName: { 
    type: String, 
    required: [true, 'Please provide your name'] 
  },
  rollNumber: { 
    type: String, 
    required: [true, 'Please provide your Roll Number'] 
  },
  email: { 
    type: String, 
    required: [true, 'Please provide your email'] 
  },
  concern: { 
    type: String, 
    required: true 
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed'],
    default: 'pending'
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// This check prevents "Model already compiled" errors in Next.js
export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);