import { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ConfirmationModalProps {
  open: boolean;
  title: string;
  content: ReactNode;
  confirmText: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function ConfirmationModal({ open, title, content, confirmText, onClose, onConfirm }: ConfirmationModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-foreground" style={{ fontSize: '18px', fontWeight: 600 }}>{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        
        <div className="px-6 py-4">
          {content}
        </div>
        
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors cursor-pointer caption text-foreground"
            style={{ fontWeight: 600 }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-destructive-foreground text-white rounded-lg hover:opacity-90 transition-opacity cursor-pointer caption"
            style={{ fontWeight: 600 }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
