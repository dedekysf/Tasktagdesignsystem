import { useState } from 'react';
import { Activity as ActivityIcon } from 'lucide-react';
import { Avatar } from '../../components/AvatarComponent';

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative shrink-0 size-[20px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
          fill="var(--text-primary)"
        />
      </svg>
    </div>
  );
}

function FolderIcon() {
  return (
    <div className="relative shrink-0 size-[14.222px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.77782 2.66671C1.77782 2.42559 1.87365 2.19428 2.04368 2.02425C2.21372 1.85421 2.44502 1.75838 2.68615 1.75838H5.86504C6.10616 1.75838 6.33747 1.85421 6.5075 2.02425L7.41561 2.93236H12.3139C12.555 2.93236 12.7863 3.02819 12.9564 3.19822C13.1264 3.36826 13.2222 3.59957 13.2222 3.84069V12.3334C13.2222 12.5745 13.1264 12.8058 12.9564 12.9759C12.7863 13.1459 12.555 13.2417 12.3139 13.2417H2.68615C2.44502 13.2417 2.21372 13.1459 2.04368 12.9759C1.87365 12.8058 1.77782 12.5745 1.77782 12.3334V2.66671ZM6.22727 2.66671H2.68615V12.3334H12.3139V3.84069H7.05227L6.22727 2.66671Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function HashIcon() {
  return (
    <div className="relative shrink-0 size-[14.222px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.85185 1.75C6.10295 1.75 6.30556 1.95261 6.30556 2.20371V4.62963H8.73148V2.20371C8.73148 1.95261 8.93409 1.75 9.18519 1.75C9.43629 1.75 9.63889 1.95261 9.63889 2.20371V4.62963H12.5185C12.7696 4.62963 12.9722 4.83224 12.9722 5.08333C12.9722 5.33443 12.7696 5.53704 12.5185 5.53704H9.63889V9.46296H12.5185C12.7696 9.46296 12.9722 9.66557 12.9722 9.91667C12.9722 10.1678 12.7696 10.3704 12.5185 10.3704H9.63889V12.7963C9.63889 13.0474 9.43629 13.25 9.18519 13.25C8.93409 13.25 8.73148 13.0474 8.73148 12.7963V10.3704H6.30556V12.7963C6.30556 13.0474 6.10295 13.25 5.85185 13.25C5.60076 13.25 5.39815 13.0474 5.39815 12.7963V10.3704H2.51852C2.26742 10.3704 2.06481 10.1678 2.06481 9.91667C2.06481 9.66557 2.26742 9.46296 2.51852 9.46296H5.39815V5.53704H2.51852C2.26742 5.53704 2.06481 5.33443 2.06481 5.08333C2.06481 4.83224 2.26742 4.62963 2.51852 4.62963H5.39815V2.20371C5.39815 1.95261 5.60076 1.75 5.85185 1.75ZM6.30556 5.53704V9.46296H8.73148V5.53704H6.30556Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

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
          <ChevronDownIcon isOpen={isOpen} />
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
                                    <FolderIcon />
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
                                <HashIcon />
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
                                    <FolderIcon />
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
                                <HashIcon />
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