import { db } from "~/server/db";
import { HistoryWidget } from "../_components";

export default async function HomePage() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center">
      <div className="text-white">History widget</div>
      <div>
        <HistoryWidget />
      </div>
    </div>
  );
}
