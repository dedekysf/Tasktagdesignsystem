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
    <div className="flex items-center gap-4 px-4 py-2 bg-card border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-2 relative ${
            activeTab === tab.id ? 'text-primary' : 'text-grey-4'
          }`}
          style={{ fontWeight: activeTab === tab.id ? 500 : 400 }}
        >
          <span className="text-sm tracking-[0.28px]">{tab.label}</span>
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
          )}
        </button>
      ))}
    </div>
  );
}
