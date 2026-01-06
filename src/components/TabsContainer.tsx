import { ReactNode } from 'react';
import { TabItem } from './TabItem';

interface TabsContainerProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { value: string; label: string }[];
  children: ReactNode;
}

export function TabsContainer({ activeTab, onTabChange, tabs, children }: TabsContainerProps) {
  return (
    <div>
      <div className="flex gap-1 mb-6" style={{ borderBottom: '1px solid var(--grey-03)' }}>
        {tabs.map((tab) => (
          <TabItem
            key={tab.value}
            variant="default"
            label={tab.label}
            size="md"
            isActive={activeTab === tab.value}
            onClick={() => onTabChange(tab.value)}
          />
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}

interface TabPanelProps {
  value: string;
  activeTab: string;
  children: ReactNode;
}

export function TabPanel({ value, activeTab, children }: TabPanelProps) {
  if (value !== activeTab) return null;
  return <div>{children}</div>;
}