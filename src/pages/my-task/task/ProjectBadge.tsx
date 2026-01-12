import svgPaths from "../../../imports/svg-suswvo893p";

interface ProjectBadgeProps {
  projectName: string;
  projectIcon: string; // This is actually the color hex code
}

export function ProjectBadge({ projectName, projectIcon }: ProjectBadgeProps) {
  return (
    <div className="flex items-center gap-1 p-[2px]">
      <div className="size-3 flex items-center justify-center rounded-sm">
        <svg className="size-3" fill="none" viewBox="0 0 12 12">
          <path d={svgPaths.p29009380} fill={projectIcon} />
        </svg>
      </div>
      <span className="text-[10px] text-[#828282] hover:underline cursor-pointer" style={{ fontWeight: 'var(--font-weight-regular)' }}>
        {projectName}
      </span>
    </div>
  );
}
