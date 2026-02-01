// src/app/api/appointments/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db'; // Ensure you have this file from Phase 3
import Appointment from '@/models/Appointment';

export async function POST(req: Request) {
  try {
    // 1. Connect to Database
    await connectDB();

    // 2. Get data from the frontend
    const body = await req.json();

    // 3. Create the appointment in MongoDB
    const newAppointment = await Appointment.create(body);

    // 4. Send success response
    return NextResponse.json(
      { message: 'Appointment booked successfully', data: newAppointment },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error booking appointment:', error);
    return NextResponse.json(
      { message: 'Failed to book appointment' },
      { status: 500 }
    );
  }
}