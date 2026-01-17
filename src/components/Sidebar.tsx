import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarDropdown } from './SidebarDropdown';
import { SidebarMenuItem } from './SidebarMenuItem';
import TaskTagLogo from '../imports/TaskTagLogo';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(['foundation']);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [sectionId]
    );
  };

  const handleMenuItemClick = () => {
    // Close sidebar on mobile after selection
    if (window.innerWidth < 1080) {
      setIsSidebarOpen(false);
    }
  };

  const foundationItems = [
    { id: 'colors', label: 'Colors', path: '/colors' },
    { id: 'typography-web', label: 'Typography on web', path: '/typography-web' },
    { id: 'typography-mobile', label: 'Typography on mobile', path: '/typography-mobile' },
    { id: 'radius', label: 'Border Radius', path: '/radius' },
    { id: 'elevation', label: 'Elevation', path: '/elevation' },
    { id: 'spacing', label: 'Space', path: '/spacing' },
    { id: 'sizes', label: 'Sizes', path: '/sizes' },
    { id: 'logos', label: 'Logos', path: '/logos' },
    { id: 'icons', label: 'Icons', path: '/icons' },
    { id: 'images', label: 'Images', path: '/images' }
  ];

  const componentItems = [
    { id: 'alert', label: 'Alert', path: '/alert' },
    { id: 'assignee-modal', label: 'Assignee Modal', path: '/assignee-modal' },
    { id: 'assigned-members-button', label: 'Assigned Members Button', path: '/assigned-members-button' },
    { id: 'avatars', label: 'Avatars', path: '/avatars' },
    { id: 'buttons', label: 'Buttons', path: '/buttons' },
    { id: 'calendar', label: 'Calendar', path: '/calendar' },
    { id: 'cards', label: 'Cards', path: '/cards' },
    { id: 'checkbox', label: 'Checkbox', path: '/checkbox' },
    { id: 'checklist-item', label: 'Checklist Item', path: '/checklist-item' },
    { id: 'date-range-calendar', label: 'Date Range Calendar', path: '/date-range-calendar' },
    { id: 'datepicker', label: 'Datepicker', path: '/datepicker' },
    { id: 'discard-changes-modal', label: 'Discard Changes Modal', path: '/discard-changes-modal' },
    { id: 'dropdown', label: 'Dropdown', path: '/dropdown' },
    { id: 'member-row', label: 'Member Row', path: '/member-row' },
    { id: 'modal', label: 'Modal', path: '/modal' },
    { id: 'priority-dropdown', label: 'Priority Dropdown', path: '/priority-dropdown' },
    { id: 'project-select-modal', label: 'Project Select Modal', path: '/project-select-modal' },
    { id: 'radio-button', label: 'Radio Button', path: '/radio-button' },
    { id: 'side-nav', label: 'Side Nav', path: '/side-nav' },
    { id: 'tabs-item', label: 'Tabs', path: '/tabs-item' },
    { id: 'tag', label: 'Tag', path: '/tag' },
    { id: 'task-item', label: 'Task Item', path: '/task-item' },
    { id: 'task-section', label: 'Task Section', path: '/task-section' },
    { id: 'text-input', label: 'Text Input', path: '/text-input' },
    { id: 'textarea', label: 'Text Area', path: '/textarea' },
    { id: 'toast', label: 'Toast', path: '/toast' },
    { id: 'toggle', label: 'Toggle', path: '/toggle' },
    { id: 'tooltip', label: 'Tooltip', path: '/tooltip' }
  ];

  const pagesItems = [
    { id: 'my-task', label: 'My Task', path: '/my-task' },
    { id: 'task-panel', label: 'Task Panel', path: '/task-panel' },
    { id: 'project-details', label: 'Project Details', path: '/project-details' },
    { id: 'paywall-cta', label: 'Paywall CTA', path: '/paywall-cta' },
    { id: 'payment', label: 'Payment', path: '/payment' },
    { id: 'team-detail', label: 'Team Detail', path: '/team-detail' }
  ];

  const isSectionActive = (sectionId: string, items: Array<{ id: string, path: string }>) => {
    return items.some(item => location.pathname === item.path);
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
                  to={item.path}
                  onClick={handleMenuItemClick}
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
                  to={item.path}
                  onClick={handleMenuItemClick}
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
                  to={item.path}
                  onClick={handleMenuItemClick}
                />
              ))}
            </SidebarDropdown>
          </ul>
        </nav>
      </aside>
    </>
  );
}