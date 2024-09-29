import { db } from "~/server/db";
import { TopNav } from "./_components";

export default async function HomePage() {
  const transactions = await db.query.transactions.findFirst()

  return (
    <main>
      <TopNav/>
      <div>
        <p className="text-white">{transactions?.name}</p>
      </div>
      
    </main>
  );
}
