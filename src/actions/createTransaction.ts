"use server";

import CONSTANTS from "~/constants";
import { db } from "~/server/db";
import { transactions } from "~/server/db/schema";

export default async function createTransaction({
  userId,
  categoryId,
  title,
  amount,
  description,
  date,
}: {
  userId: string;
  categoryId: number;
  title: string;
  amount: number;
  description: string;
  date: Date;
}) {
  const success = await db
    .insert(transactions)
    .values({
      userId,
      categoryId,
      title,
      amount,
      description,
      date,
    })
    .returning({ insertedId: transactions.id });
  
  if (success[0]) {
    return {
      response: CONSTANTS.RESPONSE.SUCCESS,
      userId: success[0].insertedId,
    };
  } else {
    return {
      response: CONSTANTS.RESPONSE.FAIL,
    }
  }
}
