import { AddTransactionButton } from "../_components";
import { AddTransaction } from "../_components/Widgets/AddTransaction";
import { db } from "~/server/db";
import { categories } from "~/server/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export default async function HomePage() {
  const { userId } = auth();

  const userCategories = await db
    .select({
      id: categories.id,
      title: categories.title
    })
    .from(categories)
    .where(eq(categories.userId, userId!));


  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center gap-2 ">
      <p className="text-2xl font-semibold text-white">Transaction modal</p>
      <AddTransaction userId={userId!} categories={userCategories} />
      <AddTransactionButton />
    </div>
  );
}
