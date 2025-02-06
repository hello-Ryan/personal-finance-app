import { AppSidebar } from "~/components/app-sidebar";

export const dynamic = "force-dynamic";

export default async function Dashboard() {

  return (<div className="w-screen min-h-screen max-h-screen">
  <AppSidebar />
  </div>
  
)
}
