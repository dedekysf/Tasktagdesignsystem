import { useState, useRef, useEffect } from 'react';

export type TextareaSize = 'sm' | 'md';

export interface TextareaProps {
  /** Textarea size: sm or md */
  size?: TextareaSize;
  /** Custom className for styling */
  className?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Textarea value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Number of visible rows */
  rows?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Input ID for label association */
  id?: string;
  /** Required field (shows asterisk) */
  required?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Maximum character length */
  maxLength?: number;
}

export function Textarea({
  size = 'md',
  className = '',
  placeholder = 'Enter text',
  value: controlledValue,
  onChange,
  rows = 1,
  disabled = false,
  label,
  id,
  required = false,
  errorMessage,
  maxLength = 1000,
}: TextareaProps) {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  // Auto-resize textarea
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate new height based on content, with max of 4 rows
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
    const maxHeight = lineHeight * 4;
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    
    textarea.style.height = `${newHeight}px`;
    
    // Enable scrolling if content exceeds 4 rows
    textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
  };

  useEffect(() => {
    autoResize();
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
    autoResize();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Allow Shift+Enter for new line, but Enter alone does nothing
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
    }
  };

  // Size configurations
  const sizeConfig = {
    sm: { padding: 'var(--spacing-8) var(--spacing-12)', fontSize: 'var(--text-label)' },
    md: { padding: 'var(--spacing-8) var(--spacing-12)', fontSize: 'var(--text-base)' },
  };

  const currentSize = sizeConfig[size];

  const borderColor = errorMessage
    ? 'var(--alert-red)'
    : isFocused 
      ? 'var(--black)' 
      : 'var(--border)';

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          style={{
            display: 'block',
            fontSize: 'var(--text-label)',
            fontWeight: 'var(--font-weight-medium)',
            color: errorMessage ? 'var(--alert-red)' : 'var(--text-primary)',
            marginBottom: 'var(--spacing-8)'
          }}
        >
          {label}
          {required && <span style={{ color: 'var(--alert-red)' }}>*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          ref={textareaRef}
          rows={rows}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          id={id}
          className="w-full resize-none bg-transparent outline-none transition-all"
          style={{
            border: `1px solid ${disabled ? 'var(--grey-04)' : borderColor}`,
            borderRadius: 'var(--radius-8)',
            backgroundColor: disabled ? 'var(--grey-03)' : 'var(--input-background)',
            padding: currentSize.padding,
            paddingBottom: maxLength ? 'var(--spacing-32)' : currentSize.padding.split(' ')[0],
            cursor: disabled ? 'not-allowed' : 'text',
            fontSize: currentSize.fontSize,
            fontWeight: 'var(--font-weight-regular)',
            color: disabled ? 'var(--grey-04)' : 'var(--text-primary)',
          }}
        />
        {maxLength && (
          <div 
            style={{
              position: 'absolute',
              bottom: 'var(--spacing-12)',
              right: 'var(--spacing-8)',
              fontSize: 'var(--text-caption)',
              color: 'var(--grey-05)'
            }}
          >
            {maxLength - value.length}
          </div>
        )}
      </div>
      {errorMessage && (
        <div
          style={{
            fontSize: 'var(--text-label)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--alert-red)',
            marginTop: 'var(--spacing-4)'
          }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
}