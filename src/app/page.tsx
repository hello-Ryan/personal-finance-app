import { db } from "~/server/db";
import { TopNav } from "./_components";
import { transactions } from "~/server/db/schema";
import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  const {userId} = auth()
  console.log(userId)
  return (
    <main>
      <TopNav/>
      <div>
        <p className="text-white">{}</p>
      </div>
      
    </main>
  );
}
