import "~/styles/globals.css";
import { cookies } from "next/headers"

import { type Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";

export const metadata: Metadata = {
  title: "Finances simplified - Dashboard",
  description: "Simplify your finances",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <main>
          <SidebarTrigger />
          {children}
      </main>
    </SidebarProvider>
  );
}
