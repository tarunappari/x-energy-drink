// app/api/estimate-by-date/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo/mongodb";
import Case from "@/models/Case";

function computePercentiles(daysArray) {
  if (!daysArray.length) {
    return { median: null, p25: null, p75: null };
  }

  const sorted = [...daysArray].sort((a, b) => a - b);
  const n = sorted.length;

  function percentile(p) {
    if (n === 1) return sorted[0];
    const idx = Math.floor(p * (n - 1));
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
    const { employerInitial, filedDate } = body;

    if (!employerInitial || !filedDate) {
      return new NextResponse(
        "employerInitial and filedDate are required",
        { status: 400 }
      );
    }

    const filed = new Date(filedDate);
    if (isNaN(filed.getTime())) {
      return new NextResponse("Invalid filedDate", { status: 400 });
    }

    await connectToDatabase();

    // 1. Get cases for this employerInitial
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

    // 2. Compute stats
    const { median, p25, p75 } = computePercentiles(processingDaysList);

    if (median == null) {
      return new NextResponse("Not enough data to compute estimate", {
        status: 400,
      });
    }

    // 3. prediction = filedDate + median days
    const predictedDecisionDate = new Date(
      filed.getTime() + median * 24 * 60 * 60 * 1000
    );

    const response = {
      input: {
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
    console.error("POST /api/estimate-by-date error:", error);
    return new NextResponse("Server error", { status: 500 });
  }
}
