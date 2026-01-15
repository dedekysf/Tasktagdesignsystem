import { useState } from 'react';
import { Activity as ActivityIcon, ChevronDown, Folder, Hash } from 'lucide-react';
import { Avatar } from '../../components/AvatarComponent';

export function Activity() {
  const [isOpen, setIsOpen] = useState(false); // Collapsed by default
  const [isHovered, setIsHovered] = useState(false);
  
  // Get current month dates
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  
  // Format date helper
  const formatActivityDate = (daysAgo: number) => {
    const date = new Date(currentYear, currentMonth, today.getDate() - daysAgo);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    return `${month} ${day}, ${year}, ${displayHours}:${displayMinutes} ${ampm}`;
  };
  
  // Truncate helper - max 25 chars
  const truncateText = (text: string, maxLength: number = 25) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  
  const projectName = "Electrical Board Service Project";
  const taskName = "Electricity board fix and reconfiguration";
  
  const truncatedProjectName = truncateText(projectName, 25);
  const truncatedTaskName = truncateText(taskName, 25);

  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Activity" style={{ fontFamily: 'var(--font-family-base)' }}>
      {/* Accordion Header */}
      <div 
        className="flex items-center justify-between w-full px-[16px] py-[16px] cursor-pointer transition-colors"
        style={{ backgroundColor: isHovered ? 'var(--grey-01)' : 'transparent' }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-[12px]">
          <ActivityIcon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
          <span style={{
            fontWeight: 'var(--font-weight-semibold)',
            fontSize: 'var(--text-body)',
            color: 'var(--text-primary)',
            lineHeight: '21px'
          }}>
            Activity
          </span>
        </div>
        
        <div className="w-[24px] h-[24px] flex items-center justify-center">
          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--text-primary)' }} />
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <>
          {/* First Activity Item */}
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-0 relative w-full">
                {/* Left indicator */}
                <div className="box-border content-stretch flex flex-col gap-[6px] items-center pb-0 pt-[13px] px-0 relative self-stretch shrink-0">
                  <div className="relative shrink-0 size-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <circle cx="6" cy="6" fill="var(--secondary-green)" r="6" />
                    </svg>
                  </div>
                  <div className="basis-0 grow min-h-px min-w-px shrink-0 w-[2px]" style={{ backgroundColor: 'var(--border)' }} />
                </div>

                {/* Right content */}
                <div className="basis-0 box-border content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px px-0 py-[8px] relative self-stretch shrink-0">
                  {/* Header */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <Avatar 
                        size="xs" 
                        variant="image" 
                        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                      />
                      <p style={{
                        fontWeight: 'var(--font-weight-medium)',
                        fontSize: 'var(--text-label)',
                        lineHeight: '16px',
                        color: 'var(--text-primary)',
                      }}>
                        Melissa Smith
                      </p>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" style={{
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--text-label)',
                    lineHeight: '16px',
                    color: 'var(--text-primary)',
                  }}>
                    <p className="relative shrink-0" style={{ letterSpacing: '0.28px' }}>
                      <span>Added </span>
                      <span style={{ color: 'var(--brand-blue)' }}>@Melissa Smith</span>
                      <span> as Task Owner</span>
                    </p>
                    <p className="relative shrink-0" style={{ fontSize: 'var(--text-caption)' }}>{formatActivityDate(0)}</p>
                  </div>

                  {/* Tags */}
                  <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundColor: 'var(--white)' }}>
                      <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]" style={{ borderColor: 'var(--border)' }} />
                      <div className="size-full">
                        <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[8px] relative w-full">
                          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                            {/* Folder tag */}
                            <div className="content-stretch flex items-start relative shrink-0 w-[204px]">
                              <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" style={{ backgroundColor: 'var(--secondary-green)' }}>
                                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                  <div className="box-border content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
                                    <Folder className="w-[14px] h-[14px] text-white" />
                                    <p className="[white-space-collapse:collapse] basis-0 grow leading-[16px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap text-white" style={{
                                      fontWeight: 'var(--font-weight-medium)',
                                      fontSize: 'var(--text-label)',
                                    }}>
                                      {truncatedProjectName}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Hash tag */}
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" style={{ backgroundColor: 'var(--black)' }}>
                                <Hash className="w-[14px] h-[14px] text-white" />
                                <p className="leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap text-white whitespace-pre" style={{
                                  fontWeight: 'var(--font-weight-medium)',
                                  fontSize: 'var(--text-label)',
                                }}>
                                  {truncatedTaskName}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Activity Item */}
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-0 relative w-full">
                {/* Left indicator */}
                <div className="box-border content-stretch flex flex-col gap-[6px] items-center pb-0 pt-[13px] px-0 relative self-stretch shrink-0">
                  <div className="relative shrink-0 size-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <circle cx="6" cy="6" fill="var(--secondary-green)" r="6" />
                    </svg>
                  </div>
                  <div className="basis-0 grow min-h-px min-w-px shrink-0 w-[2px]" style={{ backgroundColor: 'var(--border)' }} />
                </div>

                {/* Right content */}
                <div className="basis-0 box-border content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px px-0 py-[8px] relative self-stretch shrink-0">
                  {/* Header */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <Avatar 
                        size="xs" 
                        variant="image" 
                        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                      />
                      <p style={{
                        fontWeight: 'var(--font-weight-medium)',
                        fontSize: 'var(--text-label)',
                        lineHeight: '16px',
                        color: 'var(--text-primary)',
                      }}>
                        Melissa Smith
                      </p>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" style={{
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--text-label)',
                    lineHeight: '16px',
                    color: 'var(--text-primary)',
                  }}>
                    <p className="relative shrink-0" style={{ letterSpacing: '0.28px' }}>Created this task</p>
                    <p className="relative shrink-0" style={{ fontSize: 'var(--text-caption)' }}>{formatActivityDate(0)}</p>
                  </div>

                  {/* Tags */}
                  <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundColor: 'var(--white)' }}>
                      <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]" style={{ borderColor: 'var(--border)' }} />
                      <div className="size-full">
                        <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[8px] relative w-full">
                          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                            {/* Folder tag */}
                            <div className="content-stretch flex items-start relative shrink-0 w-[204px]">
                              <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" style={{ backgroundColor: 'var(--secondary-green)' }}>
                                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                  <div className="box-border content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
                                    <Folder />
                                    <p className="[white-space-collapse:collapse] basis-0 grow leading-[16px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap text-white" style={{
                                      fontWeight: 'var(--font-weight-medium)',
                                      fontSize: 'var(--text-label)',
                                    }}>
                                      {truncatedProjectName}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Hash tag */}
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" style={{ backgroundColor: 'var(--black)' }}>
                                <Hash />
                                <p className="leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap text-white whitespace-pre" style={{
                                  fontWeight: 'var(--font-weight-medium)',
                                  fontSize: 'var(--text-label)',
                                }}>
                                  {truncatedTaskName}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}