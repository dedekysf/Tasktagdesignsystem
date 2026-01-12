import { useState, useEffect } from "react";
import { toast } from "sonner@2.0.3";
import { Toast } from "../../../components/Toast";

interface TaskCheckboxProps {
  onComplete?: () => void;
  completed?: boolean;
  triggerAnimation?: boolean;
  onAnimationComplete?: () => void;
}

export function TaskCheckbox({ onComplete, completed = false, triggerAnimation, onAnimationComplete }: TaskCheckboxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCheckDuringAnimation, setShowCheckDuringAnimation] = useState(false);

  // Shared animation logic
  const playAnimation = (shouldCallComplete: boolean = true) => {
    setIsAnimating(true);
    
    // Show check icon during animation if marking as complete
    if (!completed) {
      setShowCheckDuringAnimation(true);
    }
    
    // Show toast notification
    if (completed) {
      toast.custom(() => (
        <Toast 
          variant="title-only" 
          type="error" 
          title="Task Marked as Incompleted"
          duration={3000}
        />
      ), {
        duration: 3000,
        position: 'bottom-center',
      });
    } else {
      toast.custom(() => (
        <Toast 
          variant="title-only" 
          type="success" 
          title="Task Completed"
          duration={3000}
        />
      ), {
        duration: 3000,
        position: 'bottom-center',
      });
    }
    
    // Complete the task after animation starts
    setTimeout(() => {
      if (shouldCallComplete && onComplete) {
        onComplete();
      }
      setIsAnimating(false);
      setShowCheckDuringAnimation(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 300);
  };

  // Handle external animation trigger (from context menu)
  useEffect(() => {
    if (triggerAnimation) {
      playAnimation(false); // Don't call onComplete here, it will be called by TaskItem
    }
  }, [triggerAnimation]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (onComplete) {
      playAnimation(true); // Call onComplete after animation
    }
  };

  // Determine visual state
  const shouldShowAsCompleted = completed || showCheckDuringAnimation;
  
  return (
    <div 
      className={`size-5 rounded-full border-2 relative flex items-center justify-center transition-all duration-300 ${
        shouldShowAsCompleted 
          ? 'bg-[var(--secondary-green)] border-[var(--secondary-green)] cursor-pointer group' 
          : 'border-[#BDBDBD] bg-white cursor-pointer group'
      } ${
        isAnimating ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {shouldShowAsCompleted ? (
        <svg className="size-3" fill="none" viewBox="0 0 12 12">
          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        isHovered && (
          <svg className="size-3" fill="none" viewBox="0 0 12 12">
            <path d="M10 3L4.5 8.5L2 6" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )
      )}
    </div>
  );
}