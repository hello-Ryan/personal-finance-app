import { HistoryWidget } from "../_components";
import { AddTransaction } from "../_components/Widgets/AddTransaction";

export default async function HomePage() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center gap-2">
      <p className="text-2xl font-semibold text-white">
        Transaction modal
      </p>
      <AddTransaction />
    </div>
  );
}
