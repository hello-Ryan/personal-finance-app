import { db } from "~/server/db";
import { TopNav } from "./_components";
import { transactions } from "~/server/db/schema";
import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  return (
    <main>
      <TopNav/>
    </main>
  );
}
