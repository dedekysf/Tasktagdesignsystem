import { useState } from 'react';
import { ChevronDown, Folder, Hash } from 'lucide-react';
import type { ActivityItem } from './types';

interface ActivityProps {
  activities?: ActivityItem[];
}

function ActivityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3.5C2 2.67157 2.67157 2 3.5 2H16.5C17.3284 2 18 2.67157 18 3.5V16.5C18 17.3284 17.3284 18 16.5 18H3.5C2.67157 18 2 17.3284 2 16.5V3.5ZM3.5 3C3.22386 3 3 3.22386 3 3.5V16.5C3 16.7761 3.22386 17 3.5 17H16.5C16.7761 17 17 16.7761 17 16.5V3.5C17 3.22386 16.7761 3 16.5 3H3.5Z"
        fill="var(--text-secondary)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 7.5C6 7.22386 6.22386 7 6.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H6.5C6.22386 8 6 7.77614 6 7.5Z"
        fill="var(--text-secondary)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10.5C6 10.2239 6.22386 10 6.5 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H6.5C6.22386 11 6 10.7761 6 10.5Z"
        fill="var(--text-secondary)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 13.5C6 13.2239 6.22386 13 6.5 13H9.5C9.77614 13 10 13.2239 10 13.5C10 13.7761 9.77614 14 9.5 14H6.5C6.22386 14 6 13.7761 6 13.5Z"
        fill="var(--text-secondary)"
      />
    </svg>
  );
}

function Avatar({ name, url }: { name: string; url?: string }) {
  if (url) {
    return (
      <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
        <img src={url} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }

  const initials = name.charAt(0).toUpperCase();
  const defaultColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#F7B731', '#5F27CD', '#00D2D3'];
  const bgColor = defaultColors[name.charCodeAt(0) % defaultColors.length];

  return (
    <div 
      className="w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0"
      style={{ 
        backgroundColor: bgColor,
        fontSize: 'var(--text-caption)',
        fontWeight: 'var(--font-weight-semibold)',
      }}
    >
      {initials}
    </div>
  );
}

export function Activity({ activities = [] }: ActivityProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Default activities if none provided
  const defaultActivities: ActivityItem[] = [
    {
      id: '1',
      user: {
        name: 'Melissa Smith',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
      },
      action: 'Added @Melissa Smith as Task Owner',
      timestamp: 'Oct 15, 2025, 10:30 PM',
      tags: [
        { type: 'folder', label: 'Electrical Board Servi...', color: 'var(--secondary-green)' },
        { type: 'hash', label: 'Electricity board fix an...', color: 'var(--black)' }
      ]
    },
    {
      id: '2',
      user: {
        name: 'Melissa Smith',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
      },
      action: 'Created this task',
      timestamp: 'Oct 15, 2025, 10:30 PM',
      tags: [
        { type: 'folder', label: 'Electrical Board Servi...', color: 'var(--secondary-green)' },
        { type: 'hash', label: 'Electricity board fix an...', color: 'var(--black)' }
      ]
    }
  ];

  const displayActivities = activities.length > 0 ? activities : defaultActivities;

  return (
    <div className="flex flex-col items-start overflow-clip rounded-lg shrink-0 w-full">
      {/* Accordion Header */}
      <div 
        className="flex items-center justify-between w-full px-4 py-4 cursor-pointer transition-colors"
        style={{ backgroundColor: isOpen ? 'var(--grey-01)' : 'transparent' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <ActivityIcon />
          <span 
            style={{ 
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
            }}
          >
            Activity
          </span>
        </div>
        
        <div 
          className="w-6 h-6 flex items-center justify-center transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown className="size-5" style={{ color: 'var(--text-secondary)' }} />
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="w-full px-4 pb-4">
          <div className="space-y-4">
            {displayActivities.map((activity, index) => (
              <div key={activity.id} className="flex gap-2">
                {/* Left indicator */}
                <div className="flex flex-col items-center pt-1">
                  <div 
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--secondary-green)' }}
                  />
                  {index < displayActivities.length - 1 && (
                    <div 
                      className="w-0.5 flex-1 mt-1.5"
                      style={{ backgroundColor: 'var(--grey-03)', minHeight: '40px' }}
                    />
                  )}
                </div>

                {/* Right content */}
                <div className="flex-1 pb-2">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar name={activity.user.name} url={activity.user.avatarUrl} />
                    <p 
                      style={{ 
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {activity.user.name}
                    </p>
                  </div>

                  {/* Message */}
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <p 
                      style={{ 
                        fontSize: 'var(--text-label)',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.4',
                      }}
                    >
                      {activity.action}
                    </p>
                    <p 
                      className="shrink-0"
                      style={{ 
                        fontSize: 'var(--text-caption)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {activity.timestamp}
                    </p>
                  </div>

                  {/* Tags */}
                  {activity.tags && activity.tags.length > 0 && (
                    <div 
                      className="p-2 rounded-lg border"
                      style={{ 
                        backgroundColor: 'var(--white)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        {activity.tags.map((tag, tagIndex) => (
                          <div 
                            key={tagIndex}
                            className="flex items-center gap-1 px-1 py-1 rounded"
                            style={{ backgroundColor: tag.color }}
                          >
                            {tag.type === 'folder' ? (
                              <Folder className="size-3.5 text-white" />
                            ) : (
                              <Hash className="size-3.5 text-white" />
                            )}
                            <p 
                              className="truncate"
                              style={{ 
                                fontSize: 'var(--text-label)',
                                fontWeight: 'var(--font-weight-medium)',
                                color: 'var(--white)',
                              }}
                            >
                              {tag.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
