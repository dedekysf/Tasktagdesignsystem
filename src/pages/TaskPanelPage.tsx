import { useState } from 'react';
import { X, Calendar as CalendarIcon, Flag, Clock, Tag as TagIcon } from 'lucide-react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'sonner@2.0.3';
import { Activity } from './task-panel/Activity';
import { InteractiveChecklist } from './task-panel/InteractiveChecklist';
import { Members } from './task-panel/Members';
import { FilesAndMedia } from './task-panel/FilesAndMedia';

export default function TaskPanelPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2026, 0, 15));
  const [selectedPriority, setSelectedPriority] = useState<'high' | 'medium' | 'low'>('high');

  const formatDate = (date: Date | null) => {
    if (!date) return 'No due date';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return { bg: 'rgba(255, 68, 68, 0.1)', text: 'var(--alert-red)' };
      case 'medium': return { bg: 'rgba(251, 189, 66, 0.1)', text: 'var(--vivid-yellow)' };
      case 'low': return { bg: 'rgba(0, 217, 165, 0.1)', text: 'var(--brand-green)' };
      default: return { bg: 'var(--grey-02)', text: 'var(--text-secondary)' };
    }
  };

  const priorityColor = getPriorityColor(selectedPriority);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <Toaster position="bottom-center" />

        {/* Header */}
        <div
          className="shrink-0 border-b"
          style={{
            backgroundColor: 'var(--white)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="px-6 py-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1
                  style={{
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  Electricity Board Fix and Maintenance
                </h1>
                <p style={{ 
                  fontSize: 'var(--text-label)', 
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)', 
                  marginBottom: '12px' 
                }}>
                  Fix damaged electrical board and perform routine maintenance checks
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 flex-wrap">
                  {/* Due Date */}
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" style={{ color: 'var(--text-secondary)' }} />
                    <span style={{ fontSize: 'var(--text-label)', color: 'var(--text-secondary)' }}>
                      Due: {formatDate(selectedDate)}
                    </span>
                  </div>

                  {/* Priority */}
                  <div className="flex items-center gap-2">
                    <Flag className="size-4" style={{ color: priorityColor.text }} />
                    <span
                      className="px-2 py-0.5 rounded capitalize"
                      style={{
                        fontSize: 'var(--text-caption)',
                        fontWeight: 'var(--font-weight-medium)',
                        backgroundColor: priorityColor.bg,
                        color: priorityColor.text,
                      }}
                    >
                      {selectedPriority} priority
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-2">
                    <TagIcon className="size-4" style={{ color: 'var(--text-secondary)' }} />
                    <div className="flex gap-1.5">
                      <span
                        className="px-2 py-0.5 rounded"
                        style={{
                          fontSize: 'var(--text-caption)',
                          backgroundColor: 'var(--grey-02)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        Maintenance
                      </span>
                      <span
                        className="px-2 py-0.5 rounded"
                        style={{
                          fontSize: 'var(--text-caption)',
                          backgroundColor: 'var(--grey-02)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        Electrical
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content - Scrollable Panel */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[600px] mx-auto p-6 space-y-4">
            {/* Activity Section */}
            <Activity />

            {/* Checklist Section */}
            <InteractiveChecklist />

            {/* Members Section */}
            <Members />

            {/* Files & Media Section */}
            <FilesAndMedia />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}