import projectSvgPaths from "../../../imports/svg-suswvo893p";
import officeSvgPaths from "../../../imports/svg-ouoaoeyggd";

interface SelectProjectButtonProps {
  onClick: () => void;
  selectedProjectName?: string | null;
  selectedProjectColor?: string | null;
  selectedProjectIcon?: "helmet" | "zap" | null;
  showWarning?: boolean;
}

function ProjectIcon({ color }: { color: string }) {
  return (
    <div className="size-3 flex items-center justify-center rounded-sm">
      <svg className="size-3" fill="none" viewBox="0 0 12 12">
        <path d={projectSvgPaths.p29009380} fill={color} />
      </svg>
    </div>
  );
}

function OfficeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]">
      <div className="absolute inset-[4.95%_3.13%_3.12%_3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g>
            <path d={officeSvgPaths.p228224d0} fill="currentColor" />
            <path d={officeSvgPaths.p2b0cb780} fill="currentColor" />
            <path d={officeSvgPaths.p1b520ac0} fill="currentColor" />
            <path d={officeSvgPaths.p11966880} fill="currentColor" />
            <path d={officeSvgPaths.p311b9a80} fill="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function SelectProjectButton({
  onClick,
  selectedProjectName,
  selectedProjectColor,
  selectedProjectIcon,
  showWarning,
}: SelectProjectButtonProps) {
  const hasSelection = selectedProjectName && selectedProjectColor && selectedProjectIcon;

  return (
    <button
      onClick={onClick}
      className={`bg-white relative rounded-[40px] h-8 w-full hover:bg-[#FAFBFC] transition-colors ${showWarning && !hasSelection ? 'text-red-500' : ''}`}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[16px] py-[8px] relative size-full">
          {hasSelection ? (
            <>
              <ProjectIcon color={selectedProjectColor} />
              <p 
                className="relative shrink-0 text-[var(--text-secondary)] text-[12px] text-nowrap tracking-[0.24px] overflow-hidden overflow-ellipsis max-w-full"
                style={{ fontWeight: 'var(--font-weight-regular)' }}
              >
                {selectedProjectName}
              </p>
            </>
          ) : (
            <>
              <OfficeIcon />
              <p 
                className={`relative shrink-0 text-[12px] text-nowrap tracking-[0.24px] whitespace-pre ${showWarning ? 'text-red-500' : 'text-[var(--text-secondary)]'}`}
                style={{ fontWeight: 'var(--font-weight-regular)' }}
              >
                Select Project
              </p>
            </>
          )}
        </div>
      </div>
      <div className={`absolute border border-solid inset-0 pointer-events-none rounded-[40px] ${showWarning && !hasSelection ? 'border-red-500' : 'border-[#e8e8e8]'}`} />
    </button>
  );
}
