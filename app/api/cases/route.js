// app/api/cases/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Case from "@/models/Case";

export async function GET() {
  try {
    await connectToDatabase();
    const cases = await Case.find().sort({ filedDate: 1 }).lean();
    return NextResponse.json(cases);
  } catch (error) {
    console.error("GET /api/cases error:", error);
    return new NextResponse("Server error", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      caseNumber,
      employerName,
      employerInitial,
      filedDate,
      decisionDate,
    } = body;

    if (
      !caseNumber ||
      !employerName ||
      !employerInitial ||
      !filedDate ||
      !decisionDate
    ) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    const filed = new Date(filedDate);
    const decision = new Date(decisionDate);

    const diffMs = decision.getTime() - filed.getTime();
    const processingDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    await connectToDatabase();

    const doc = await Case.create({
      caseNumber,
      employerName,
      employerInitial,
      filedDate: filed,
      decisionDate: decision,
      processingDays,
    });

    return NextResponse.json(doc, { status: 201 });
  } catch (error) {
    console.error("POST /api/cases error:", error);
    return new NextResponse("Server error", { status: 500 });
  }
}
