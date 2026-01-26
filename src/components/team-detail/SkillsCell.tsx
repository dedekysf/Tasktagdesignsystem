import { useState, useEffect, useRef } from "react";
import { MoreVertical } from "lucide-react";
import { Tooltip as MainTooltip } from "../Tooltip";

interface SkillsCellProps {
  skills: string[];
  linkCopiedVisible?: boolean;
}

export function SkillsCell({ skills, linkCopiedVisible }: SkillsCellProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSkills, setVisibleSkills] = useState<string[]>(skills);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (!containerRef.current || skills.length === 0) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    
    // Create temporary elements to measure
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.visibility = 'hidden';
    tempContainer.style.display = 'flex';
    tempContainer.style.gap = '4px';
    tempContainer.style.alignItems = 'center';
    document.body.appendChild(tempContainer);

    const moreIconWidth = 28; // Icon width with padding
    const gapWidth = 4; // Gap between items
    
    let totalWidth = 0;
    let canFit = 0;

    for (let i = 0; i < skills.length; i++) {
      const badge = document.createElement('span');
      badge.className = 'bg-secondary px-2 py-1 rounded text-foreground whitespace-nowrap';
      badge.style.fontSize = '14px';
      badge.textContent = skills[i];
      tempContainer.appendChild(badge);
      
      const badgeWidth = badge.offsetWidth;
      const requiredWidth = totalWidth + badgeWidth + (i > 0 ? gapWidth : 0);
      
      // Check if we need to reserve space for more icon
      const needsMoreIcon = i < skills.length - 1;
      const totalRequiredWidth = needsMoreIcon 
        ? requiredWidth + gapWidth + moreIconWidth 
        : requiredWidth;

      if (totalRequiredWidth <= containerWidth) {
        canFit = i + 1;
        totalWidth = requiredWidth;
      } else {
        break;
      }
    }

    document.body.removeChild(tempContainer);

    if (canFit < skills.length) {
      setVisibleSkills(skills.slice(0, canFit));
      setHasMore(true);
    } else {
      setVisibleSkills(skills);
      setHasMore(false);
    }
  }, [skills]);

  if (skills.length === 0) return null;

  return (
    <div 
      ref={containerRef} 
      className="flex gap-1 items-center" 
      style={{ minWidth: 0, width: '100%' }}
    >
      <div className="flex gap-1 items-center" style={{ minWidth: 0 }}>
        {visibleSkills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-secondary px-2 py-1 rounded text-foreground whitespace-nowrap"
            style={{ fontSize: "14px" }}
          >
            {skill}
          </span>
        ))}
      </div>

      {hasMore && (
        <MainTooltip
          content={
            <div
              className="flex flex-wrap gap-1"
              style={{ maxWidth: "280px" }}
            >
              {skills.slice(visibleSkills.length).map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-4)',
                    padding: 'var(--spacing-4)',
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--radius-4)',
                    fontSize: 'var(--text-caption)',
                    color: 'var(--text-primary)',
                    lineHeight: '16px',
                    fontWeight: 'var(--font-weight-regular)',
                    width: 'fit-content'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          }
          variant="bottom-right"
          size="sm"
          forceHide={linkCopiedVisible}
        >
          <div className="p-1 hover:bg-secondary rounded transition-colors cursor-pointer" style={{ flexShrink: 0 }}>
            <MoreVertical className="w-4 h-4 text-muted-foreground" />
          </div>
        </MainTooltip>
      )}
    </div>
  );
}
