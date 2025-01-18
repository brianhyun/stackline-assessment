import { NextResponse } from "next/server";
import mockData from "../../../public/mock_data.json";

export async function GET() {
  return NextResponse.json(mockData);
}
