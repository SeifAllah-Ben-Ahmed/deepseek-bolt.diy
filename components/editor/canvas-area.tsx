'use client';

import { useDroppable } from '@dnd-kit/core';
import { EmailElement } from './email-element';

export function CanvasArea() {
  const { setNodeRef } = useDroppable({ id: 'canvas' });
  const elements = useEditorStore((state) => state.elements);

  return (
    <div ref={setNodeRef} className="grid grid-cols-12 gap-4 p-4">
      {elements.map((element) => (
        <EmailElement key={element.id} element={element} />
      ))}
    </div>
  );
}
