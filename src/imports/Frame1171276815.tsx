import svgPaths from "./svg-ib9fjc083b";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon" opacity="0">
          <path clipRule="evenodd" d={svgPaths.p151cf680} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function LRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="l-row">
      <Icon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">Sort</p>
    </div>
  );
}

function DropdownItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative self-stretch shrink-0" data-name="_dropdown item">
      <LRow />
    </div>
  );
}

function DropdownItem() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="dropdown item">
      <DropdownItem1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_461_55698)" id="filter">
          <g id="Vector" />
          <path d={svgPaths.p1ee01d00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_461_55698">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="l-row">
      <Icon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">Filter</p>
    </div>
  );
}

function DropdownItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative self-stretch shrink-0" data-name="_dropdown item">
      <LRow1 />
    </div>
  );
}

function DropdownItem2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="dropdown item">
      <DropdownItem3 />
    </div>
  );
}

function LList() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="l-list">
      <DropdownItem />
      <DropdownItem2 />
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="absolute bg-white content-stretch flex items-start justify-center left-0 py-[8px] rounded-[8px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] top-0 w-[108px]" data-name="Dropdown menu">
      <LList />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[13.474px] left-0 top-px w-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13.4738">
        <g id="Frame 5">
          <path d={svgPaths.p35a12200} fill="var(--fill-0, #0A1629)" id="Vector" />
          <path d={svgPaths.pa835600} fill="var(--fill-0, #0A1629)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-px" data-name="Group">
      <Frame />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-px" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-px" data-name="Group">
      <Group1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute inset-[20.24%_62.96%_60.71%_22.22%] overflow-clip" data-name="icon">
      <Group />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <DropdownMenu />
      <Icon2 />
    </div>
  );
}