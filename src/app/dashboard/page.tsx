import { db } from "~/server/db";
import { HistoryWidget } from "../_components";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "~/components/ui/resizable";

export default async function HomePage() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center">
      <ResizablePanelGroup
      direction="horizontal"
      className="max-w-screen max-h-screen rounded-lg border "
    >
      <ResizablePanel defaultSize={200}>
        <div className="flexitems-center justify-center p-2">
          <span className="font-semibold"><HistoryWidget/></span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex items-center justify-center p-6">
              <span className="font-semibold"><HistoryWidget/></span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex items-center justify-center p-6">
              <span className="font-semibold"><HistoryWidget/></span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
  );
}
