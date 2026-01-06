import { useState } from 'react';
import { SidebarDropdown } from './SidebarDropdown';
import { SidebarMenuItem } from './SidebarMenuItem';
import TaskTagLogo from '../imports/TaskTagLogo';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ activeSection, onSectionChange, isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>(['foundation']);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [sectionId]
    );
  };

  const handleMenuItemClick = (section: string) => {
    onSectionChange(section);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 1080) {
      setIsSidebarOpen(false);
    }
  };

  const foundationItems = [
    { id: 'colors', label: 'Colors' },
    { id: 'typography-web', label: 'Typography on web' },
    { id: 'typography-mobile', label: 'Typography on mobile' },
    { id: 'radius', label: 'Border Radius' },
    { id: 'elevation', label: 'Elevation' },
    { id: 'spacing', label: 'Space' },
    { id: 'sizes', label: 'Sizes' },
    { id: 'logos', label: 'Logos' },
    { id: 'icons', label: 'Icons' }
  ];

  const componentItems = [
    { id: 'avatars', label: 'Avatars' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'cards', label: 'Cards' },
    { id: 'checkbox', label: 'Checkbox' },
    { id: 'datepicker', label: 'Datepicker' },
    { id: 'dropdown', label: 'Dropdown' },
    { id: 'modal', label: 'Modal' },
    { id: 'radio-button', label: 'Radio Button' },
    { id: 'tabs-item', label: 'Tabs' },
    { id: 'text-input', label: 'Text Input' },
    { id: 'textarea', label: 'Text Area' },
    { id: 'tooltip', label: 'Tooltip' }
  ];

  const pagesItems = [
    { id: 'my-task', label: 'My Task' }
  ];

  const isSectionActive = (sectionId: string, items: Array<{ id: string }>) => {
    return items.some(item => item.id === activeSection);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-overlay z-30 max-[1080px]:block hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`w-64 bg-background flex flex-col overflow-y-auto transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } min-[1080px]:translate-x-0 fixed left-0 top-16 bottom-0 z-40 max-[1080px]:block min-[1080px]:relative min-[1080px]:top-0 min-[1080px]:h-screen min-[1080px]:sticky`}
        style={{ borderRight: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
      >
        {/* Logo - Only show on desktop (1080px+) */}
        <div className="p-6 hidden min-[1080px]:block">
          <div className="w-[135px] h-[40px]">
            <TaskTagLogo />
          </div>
        </div>
        
        <nav className="flex-1 px-3 pb-6 pt-6 min-[1080px]:pt-0">
          <ul className="space-y-2">
            <SidebarDropdown
              label="Foundation"
              isOpen={openSections.includes('foundation')}
              isActive={isSectionActive('foundation', foundationItems)}
              onToggle={() => toggleSection('foundation')}
            >
              {foundationItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  label={item.label}
                  isActive={activeSection === item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                />
              ))}
            </SidebarDropdown>

            <SidebarDropdown
              label="Components"
              isOpen={openSections.includes('components')}
              isActive={isSectionActive('components', componentItems)}
              onToggle={() => toggleSection('components')}
            >
              {componentItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  label={item.label}
                  isActive={activeSection === item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                />
              ))}
            </SidebarDropdown>

            <SidebarDropdown
              label="Pages"
              isOpen={openSections.includes('pages')}
              isActive={isSectionActive('pages', pagesItems)}
              onToggle={() => toggleSection('pages')}
            >
              {pagesItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  label={item.label}
                  isActive={activeSection === item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                />
              ))}
            </SidebarDropdown>
          </ul>
        </nav>
      </aside>
    </>
  );
}