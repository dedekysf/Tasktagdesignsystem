import { useState } from 'react';
import { Folder, Hash, Activity, Users, HelpCircle, ChevronsLeft, ChevronsRight, ArrowRight } from 'lucide-react';
import imgAvatar from 'figma:asset/75c80f337ad5301b4cfed7b6e8feb92419cf0ab4.png';
import { TaskTagLogoSimple } from './TaskTagLogoSimple';

interface SideNavProps {
  variant?: 'expanded' | 'collapsed';
  size?: 'default';
  className?: string;
  activeItem?: string;
  onNavigate?: (item: string) => void;
}

type MenuItem = {
  id: string;
  label: string;
  icon: typeof Folder;
};

const menuItems: MenuItem[] = [
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'my-tasks', label: 'My Tasks', icon: Hash },
  { id: 'global-activity', label: 'Global Activity', icon: Activity },
  { id: 'contacts', label: 'Contacts', icon: Users },
];

export function SideNav({
  variant = 'expanded',
  size = 'default',
  className = '',
  activeItem = 'projects',
  onNavigate
}: SideNavProps) {
  const [isExpanded, setIsExpanded] = useState(variant === 'expanded');
  const [activeMenuItem, setActiveMenuItem] = useState(activeItem);

  const handleMenuClick = (itemId: string) => {
    setActiveMenuItem(itemId);
    onNavigate?.(itemId);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={className}
      style={{
        backgroundColor: 'var(--grey-02)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-24)',
        padding: 'var(--spacing-24) var(--spacing-16)',
        height: '100%',
        width: isExpanded ? '256px' : '86px',
        transition: 'width 0.3s ease'
      }}
    >
      {/* Header with Logo and Toggle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--spacing-8)'
      }}>
        <div style={{ 
          width: isExpanded ? '80px' : '24px',
          height: isExpanded ? '24px' : '22px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflow: 'hidden'
        }}>
          <div style={{
            width: isExpanded ? '80px' : '24px',
            height: isExpanded ? '24px' : '22px',
            position: 'relative'
          }}>
            <TaskTagLogoSimple isCollapsed={!isExpanded} />
          </div>
        </div>
        <button
          onClick={toggleExpand}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isExpanded ? (
            <ChevronsLeft size={24} style={{ color: 'var(--grey-05)' }} />
          ) : (
            <ChevronsRight size={24} style={{ color: 'var(--grey-05)' }} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        gap: 'var(--spacing-24)'
      }}>
        {/* Main Menu Items */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)'
        }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenuItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-16)',
                  padding: 'var(--spacing-12) var(--spacing-16)',
                  borderRadius: 'var(--radius-8)',
                  border: 'none',
                  backgroundColor: isActive ? 'var(--light-mint)' : 'transparent',
                  color: isActive ? 'var(--secondary-green)' : 'var(--text-primary)',
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  textAlign: 'left',
                  width: '100%',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--grey-03)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <Icon size={24} />
                {isExpanded && (
                  <span style={{ 
                    lineHeight: '16px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-40)'
        }}>
          {/* Explore Card - Only show when expanded */}
          {isExpanded && (
            <div style={{
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-8)',
              padding: 'var(--spacing-16)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'none',
              opacity: 1,
              animation: 'none'
            }}>
              {/* Decorative blobs */}
              <div style={{
                position: 'absolute',
                top: '-24px',
                left: '-24px',
                width: '80px',
                height: '80px',
                opacity: 0.6,
                transition: 'none'
              }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="37" cy="38" r="16" fill="#00D9A5" />
                  <circle cx="45" cy="54" r="16" fill="#18A87D" />
                  <circle cx="50" cy="38" r="16" fill="#00D9A5" />
                  <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.89" />
                </svg>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-30px',
                width: '120px',
                height: '120px',
                opacity: 0.6,
                transition: 'none'
              }}>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="54" cy="56" r="25" fill="#00D9A5" />
                  <circle cx="66" cy="80" r="25" fill="#18A87D" />
                  <circle cx="74" cy="55" r="25" fill="#00D9A5" />
                  <circle cx="60" cy="60" r="60" fill="white" fillOpacity="0.89" />
                </svg>
              </div>

              {/* Content */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-16)',
                alignItems: 'left',
                transition: 'none'
              }}>
                <p style={{
                  fontSize: 'var(--text-h4)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--text-primary)',
                  margin: 0,
                  textAlign: 'left',
                  lineHeight: '24px',
                  transition: 'none'
                }}>
                  Find All Product Guides Here
                </p>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'left',
                    gap: 'var(--spacing-4)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--secondary-green)',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  <span>Explore</span>
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          )}

          {/* Help and Account */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-8)'
          }}>
            {/* Divider */}
            <div style={{
              height: '1px',
              backgroundColor: 'var(--grey-03)',
              width: '100%'
            }} />

            {/* Help */}
            <button
              onClick={() => handleMenuClick('help')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-16)',
                padding: 'var(--spacing-12) var(--spacing-16)',
                borderRadius: 'var(--radius-8)',
                border: 'none',
                backgroundColor: activeMenuItem === 'help' ? 'var(--light-mint)' : 'transparent',
                color: activeMenuItem === 'help' ? 'var(--secondary-green)' : 'var(--text-primary)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-medium)',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                textAlign: 'left',
                width: '100%',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (activeMenuItem !== 'help') {
                  e.currentTarget.style.backgroundColor = 'var(--grey-03)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeMenuItem !== 'help') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <HelpCircle size={24} />
              {isExpanded && <span style={{ lineHeight: '16px' }}>Help</span>}
            </button>

            {/* My Account */}
            <button
              onClick={() => handleMenuClick('my-account')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isExpanded ? 'var(--spacing-8)' : 0,
                padding: isExpanded ? 'var(--spacing-8)' : 'var(--spacing-8) var(--spacing-16)',
                borderRadius: 'var(--radius-8)',
                border: 'none',
                backgroundColor: activeMenuItem === 'my-account' ? 'var(--light-mint)' : 'transparent',
                color: activeMenuItem === 'my-account' ? 'var(--secondary-green)' : 'var(--text-primary)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-medium)',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                textAlign: 'left',
                width: '100%',
                whiteSpace: 'nowrap',
                justifyContent: isExpanded ? 'flex-start' : 'center'
              }}
              onMouseEnter={(e) => {
                if (activeMenuItem !== 'my-account') {
                  e.currentTarget.style.backgroundColor = 'var(--grey-03)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeMenuItem !== 'my-account') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                <img 
                  src={imgAvatar} 
                  alt="My Account" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              {isExpanded && (
                <span style={{ lineHeight: '16px' }}>My Account</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}