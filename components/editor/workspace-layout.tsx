'use client';

import { Tabs } from '@/components/ui/tabs';
import { Drawer } from '@/components/ui/drawer';
import { DndContext } from '@dnd-kit/core';

export function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <DndContext>
      <div className="grid grid-cols-[300px_1fr_400px] h-screen">
        <Drawer direction="left" open={true}>
          <ComponentPalette />
        </Drawer>
        
        <main className="bg-canvas-background">
          <CanvasArea />
        </main>

        <div className="border-l">
          <PropertyInspector />
        </div>
      </div>
    </DndContext>
  );
}
