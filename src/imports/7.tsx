import svgPaths from "./svg-7o7n1clebv";

function Icon() {
  return (
    <div className="absolute inset-[20%]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p25235600} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function AvatarMd() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar/md">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" fillOpacity="0.5" id="bg" r="20" />
      </svg>
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-white whitespace-pre-wrap" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[16px] w-full">Don’t Build Alone</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] tracking-[0.24px] w-full">Projects work better with others. Invite someone to collaborate on this project.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <AvatarMd />
      <Content />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#18a87d] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white">Invite Member</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="button">
      <ButtonBase />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] size-full" data-name="7">
      <Frame />
      <Button />
    </div>
  );
}