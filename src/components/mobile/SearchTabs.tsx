interface SearchTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function SearchTabs({ activeTab, onTabChange }: SearchTabsProps) {
  const tabs = [
    { id: 'chat', label: 'Chat' },
    { id: 'projects', label: 'Projects' },
    { id: 'tasks', label: 'Tasks' },
    { id: 'files', label: 'Files' },
  ];

  return (
    <div className="flex items-center gap-6 px-4 py-2 bg-background border-b border-border overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-3 relative whitespace-nowrap transition-colors ${
            activeTab === tab.id ? 'text-primary font-medium' : 'text-muted-foreground'
          }`}
        >
          <span className="text-sm">{tab.label}</span>
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
          )}
        </button>
      ))}
    </div>
  );
}
