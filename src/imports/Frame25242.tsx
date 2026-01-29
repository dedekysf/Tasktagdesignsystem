import svgPaths from "./svg-9sk8ne3qxa";
import imgImage from "figma:asset/513dd7bc494865ca5a45fb92277a8d681c3397ff.png";
import imgUnsplashT5NXyxCf50I from "figma:asset/3a1636b747e2b8c750f8980cb0b94167080d3a27.png";
import imgImage1 from "figma:asset/7a9694031ea92e6b7b48ca2477d9e9ff5802fc71.png";
import imgImage2 from "figma:asset/a7c9e4ab6c8dce41676bf67741326a6f6c00e046.png";
import imgImage3 from "figma:asset/bd5ae5db281c1524f51f00f0803e6270f32e8284.png";
import imgImage4 from "figma:asset/5e1613842c1dbbf85fc6b4dbcede95e4bbc197ef.png";
import imgImage5 from "figma:asset/2cc3ba92c0a402567bf37e095262f204b3eb3c99.png";

function Frame1() {
  return (
    <div className="bg-[#f7f8fa] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-right">Jan 5, 2026</p>
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:25 AM</p>
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

function Pdf1() {
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

function Doc1() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">second_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Pdf2() {
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

function Doc2() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="Doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">third_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 size-[118px]">
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="unsplash:T5nXYXCf50I">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgUnsplashT5NXyxCf50I} />
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0 rounded-[8px]" />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-[calc(50%-0.17px)] not-italic text-[16px] text-center text-white top-[calc(50%-10px)]">+2</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="row">
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <Doc />
      <Doc1 />
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage2} />
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage3} />
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage4} />
      </div>
      <Doc2 />
      <Frame />
    </div>
  );
}

function FilesMediaMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[248px]" data-name="Files & Media Mobile">
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

function Hash() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="hash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="hash">
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag2 />
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project />
      <Project1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage5} />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Dedek Yusuf</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:20 AM</p>
    </div>
  );
}

function Pdf3() {
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

function Doc3() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">first_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Pdf4() {
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

function Doc4() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf4 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">second_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="row">
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <Doc3 />
      <Doc4 />
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage2} />
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function FilesMediaMobile1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Files & Media Mobile">
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

function Tag4() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder1 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag4 />
    </div>
  );
}

function Hash1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="hash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="hash">
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash1 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag5 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project2 />
      <Project3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
      <FilesMediaMobile1 />
      <Tag3 />
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

function AvatarMd2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar/md">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" id="bg" r="20" />
      </svg>
      <div className="absolute inset-0 rounded-[40px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Image2() {
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

function Icon2() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image2 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd2 />
      <Icon2 />
    </div>
  );
}

function LHeader2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Dedek Yusuf</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:15 AM</p>
    </div>
  );
}

function Pdf5() {
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

function Doc5() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf5 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">first_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Pdf6() {
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

function Doc6() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf6 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">second_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="row">
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <Doc5 />
      <Doc6 />
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function FilesMediaMobile2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Files & Media Mobile">
      <Row2 />
    </div>
  );
}

function Folder2() {
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

function Tag7() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder2 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag7 />
    </div>
  );
}

function Hash2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="hash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="hash">
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash2 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag8 />
    </div>
  );
}

function Tag6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project4 />
      <Project5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
      <FilesMediaMobile2 />
      <Tag6 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar2 />
      <Container3 />
    </div>
  );
}

function AvatarMd3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar/md">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" id="bg" r="20" />
      </svg>
      <div className="absolute inset-0 rounded-[40px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Image3() {
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

function Icon3() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image3 />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd3 />
      <Icon3 />
    </div>
  );
}

function LHeader3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Dedek Yusuf</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:10 AM</p>
    </div>
  );
}

function Pdf7() {
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

function Doc7() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf7 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">first_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Pdf8() {
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

function Doc8() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf8 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">second_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="row">
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <Doc7 />
      <Doc8 />
    </div>
  );
}

function FilesMediaMobile3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Files & Media Mobile">
      <Row3 />
    </div>
  );
}

function Folder3() {
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

function Tag10() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder3 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag10 />
    </div>
  );
}

function Hash3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="hash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="hash">
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash3 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag11 />
    </div>
  );
}

function Tag9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project6 />
      <Project7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
      <FilesMediaMobile3 />
      <Tag9 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar3 />
      <Container4 />
    </div>
  );
}

function AvatarMd4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar/md">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" id="bg" r="20" />
      </svg>
      <div className="absolute inset-0 rounded-[40px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Image4() {
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

function Icon4() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image4 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd4 />
      <Icon4 />
    </div>
  );
}

function LHeader4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Dedek Yusuf</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:05 AM</p>
    </div>
  );
}

function Pdf9() {
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

function Doc9() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf9 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">first_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <Doc9 />
    </div>
  );
}

function FilesMediaMobile4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Files & Media Mobile">
      <Row4 />
    </div>
  );
}

function Folder4() {
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

function Tag13() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder4 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag13 />
    </div>
  );
}

function Hash4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="hash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="hash">
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag14() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash4 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag14 />
    </div>
  );
}

function Tag12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project8 />
      <Project9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
      <FilesMediaMobile4 />
      <Tag12 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar4 />
      <Container5 />
    </div>
  );
}

function AvatarMd5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar/md">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" id="bg" r="20" />
      </svg>
      <div className="absolute inset-0 rounded-[40px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Image5() {
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

function Icon5() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image5 />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd5 />
      <Icon5 />
    </div>
  );
}

function LHeader5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Dedek Yusuf</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:00 AM</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="row">
      <div className="flex-[1_0_0] h-[120px] min-h-px min-w-px relative rounded-[8px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function FilesMediaMobile5() {
  return (
    <div className="content-stretch flex flex-col h-[118px] items-start relative shrink-0 w-[248px]" data-name="Files & Media Mobile">
      <Row5 />
    </div>
  );
}

function Folder5() {
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

function Tag16() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder5 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag16 />
    </div>
  );
}

function Hash5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="hash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="hash">
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag17() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash5 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag17 />
    </div>
  );
}

function Tag15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project10 />
      <Project11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and their motifs</p>
      <FilesMediaMobile5 />
      <Tag15 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar5 />
      <Container6 />
    </div>
  );
}

function AvatarMd6() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar/md">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" id="bg" r="20" />
      </svg>
      <div className="absolute inset-0 rounded-[40px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g>
          <path d={svgPaths.p97a7380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute bg-[#18a87d] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[133.333px] size-[16px] top-[24px]" data-name="Icon">
      <Location />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd6 />
      <Icon6 />
    </div>
  );
}

function LHeader6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Dedek Yusuf</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">08:10 AM</p>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_401_4178)" id="check-circle">
          <path clipRule="evenodd" d={svgPaths.p34990e00} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4178">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Message() {
  return (
    <div className="bg-[#dcf2ec] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="message">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <CheckCircle />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#18a87d] text-[10px] whitespace-nowrap">
            <p className="leading-[12px]">Checked in for this project</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapFlat() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mapFlat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mapFlat">
          <g id="Group">
            <path d={svgPaths.p25ef6380} fill="var(--fill-0, #44C868)" id="Vector" />
            <path d={svgPaths.p1a477880} fill="var(--fill-0, #44C868)" id="Vector_2" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.pacf6a70} fill="var(--fill-0, #4CE166)" id="Vector_3" />
            <path d={svgPaths.p1d7c8a00} fill="var(--fill-0, #4CE166)" id="Vector_4" />
          </g>
          <path d={svgPaths.p3b8b5800} fill="var(--fill-0, #FFDB56)" id="Vector_5" />
          <path d={svgPaths.p1172200} fill="var(--fill-0, #A8EEFC)" id="Vector_6" />
          <g id="Group_3">
            <path d={svgPaths.pc986180} fill="var(--fill-0, #FFBB24)" id="Vector_7" />
            <path d={svgPaths.p23783a00} fill="var(--fill-0, #FFBB24)" id="Vector_8" />
          </g>
          <path d={svgPaths.p7b90600} fill="var(--fill-0, #FFDB56)" id="Vector_9" />
          <path d={svgPaths.p32785f80} fill="var(--fill-0, #FFBB24)" id="Vector_10" />
          <path d={svgPaths.pe12a980} fill="var(--fill-0, #FF4A4A)" id="Vector_11" />
          <path d={svgPaths.p2f6f400} fill="var(--fill-0, #E7343F)" id="Vector_12" />
          <path d={svgPaths.p68e3f00} fill="var(--fill-0, #FFDB56)" id="Vector_13" />
          <g id="Group_4">
            <path d={svgPaths.p279dd600} fill="var(--fill-0, #1EA4E9)" id="Vector_14" />
            <path d={svgPaths.p9816470} fill="var(--fill-0, #1EA4E9)" id="Vector_15" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] overflow-hidden relative shrink-0 text-[#828282] text-[10px] text-ellipsis w-full whitespace-nowrap">6002 Fort Hamilton Drive, Corner of W 6th Street</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#91929e] text-[8px] w-full whitespace-pre-wrap">Houston, TX 77007</p>
    </div>
  );
}

function LLoction() {
  return (
    <div className="relative shrink-0 w-full" data-name="l-loction">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <MapFlat />
          <LText />
        </div>
      </div>
    </div>
  );
}

function Map1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Map">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Message />
      <LLoction />
    </div>
  );
}

function Map() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[250px]" data-name="Map">
      <Map1 />
    </div>
  );
}

function Folder6() {
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

function Tag19() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder6 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag19 />
    </div>
  );
}

function Hash6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="hash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="hash">
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag20() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash6 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag20 />
    </div>
  );
}

function Tag18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project12 />
      <Project13 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">I’m ready to work</p>
      <Map />
      <Tag18 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar6 />
      <Container7 />
    </div>
  );
}

function AvatarMd7() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar/md">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" id="bg" r="20" />
      </svg>
      <div className="absolute inset-0 rounded-[40px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Location1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g>
          <path d={svgPaths.p97a7380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute bg-[#f44] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[133.333px] size-[16px] top-[24px]" data-name="Icon">
      <Location1 />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd7 />
      <Icon7 />
    </div>
  );
}

function LHeader7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Dedek Yusuf</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">08:00 AM</p>
    </div>
  );
}

function AlertCircle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="alert-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_401_4146)" id="alert-circle">
          <path clipRule="evenodd" d={svgPaths.p411d000} fill="var(--fill-0, #FF4444)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4146">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Message1() {
  return (
    <div className="bg-[#ffdada] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="message">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <AlertCircle />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f44] text-[10px] whitespace-nowrap">
            <p className="leading-[12px]">Location doesn’t match with project address!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapFlat1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mapFlat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mapFlat">
          <g id="Group">
            <path d={svgPaths.p25ef6380} fill="var(--fill-0, #44C868)" id="Vector" />
            <path d={svgPaths.p1a477880} fill="var(--fill-0, #44C868)" id="Vector_2" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.pacf6a70} fill="var(--fill-0, #4CE166)" id="Vector_3" />
            <path d={svgPaths.p1d7c8a00} fill="var(--fill-0, #4CE166)" id="Vector_4" />
          </g>
          <path d={svgPaths.p3b8b5800} fill="var(--fill-0, #FFDB56)" id="Vector_5" />
          <path d={svgPaths.p1172200} fill="var(--fill-0, #A8EEFC)" id="Vector_6" />
          <g id="Group_3">
            <path d={svgPaths.pc986180} fill="var(--fill-0, #FFBB24)" id="Vector_7" />
            <path d={svgPaths.p23783a00} fill="var(--fill-0, #FFBB24)" id="Vector_8" />
          </g>
          <path d={svgPaths.p7b90600} fill="var(--fill-0, #FFDB56)" id="Vector_9" />
          <path d={svgPaths.p32785f80} fill="var(--fill-0, #FFBB24)" id="Vector_10" />
          <path d={svgPaths.pe12a980} fill="var(--fill-0, #FF4A4A)" id="Vector_11" />
          <path d={svgPaths.p2f6f400} fill="var(--fill-0, #E7343F)" id="Vector_12" />
          <path d={svgPaths.p68e3f00} fill="var(--fill-0, #FFDB56)" id="Vector_13" />
          <g id="Group_4">
            <path d={svgPaths.p279dd600} fill="var(--fill-0, #1EA4E9)" id="Vector_14" />
            <path d={svgPaths.p9816470} fill="var(--fill-0, #1EA4E9)" id="Vector_15" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] overflow-hidden relative shrink-0 text-[#828282] text-[10px] text-ellipsis w-full whitespace-nowrap">6002 Fort Hamilton Drive, Building 3, Townhouse 12</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#91929e] text-[8px] w-full whitespace-pre-wrap">Houston, TX 77007</p>
    </div>
  );
}

function LLoction1() {
  return (
    <div className="relative shrink-0 w-full" data-name="l-loction">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <MapFlat1 />
          <LText1 />
        </div>
      </div>
    </div>
  );
}

function Map3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Map">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Message1 />
      <LLoction1 />
    </div>
  );
}

function Map2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[250px]" data-name="Map">
      <Map3 />
    </div>
  );
}

function Folder7() {
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

function Tag22() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder7 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag22 />
    </div>
  );
}

function Hash7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="hash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="hash">
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag23() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash7 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag23 />
    </div>
  );
}

function Tag21() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project14 />
      <Project15 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <LHeader7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">I’m ready to work</p>
      <Map2 />
      <Tag21 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar7 />
      <Container8 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full">
      <Frame1 />
      <Container />
    </div>
  );
}