import { useState, useEffect } from 'react';
import { Link, MessageSquare, Files, Forward, Trash2 } from 'lucide-react';
import { HomeBar } from './HomeBar';

interface MoreActionsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onAction: (action: 'copy-link' | 'start-chat' | 'duplicate' | 'forward' | 'delete') => void;
}

export function MoreActionsSheet({ isOpen, onClose, onAction }: MoreActionsSheetProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset closing state when opening
      setIsClosing(false);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  const handleAction = (action: 'copy-link' | 'start-chat' | 'duplicate' | 'forward' | 'delete') => {
    onAction(action);
    handleClose();
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      {/* Backdrop - inside mobile frame */}
      <div 
        className={`absolute inset-0 bg-black/40 z-40 transition-opacity duration-200 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Bottom Sheet */}
      <div 
        className={`absolute inset-x-0 bottom-0 z-50 bg-white rounded-t-[24px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] transition-transform duration-200 ${
          isClosing ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
            {/* Pull Up Indicator */}
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center pt-4 pb-2 px-2 w-full">
                <div className="w-[56.25px] h-1 bg-[#bdbdbd] rounded-[2.5px]" />
              </div>
            </div>

            {/* Actions List */}
            <div className="flex flex-col px-6 pb-4">
              {/* Copy Link to Invite */}
              <div className="flex items-center gap-2 py-4 w-full">
                <Link className="w-6 h-6 shrink-0 text-foreground" strokeWidth={2} />
                <span className="text-foreground">Copy Link to Invite</span>
              </div>

              {/* Start a Chat */}
              <div className="flex items-center gap-2 py-4 w-full">
                <MessageSquare className="w-6 h-6 shrink-0 text-foreground" strokeWidth={2} />
                <span className="text-foreground">Start a Chat</span>
              </div>

              {/* Duplicate */}
              <div className="flex items-center gap-2 py-4 w-full">
                <Files className="w-6 h-6 shrink-0 text-foreground" strokeWidth={2} />
                <span className="text-foreground">Duplicate</span>
              </div>

              {/* Forward */}
              <div className="flex items-center gap-2 py-4 w-full">
                <Forward className="w-6 h-6 shrink-0 text-foreground" strokeWidth={2} />
                <span className="text-foreground">Forward</span>
              </div>

              {/* Divider */}
              <div className="h-2 w-full my-0">
                <div className="w-full border-t border-border" style={{ marginTop: '3.5px' }} />
              </div>

              {/* Delete */}
              <div className="flex items-center gap-2 py-4 w-full">
                <Trash2 className="w-6 h-6 shrink-0" style={{ color: 'rgba(255, 68, 68, 1.00)' }} strokeWidth={2} />
                <span style={{ color: 'rgba(255, 68, 68, 1.00)' }}>Delete</span>
              </div>
            </div>

        {/* Home Bar */}
        <HomeBar />
      </div>
    </>
  );
}
