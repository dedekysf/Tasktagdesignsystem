import { TaskApp } from './TaskApp';
import { Toaster } from 'sonner@2.0.3';

export function MobileFrame() {
  return (
    <div 
      className="relative bg-white overflow-hidden shadow-2xl"
      style={{
        width: '375px',
        height: 'calc(100vh - 4vh)',
        borderRadius: '20px',
      }}
    >
      <TaskApp onViewChange={() => {}} />
      <Toaster 
        position="bottom-center"
        offset="28px"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: 'sonner-toast',
          },
        }}
      />
    </div>
  );
}
