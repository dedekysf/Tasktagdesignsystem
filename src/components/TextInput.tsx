import { useState } from 'react';
import { LucideIcon, X } from 'lucide-react';

export type TextInputSize = 'sm' | 'md';

export interface TextInputProps {
  /** Input size: sm or md */
  size?: TextInputSize;
  /** Custom className for styling */
  className?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input value (controlled) */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number';
  /** Input ID for label association */
  id?: string;
  /** Label text */
  label?: string;
  /** Error message to display */
  errorMessage?: string;
  /** Maximum character length */
  maxLength?: number;
  /** Show character counter (only works when no icon) */
  showCounter?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Required field (shows asterisk) */
  required?: boolean;
  /** Icon component from lucide-react */
  icon?: LucideIcon;
  /** Show clear button (X icon) when input has value */
  showClearButton?: boolean;
}

export function TextInput({
  size = 'md',
  className = '',
  placeholder = 'Enter text',
  value: controlledValue,
  onChange,
  type = 'text',
  id,
  label,
  errorMessage,
  maxLength = 250,
  disabled = false,
  required = false,
  icon: Icon,
  showCounter = false,
  showClearButton = true
}: TextInputProps) {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const isError = className.includes('input-error') || !!errorMessage;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleClear = () => {
    if (onChange) {
      onChange('');
    } else {
      setInternalValue('');
    }
  };

  // Size configurations
  const sizeConfig = {
    sm: { 
      padding: 'var(--spacing-8) var(--spacing-12)', 
      fontSize: 'var(--text-label)', 
      height: 'var(--size-sm)',
      iconSize: 16
    },
    md: { 
      padding: 'var(--spacing-8) var(--spacing-12)', 
      fontSize: 'var(--text-base)', 
      height: 'var(--size-md)',
      iconSize: 18
    }
  };

  const currentSize = sizeConfig[size];

  const borderColor = isError
    ? 'var(--alert-red)'
    : isFocused 
      ? 'var(--black)' 
      : 'var(--border)';

  // Show clear button only when there's an icon, input has value, and not disabled
  const shouldShowClearButton = Icon && value.length > 0 && !disabled && showClearButton;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          style={{
            display: 'block',
            fontSize: 'var(--text-label)',
            fontWeight: 'var(--font-weight-medium)',
            color: isError ? 'var(--alert-red)' : 'var(--text-primary)',
            marginBottom: 'var(--spacing-8)'
          }}
        >
          {label}
          {required && <span style={{ color: 'var(--alert-red)' }}>*</span>}
        </label>
      )}
      <div
        className="relative flex items-center transition-all"
        style={{
          border: `1px solid ${disabled ? 'var(--grey-04)' : borderColor}`,
          borderRadius: 'var(--radius-8)',
          backgroundColor: disabled ? 'var(--grey-03)' : 'var(--input-background)',
          minHeight: currentSize.height
        }}
      >
        {/* Icon - Left aligned */}
        {Icon && (
          <div 
            style={{
              paddingLeft: 'var(--spacing-12)',
              display: 'flex',
              alignItems: 'center',
              color: disabled ? 'var(--grey-04)' : 'var(--grey-05)'
            }}
          >
            <Icon size={currentSize.iconSize} />
          </div>
        )}

        {/* Input Field */}
        <input
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent outline-none"
          style={{
            padding: currentSize.padding,
            paddingLeft: Icon ? 'var(--spacing-8)' : currentSize.padding.split(' ')[1],
            paddingRight: Icon 
              ? (shouldShowClearButton ? 'var(--spacing-36)' : currentSize.padding.split(' ')[1])
              : (maxLength ? 'var(--spacing-48)' : currentSize.padding.split(' ')[1]),
            cursor: disabled ? 'not-allowed' : 'text',
            fontSize: currentSize.fontSize,
            fontWeight: 'var(--font-weight-regular)',
            color: disabled ? 'var(--grey-04)' : 'var(--text-primary)',
          }}
          id={id}
          type={type}
        />

        {/* Clear Button - only shown when icon exists and input has value */}
        {shouldShowClearButton && (
          <button
            type="button"
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: 'var(--spacing-12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              color: 'var(--grey-05)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--grey-05)';
            }}
          >
            <X size={currentSize.iconSize} />
          </button>
        )}

        {/* Character Counter - only shown when NO icon */}
        {!Icon && maxLength && showCounter && (
          <div 
            style={{
              position: 'absolute',
              bottom: 'var(--spacing-8)',
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