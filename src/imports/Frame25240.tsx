import svgPaths from "./svg-etk61db9xb";
import imgImage from "figma:asset/513dd7bc494865ca5a45fb92277a8d681c3397ff.png";
import imgImage1 from "figma:asset/7a9694031ea92e6b7b48ca2477d9e9ff5802fc71.png";

function Frame() {
  return (
    <div className="bg-[#f7f8fa] h-[32px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-right">Dec 30, 2025</p>
        </div>
      </div>
    </div>
  );
}

function AvatarMd() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar/md">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" id="bg" r="20" />
      </svg>
      <div className="absolute inset-0 rounded-[40px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4149)" id="image">
          <path d="M6.66669 2.08301H9.16669" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d="M7.91669 0.833008V3.33301" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p3886f380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p2507b6a0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p27650880} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4" />
        </g>
        <defs>
          <clipPath id="clip0_401_4149">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image />
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd />
      <Icon />
    </div>
  );
}

function LHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:20 AM</p>
    </div>
  );
}

function Pdf() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="pdf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="pdf">
          <path d={svgPaths.p3c518480} fill="var(--fill-0, #EDEEEF)" id="Vector" />
          <path d={svgPaths.p1152b980} fill="var(--fill-0, #B0B7BD)" id="Vector_2" />
          <path d="M18.75 8.75L15 5H18.75V8.75Z" fill="var(--fill-0, #CAD1D8)" id="Vector_3" />
          <path d={svgPaths.p1ccb1300} fill="var(--fill-0, #F15642)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p2b260f40} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p1fd71100} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p5e39080} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
          <path d={svgPaths.p1d00bc40} fill="var(--fill-0, #CAD1D8)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Doc() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">first_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <Doc />
    </div>
  );
}

function FilesMediaMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Files & Media Mobile">
      <Row />
    </div>
  );
}

function Folder() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.p3cf3680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag1 />
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and their motifs</p>
      <FilesMediaMobile />
      <Tag />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar />
      <Container1 />
    </div>
  );
}

function AvatarMd1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar/md">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" id="bg" r="20" />
      </svg>
      <div className="absolute inset-0 rounded-[40px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4149)" id="image">
          <path d="M6.66669 2.08301H9.16669" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d="M7.91669 0.833008V3.33301" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p3886f380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p2507b6a0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p27650880} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4" />
        </g>
        <defs>
          <clipPath id="clip0_401_4149">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image1 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd1 />
      <Icon1 />
    </div>
  );
}

function LHeader1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:00 AM</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="row">
      <div className="flex-[1_0_0] h-[120px] min-h-px min-w-px relative rounded-[8px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function FilesMediaMobile1() {
  return (
    <div className="content-stretch flex flex-col h-[118px] items-start relative shrink-0 w-[248px]" data-name="Files & Media Mobile">
      <Row1 />
    </div>
  );
}

function Folder1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.p3cf3680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder1 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag3 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <LHeader1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and their motifs</p>
      <FilesMediaMobile1 />
      <Tag2 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar1 />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Item />
      <Item1 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full">
      <Frame />
      <Container />
    </div>
  );
}