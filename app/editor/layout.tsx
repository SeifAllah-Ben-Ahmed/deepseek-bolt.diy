import { EditorProvider } from '@/context/editor-context';
import { WorkspaceLayout } from '@/components/editor/workspace-layout';

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <EditorProvider>
      <WorkspaceLayout>
        {children}
      </WorkspaceLayout>
    </EditorProvider>
  );
}
