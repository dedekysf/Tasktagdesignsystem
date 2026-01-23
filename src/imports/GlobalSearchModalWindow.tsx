import svgPaths from "./svg-uglcuqir9q";

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

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="heading">
      <Icon />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#0a1629] text-[16px]">Global Search</p>
    </div>
  );
}

function ModalHeading() {
  return (
    <div className="bg-white relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Modal Heading">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[24px] px-[24px] relative w-full">
        <Heading />
      </div>
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
      <div className="bg-[#0a1629] h-[20px] shrink-0 w-px" data-name="caret" />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[14px] tracking-[0.28px]">Find Tasks, Projects or Files</p>
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
    <div className="relative shrink-0 w-full" data-name="search bar">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <SearchBar />
      </div>
    </div>
  );
}

function LName() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="l-name">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#303742] text-[14px]">
        <p className="css-ew64yg leading-[16px]">Recent Search</p>
      </div>
    </div>
  );
}

function LCta() {
  return <div className="content-stretch flex gap-[4px] items-center justify-end shrink-0" data-name="l-cta" />;
}

function LHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="l-header">
      <LName />
      <LCta />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <LHeader />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="h-[479px] relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-start px-[24px] relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal h-full leading-[16px] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] text-center tracking-[0.28px]">No recent searches found</p>
      </div>
    </div>
  );
}

function LContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="l-content">
      <Heading1 />
      <Content />
    </div>
  );
}

export default function GlobalSearchModalWindow() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[16px] relative rounded-[16px] size-full" data-name="Global Search modal window">
      <ModalHeading />
      <SearchBar1 />
      <LContent1 />
    </div>
  );
}