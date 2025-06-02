import { NextResponse } from "next/server";

import handleError from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";

import Account from "../../../../../database/account.model";
import { APIErrorResponse } from "../../../../../types/global";

export async function GET(request: Request) {
  const { providerAccountId } = await request.json();

  try {
    await dbConnect();

    const account = await Account.findOne(providerAccountId);
    if (!account) {
      throw new NotFoundError("Account");
    }
    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
