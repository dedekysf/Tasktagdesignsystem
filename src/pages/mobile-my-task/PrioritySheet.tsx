import { ChevronsUp, ChevronsDown, Equal } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PrioritySheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentPriority: 'high' | 'medium' | 'low';
  onSelectPriority: (priority: 'high' | 'medium' | 'low') => void;
}

export function PrioritySheet({ isOpen, onClose, currentPriority, onSelectPriority }: PrioritySheetProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 250);
  };

  const handleSelect = (priority: 'high' | 'medium' | 'low') => {
    onSelectPriority(priority);
    handleClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 z-40"
        onClick={handleClose}
      />
      
      {/* Bottom Sheet */}
      <div className={`absolute bottom-0 left-0 right-0 bg-card rounded-tl-[24px] rounded-tr-[24px] flex flex-col items-start z-50 ${isClosing ? 'animate-slide-out-to-bottom' : 'animate-slide-in-from-bottom'}`}>
        {/* Pull Up */}
        <div className="flex flex-col items-center pb-2 pt-4 w-full">
          <div className="bg-[#bdbdbd] h-1 rounded-[2.5px] w-14" />
        </div>
        
        {/* Content */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col gap-4 items-center justify-center px-2 py-4 w-full">
            <p className="font-semibold text-foreground">Priority</p>
            
            {/* Options */}
            <div className="flex flex-col items-start w-full">
              {/* High */}
              <button
                onClick={() => handleSelect('high')}
                className="flex h-14 items-center justify-center w-full"
              >
                <div className="flex flex-row items-center justify-center grow h-full min-h-px min-w-px rounded-lg">
                  <div className="flex gap-2 items-center justify-center px-6 py-4 w-full">
                    <div className="flex items-start shrink-0">
                      <ChevronsUp className="w-6 h-6" style={{ color: '#FF4444' }} strokeWidth={2} />
                    </div>
                    <p className="font-medium grow text-left" style={{ color: '#FF4444' }}>
                      High
                    </p>
                  </div>
                </div>
              </button>
              
              {/* Medium */}
              <button
                onClick={() => handleSelect('medium')}
                className="flex h-14 items-center justify-center w-full"
              >
                <div className="flex flex-row items-center justify-center grow h-full min-h-px min-w-px rounded-lg">
                  <div className="flex gap-2 items-center justify-center px-6 py-4 w-full">
                    <div className="flex items-start shrink-0">
                      <Equal className="w-6 h-6" style={{ color: '#E6B566' }} strokeWidth={2} />
                    </div>
                    <p className="font-medium grow text-left" style={{ color: '#E6B566' }}>
                      Medium
                    </p>
                  </div>
                </div>
              </button>
              
              {/* Low */}
              <button
                onClick={() => handleSelect('low')}
                className="flex h-14 items-center justify-center w-full"
              >
                <div className="flex flex-row items-center justify-center grow h-full min-h-px min-w-px rounded-lg">
                  <div className="flex gap-2 items-center justify-center px-6 py-4 w-full">
                    <div className="flex items-start shrink-0">
                      <ChevronsDown className="w-6 h-6" style={{ color: '#138EFF' }} strokeWidth={2} />
                    </div>
                    <p className="font-medium grow text-left" style={{ color: '#138EFF' }}>
                      Low
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Home Bar */}
        <div className="h-6 overflow-clip w-full">
          <div className="absolute bottom-[9px] h-[5px] left-1/2 -translate-x-1/2 rounded-full w-[134px] bg-foreground" />
        </div>
      </div>
    </>
  );
}
