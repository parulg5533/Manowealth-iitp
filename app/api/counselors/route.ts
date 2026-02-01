// src/app/api/counselors/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Counselor from '@/models/Counselor';

// GET request to fetch all counselors
export async function GET() {
  await connectDB();
  const counselors = await Counselor.find({});
  return NextResponse.json(counselors);
}

// POST request to add a new counselor (For Admin)
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const newCounselor = await Counselor.create(body);
  return NextResponse.json(newCounselor, { status: 201 });
}