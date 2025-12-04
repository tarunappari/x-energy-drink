// app/api/estimate-by-case/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo/mongodb";
import Case from "@/models/Case";

// Simple percentile helper
function computePercentiles(daysArray) {
  if (!daysArray.length) {
    return { median: null, p25: null, p75: null };
  }

  const sorted = [...daysArray].sort((a, b) => a - b);
  const n = sorted.length;

  function percentile(p) {
    if (n === 1) return sorted[0];
    const idx = Math.floor(p * (n - 1)); // 0-based index
    return sorted[idx];
  }

  const p25 = percentile(0.25);
  const median = percentile(0.5);
  const p75 = percentile(0.75);

  return { median, p25, p75 };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { caseNumber, employerInitial } = body;

    if (!caseNumber || !employerInitial) {
      return new NextResponse(
        "caseNumber and employerInitial are required",
        { status: 400 }
      );
    }

    await connectToDatabase();

    // 1. Find the specific case using BOTH caseNumber and employerInitial
    const caseDoc = await Case.findOne({ caseNumber, employerInitial });

    if (!caseDoc) {
      return new NextResponse("Case not found for given caseNumber and employerInitial", {
        status: 404,
      });
    }

    const filedDate = caseDoc.filedDate;

    // 2. Get all cases for same employerInitial
    const sameEmployerCases = await Case.find({
      employerInitial,
      processingDays: { $ne: null },
    }).lean();

    if (!sameEmployerCases.length) {
      return new NextResponse("No data for this employerInitial", {
        status: 404,
      });
    }

    const processingDaysList = sameEmployerCases.map(
      (c) => c.processingDays
    );

    // 3. Compute stats
    const { median, p25, p75 } = computePercentiles(processingDaysList);

    if (median == null) {
      return new NextResponse("Not enough data to compute estimate", {
        status: 400,
      });
    }

    // 4. prediction = filedDate + median days
    const filed = new Date(filedDate);
    const predictedDecisionDate = new Date(
      filed.getTime() + median * 24 * 60 * 60 * 1000
    );

    const response = {
      input: {
        caseNumber,
        employerInitial,
        filedDate: filed.toISOString().slice(0, 10),
      },
      stats: {
        count: processingDaysList.length,
        median,
        p25,
        p75,
      },
      prediction: {
        predictedDecisionDate: predictedDecisionDate
          .toISOString()
          .slice(0, 10),
        predictedProcessingDays: median,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("POST /api/estimate-by-case error:", error);
    return new NextResponse("Server error", { status: 500 });
  }
}
