import { HistoryWidget } from "../_components";

export default async function HomePage() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center gap-2">
      <p className="text-2xl font-semibold text-white">
        Savings history widget
      </p>
      <HistoryWidget />
    </div>
  );
}
