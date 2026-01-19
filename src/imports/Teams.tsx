import svgPaths from "./svg-qjx44nvi4w";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p2d9d340} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LHeading() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[472px]" data-name="l-heading">
      <Icon />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px]">Teams</p>
    </div>
  );
}

function IconStart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon--start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon--start">
          <path clipRule="evenodd" d={svgPaths.p1c697d80} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function LContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-px relative" data-name="l-content">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#828282] text-[14px]">Search</p>
    </div>
  );
}

function CInput() {
  return (
    <div className="bg-[#f7f8fa] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="c-input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <IconStart />
          <LContent />
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="_search bar">
      <CInput />
    </div>
  );
}

function SearchBar1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="search bar">
      <SearchBar />
    </div>
  );
}

function Folder() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.p3009bb80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ProjectIcon() {
  return (
    <div className="bg-[#f44] content-stretch flex items-center p-[4px] relative rounded-[1.333px] shrink-0" data-name="Project Icon">
      <Folder />
    </div>
  );
}

function Row() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <ProjectIcon />
      <p className="css-g0mm18 flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#0a1629] text-[14px] text-ellipsis tracking-[0.28px]">TaskTag Project</p>
    </div>
  );
}

function Folder1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.p3009bb80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ProjectIcon1() {
  return (
    <div className="bg-[#f44] content-stretch flex items-center p-[4px] relative rounded-[1.333px] shrink-0" data-name="Project Icon">
      <Folder1 />
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <ProjectIcon1 />
      <p className="css-g0mm18 flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#0a1629] text-[14px] text-ellipsis tracking-[0.28px]">Scott 1</p>
    </div>
  );
}

function Folder2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.p3009bb80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ProjectIcon2() {
  return (
    <div className="bg-[#f44] content-stretch flex items-center p-[4px] relative rounded-[1.333px] shrink-0" data-name="Project Icon">
      <Folder2 />
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <ProjectIcon2 />
      <p className="css-g0mm18 flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#0a1629] text-[14px] text-ellipsis tracking-[0.28px]">Personal Projects</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

export default function Teams() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative rounded-[16px] size-full" data-name="Teams">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <LHeading />
      <SearchBar1 />
      <Container />
    </div>
  );
}