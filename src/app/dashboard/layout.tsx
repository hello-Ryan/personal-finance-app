import "~/styles/globals.css";

import { type Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Finances simplified - Dashboard",
  description: "Simplify your finances",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider defaultOpen={true}>
      <main>
          <SidebarTrigger />
          {children}
      </main>
    </SidebarProvider>
  );
}
