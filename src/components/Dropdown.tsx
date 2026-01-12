import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export type DropdownOption = {
  value: string;
  label: string;
};

export type DropdownSize = 'sm' | 'md';
export type DropdownVariant = 'default' | 'borderless';

export interface DropdownProps {
  /** Dropdown size: sm or md */
  size?: DropdownSize;
  /** Dropdown variant: default or borderless */
  variant?: DropdownVariant;
  /** Custom className */
  className?: string;
  /** Array of dropdown options */
  options: DropdownOption[];
  /** Currently selected value */
  value?: string;
  /** Placeholder text when no option is selected */
  placeholder?: string;
  /** Callback when an option is selected */
  onChange?: (value: string) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Optional label text */
  label?: string;
  /** Required field (shows asterisk) */
  required?: boolean;
  /** Error message to display */
  errorMessage?: string;
}

export function Dropdown({
  size = 'md',
  variant = 'default',
  className = '',
  options,
  value,
  placeholder = 'Select an option',
  onChange,
  disabled = false,
  label,
  required = false,
  errorMessage
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update internal state when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const selectedOption = options.find(opt => opt.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  // Size configurations - must match TextInput sizes
  const sizeConfig = {
    sm: { 
      padding: 'var(--spacing-4) var(--spacing-8)', 
      fontSize: 'var(--text-label)', 
      iconSize: 18, 
      height: 'var(--size-sm)' // 32px from Foundation
    },
    md: { 
      padding: 'var(--spacing-8) var(--spacing-12)', 
      fontSize: 'var(--text-base)', 
      iconSize: 20, 
      height: 'var(--size-md)' // 40px from Foundation
    }
  };

  const currentSize = sizeConfig[size];

  // Determine if scrolling is needed (more than 10 options)
  const needsScroll = options.length > 10;
  const maxHeight = needsScroll ? `calc(10 * ${currentSize.height})` : 'auto';

  return (
    <div 
      ref={dropdownRef} 
      className={`dropdown-wrapper ${className}`}
      style={{ position: 'relative', width: '100%' }}
    >
      {/* Optional Label */}
      {label && (
        <label
          className="dropdown-label"
          style={{
            display: 'block',
            marginBottom: 'var(--spacing-4)',
            fontSize: 'var(--text-label)',
            fontWeight: 'var(--font-weight-semibold)',
            color: errorMessage ? 'var(--alert-red)' : 'var(--text-primary)'
          }}
        >
          {label}
          {required && <span style={{ color: 'var(--alert-red)' }}>*</span>}
        </label>
      )}

      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className="dropdown-trigger"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: currentSize.padding,
          backgroundColor: disabled ? 'var(--grey-03)' : (isOpen ? 'var(--grey-02)' : 'var(--input-background)'),
          border: variant === 'borderless' 
            ? 'none' 
            : (disabled ? `1px solid var(--grey-04)` : (errorMessage ? `1px solid var(--alert-red)` : `1px solid var(--border)`)),
          borderRadius: 'var(--radius-8)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s ease, border-color 0.2s ease',
          fontSize: currentSize.fontSize,
          fontWeight: 'var(--font-weight-regular)',
          color: disabled ? 'var(--grey-04)' : (selectedOption ? 'var(--text-primary)' : 'var(--grey-05)'),
          minHeight: currentSize.height
        }}
        onMouseEnter={(e) => {
          if (!disabled && !isOpen) {
            e.currentTarget.style.backgroundColor = 'var(--grey-02)';
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !isOpen) {
            e.currentTarget.style.backgroundColor = 'var(--input-background)';
          }
        }}
      >
        <span>{displayText}</span>
        <ChevronDown 
          size={currentSize.iconSize} 
          style={{
            color: 'var(--text-primary)',
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="dropdown-menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + var(--spacing-4))',
            left: 0,
            right: 0,
            backgroundColor: 'var(--card)',
            border: `1px solid var(--border)`,
            borderRadius: 'var(--radius-8)',
            boxShadow: 'var(--elevation-md)',
            zIndex: 1000,
            maxHeight: maxHeight,
            overflowY: needsScroll ? 'auto' : 'visible',
          }}
        >
          {options.map((option) => {
            const isSelected = option.value === selectedValue;
            
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className="dropdown-item"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: currentSize.padding,
                  backgroundColor: isSelected ? 'var(--grey-02)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease, color 0.2s ease',
                  fontSize: currentSize.fontSize,
                  fontWeight: 'var(--font-weight-regular)',
                  color: isSelected ? 'var(--text-secondary)' : 'var(--text-primary)',
                  textAlign: 'left',
                  minHeight: currentSize.height,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--grey-02)';
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div
          className="dropdown-error"
          style={{
            marginTop: 'var(--spacing-4)',
            fontSize: 'var(--text-label)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--alert-red)'
          }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
}