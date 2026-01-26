import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Trash2 } from 'lucide-react';

type MemberRole = 'Owner' | 'Admin' | 'Member';

interface RoleDropdownProps {
  role: MemberRole;
  onChange: (newRole: MemberRole) => void;
  onRemove?: () => void;
  disabled?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export function RoleDropdown({ role, onChange, onRemove, disabled, onOpenChange }: RoleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  const handleRoleClick = (newRole: MemberRole) => {
    onChange(newRole);
    setIsOpen(false);
  };

  // Size config matching main Dropdown component
  const sizeConfig = {
    padding: 'var(--spacing-4) var(--spacing-8)',
    fontSize: 'var(--text-label)',
    iconSize: 18,
    height: 'var(--size-sm)' // 32px
  };

  useEffect(() => {
    const updatePosition = () => {
      const currentRef = triggerRef.current;
      if (currentRef && isOpen) {
        const rect = currentRef.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 4,
          left: rect.left,
          width: rect.width
        });
      }
    };

    updatePosition();
    
    if (isOpen) {
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
    }
    
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef} style={{ width: '100%' }}>
      {/* Trigger Button - matching main Dropdown borderless variant */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="dropdown-trigger"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: sizeConfig.padding,
          backgroundColor: disabled ? 'var(--grey-03)' : (isOpen ? 'var(--grey-02)' : 'transparent'),
          border: 'none',
          borderRadius: 'var(--radius-8)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s ease',
          fontSize: sizeConfig.fontSize,
          fontWeight: 'var(--font-weight-regular)',
          color: disabled ? 'var(--grey-04)' : 'var(--text-primary)',
          minHeight: sizeConfig.height
        }}
        onMouseEnter={(e) => {
          if (!disabled && !isOpen) {
            e.currentTarget.style.backgroundColor = 'var(--grey-02)';
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !isOpen) {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        ref={triggerRef}
      >
        <span>{role}</span>
        {!disabled && (
          <ChevronDown 
            size={sizeConfig.iconSize}
            style={{
              color: 'var(--text-primary)',
              transition: 'transform 0.2s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
        )}
      </button>
      
      {/* Dropdown Menu - matching main Dropdown style */}
      {isOpen && !disabled && (
        createPortal(
          <div
            className="dropdown-menu"
            style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
              right: 'auto',
              backgroundColor: 'var(--card)',
              border: `1px solid var(--border)`,
              borderRadius: 'var(--radius-8)',
              boxShadow: 'var(--elevation-md)',
              zIndex: 1000,
              width: position.width
            }}
            ref={menuRef}
          >
            {/* Role Options */}
            <div className="py-1">
              {(['Admin', 'Member'] as const).map((r) => {
                const isSelected = role === r;
                
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => handleRoleClick(r)}
                    className="dropdown-item"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: sizeConfig.padding,
                      backgroundColor: isSelected ? 'var(--grey-02)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease, color 0.2s ease',
                      fontSize: sizeConfig.fontSize,
                      fontWeight: 'var(--font-weight-regular)',
                      color: isSelected ? 'var(--text-secondary)' : 'var(--text-primary)',
                      textAlign: 'left',
                      minHeight: sizeConfig.height,
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
                    <span>{r}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Remove Action - custom addition */}
            {onRemove && (
              <>
                <div style={{ borderTop: `1px solid var(--border)` }} />
                <button
                  type="button"
                  onClick={() => {
                    onRemove();
                    setIsOpen(false);
                  }}
                  className="dropdown-item"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-8)',
                    padding: sizeConfig.padding,
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    fontSize: sizeConfig.fontSize,
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--alert-red)',
                    textAlign: 'left',
                    minHeight: sizeConfig.height,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--destructive-background)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span>Remove</span>
                </button>
              </>
            )}
          </div>,
          document.body
        )
      )}
    </div>
  );
}