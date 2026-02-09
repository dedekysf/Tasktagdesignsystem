import svgPaths from "./svg-oe25rvlkcy";

function Icon() {
  return (
    <div className="absolute inset-[20%]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p39a7500} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[16px] w-full">{`Start your first real project `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] tracking-[0.24px] w-full">{`Add what you're working on, then invite your team when ready!`}</p>
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white">Later</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="button">
      <ButtonBase />
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="bg-[#18a87d] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white">Create Project</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[48px] items-start min-h-px min-w-px relative" data-name="button">
      <ButtonBase1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] size-full" data-name="7">
      <Frame />
      <Frame1 />
    </div>
  );
}