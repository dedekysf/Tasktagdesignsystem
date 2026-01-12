import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-spiw4faft4';

export type CheckboxVariant = 'circular' | 'rectangular';

interface CheckboxProps {
  /** Checkbox variant: circular or rectangular */
  variant?: CheckboxVariant;
  /** Custom className for additional styling */
  className?: string;
  /** Checked state */
  checked?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Label text */
  label?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Input ID */
  id?: string;
}

export function Checkbox({ 
  variant = 'circular',
  className = '',
  checked = false, 
  onChange, 
  label, 
  disabled = false, 
  id 
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Sync internal state with prop changes
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    if (disabled) return;
    
    setIsAnimating(true);
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
    
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="relative inline-flex items-center justify-center">
        <button
          type="button"
          role="checkbox"
          aria-checked={isChecked}
          disabled={disabled}
          id={id}
          onClick={handleChange}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative flex items-center justify-center transition-all duration-200 ${
            isAnimating ? 'scale-90' : 'scale-100'
          } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          style={{
            width: '20px',
            height: '20px'
          }}
        >
          {isChecked ? (
            // Checked state - using imported Select component design
            <div className="relative size-full">
              <div 
                className="absolute inset-0 transition-all duration-200" 
                style={{ 
                  backgroundColor: disabled ? 'var(--grey-04)' : 'var(--secondary-green)',
                  borderRadius: variant === 'circular' ? 'var(--radius-16)' : 'var(--radius-4)',
                  border: 'none'
                }}
              />
              <div className="absolute bottom-[27.57%] left-1/4 right-[18.43%] top-[30%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.314 8.485">
                  <path d={svgPaths.p285bf500} fill={disabled ? 'var(--white)' : 'var(--white)'} />
                </svg>
              </div>
            </div>
          ) : (
            // Unchecked state
            <div className="relative size-full">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <rect 
                  fill={disabled ? 'var(--grey-03)' : 'var(--white)'} 
                  height="18" 
                  rx={variant === 'circular' ? 9 : 2} 
                  stroke={disabled ? 'var(--grey-04)' : 'var(--grey-04)'} 
                  strokeWidth="2" 
                  width="18" 
                  x="1" 
                  y="1" 
                  className="transition-all duration-200"
                />
              </svg>
              {/* Show checkmark on hover */}
              {isHovered && !disabled && (
                <div className="absolute bottom-[27.57%] left-1/4 right-[18.43%] top-[30%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.314 8.485">
                    <path d={svgPaths.p285bf500} fill="var(--grey-04)" />
                  </svg>
                </div>
              )}
            </div>
          )}
        </button>
      </div>
      
      {label && (
        <label
          htmlFor={id}
          onClick={handleChange}
          className={`text-web-secondary-body ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          style={{ color: disabled ? 'var(--grey-04)' : 'var(--text-primary)' }}
        >
          {label}
        </label>
      )}
    </div>
  );
}