import { NextResponse } from "next/server";

import connectMongoDB from "@/libs/mongodb";
import FeedBack from "@/models/feedback";

export async function POST(request: any) {
  try {
    await connectMongoDB();

    const {
      budget,
      district,
      city,
      firstName,
      lastName,
      email,
      satisfaction,
      hexagonSelection,
    } = await request.json();

    await FeedBack.create({
      budget,
      district,
      city,
      firstName,
      lastName,
      email,
      satisfaction,
      hexagonSelection,
    });

    return NextResponse.json(
      { message: "Feedback submitted" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return NextResponse.json(
      { message: "Failed to submit feedback" },
      { status: 500 }
    );
  }
}
