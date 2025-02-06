import { AppSidebar } from "~/components/app-sidebar";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  return (
    <div className="max-h-screen min-h-screen w-screen">
      <AppSidebar />
    </div>
  );
}
