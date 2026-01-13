import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'sonner@2.0.3';
import TaskPanelWrapper from './task-panel/TaskPanelWrapper';

export default function TaskPanelPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="size-full flex items-center justify-center bg-[#f7f8fa] p-8">
        <TaskPanelWrapper />
      </div>
      <Toaster position="bottom-center" />
    </DndProvider>
  );
}
