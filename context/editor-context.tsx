import { createStore } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface EditorState {
  elements: EmailElement[];
  selectedElement: string | null;
  viewportSize: 'mobile' | 'desktop' | 'responsive';
  // ... other state properties
}

interface EditorActions {
  addElement: (element: EmailElement) => void;
  updateElement: (id: string, updates: Partial<EmailElement>) => void;
  // ... other actions
}

export const useEditorStore = createStore<EditorState & EditorActions>()(
  devtools(
    immer((set) => ({
      elements: [],
      selectedElement: null,
      viewportSize: 'responsive',
      addElement: (element) => set((state) => { state.elements.push(element) }),
      updateElement: (id, updates) => set((state) => {
        const index = state.elements.findIndex(el => el.id === id);
        if (index !== -1) state.elements[index] = {...state.elements[index], ...updates};
      }),
    }))
  )
);
