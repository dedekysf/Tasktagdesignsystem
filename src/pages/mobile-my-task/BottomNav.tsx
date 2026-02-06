import { MessageSquare, Folder, Hash, Activity } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'chats', label: 'Chats', icon: MessageSquare },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'tasks', label: 'My Tasks', icon: Hash },
    { id: 'activity', label: 'Activity', icon: Activity },
  ];

  return (
    <div className="bg-card border-t border-border relative">
      <div className="grid grid-cols-4 h-20">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center gap-1 pt-2"
            >
              <Icon 
                className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-foreground'}`}
                strokeWidth={2}
              />
              <span 
                className={`text-xs caption ${isActive ? 'text-primary' : 'text-foreground'}`}
                style={{ fontWeight: 500 }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
