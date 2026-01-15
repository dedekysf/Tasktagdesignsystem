import svgPaths from "./svg-36nqtqpo0p";
import imgImage from "figma:asset/75c80f337ad5301b4cfed7b6e8feb92419cf0ab4.png";

function Group() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 24">
        <g id="Group">
          <path d={svgPaths.p9dfc872} fill="var(--fill-0, #00D9A5)" id="Vector" />
          <path d={svgPaths.p3baa6d80} fill="var(--fill-0, #00D9A5)" id="Vector_2" />
          <path d={svgPaths.p2d77b000} fill="var(--fill-0, #00D9A5)" id="Vector_3" />
          <path d={svgPaths.p31fba600} fill="var(--fill-0, #00D9A5)" id="Vector_4" />
          <path d={svgPaths.p233ffdf0} fill="var(--fill-0, #00D9A5)" id="Vector_5" />
          <path d={svgPaths.pc958c00} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p2e617100} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p2d3b680} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.pa1511f0} fill="var(--fill-0, black)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function LogoMain() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="Logo/Main">
      <Group />
    </div>
  );
}

function ChevronsLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevrons-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevrons-left">
          <path clipRule="evenodd" d={svgPaths.p73d4700} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="heading">
      <LogoMain />
      <ChevronsLeft />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p2b265800} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function SideNavItem() {
  return (
    <div className="bg-[#dcf2ec] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="_side nav item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[15px] relative size-full">
          <Icon />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#18a87d] text-[14px]">
            <p className="leading-[16px] whitespace-pre-wrap">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideNavItem1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="side nav item">
      <SideNavItem />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p15087a00} fill="var(--fill-0, #303742)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function SideNavItem2() {
  return (
    <div className="bg-[rgba(24,168,125,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="_side nav item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[15px] relative size-full">
          <Icon1 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px]">
            <p className="leading-[16px] whitespace-pre-wrap">My Tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideNavItem3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="side nav item">
      <SideNavItem2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p3be0ec00} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function SideNavItem4() {
  return (
    <div className="bg-[rgba(24,168,125,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="_side nav item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[15px] relative size-full">
          <Icon2 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px]">
            <p className="leading-[16px] whitespace-pre-wrap">Global Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideNavItem5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="side nav item">
      <SideNavItem4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p17d2ed00} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function SideNavItem6() {
  return (
    <div className="bg-[rgba(24,168,125,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="_side nav item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[15px] relative size-full">
          <Icon3 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px]">
            <p className="leading-[16px] whitespace-pre-wrap">Contacts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideNavItem7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="side nav item">
      <SideNavItem6 />
    </div>
  );
}

function LNav() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="l-nav">
      <SideNavItem1 />
      <SideNavItem3 />
      <SideNavItem5 />
      <SideNavItem7 />
    </div>
  );
}

function BlobTop() {
  return (
    <div className="absolute left-[-24px] size-[80px] top-[-24px]" data-name="Blob Top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Blob Top">
          <g id="Group 16">
            <circle cx="37.0516" cy="38.4345" fill="var(--fill-0, #00D9A5)" id="Ellipse 2" r="15.8837" />
            <circle cx="44.699" cy="53.7313" fill="var(--fill-0, #18A87D)" id="Ellipse 4" r="15.8837" />
            <circle cx="50.1396" cy="37.8466" fill="var(--fill-0, #00D9A5)" id="Ellipse 3" r="15.8837" />
          </g>
          <circle cx="40" cy="40" data-figma-bg-blur-radius="29.0632" fill="var(--fill-0, white)" fillOpacity="0.89" id="Ellipse 5" r="40" />
        </g>
        <defs>
          <clipPath id="bgblur_0_260_1305_clip_path" transform="translate(29.0632 29.0632)">
            <circle cx="40" cy="40" r="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BlobBottom() {
  return (
    <div className="absolute left-[144px] size-[120px] top-[56px]" data-name="Blob Bottom">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Blob Bottom">
          <g id="Group 16">
            <circle cx="53.798" cy="55.7364" fill="var(--fill-0, #00D9A5)" id="Ellipse 2" r="24.8009" />
            <circle cx="65.7384" cy="79.6212" fill="var(--fill-0, #18A87D)" id="Ellipse 4" r="24.8009" />
            <circle cx="74.2335" cy="54.8204" fill="var(--fill-0, #00D9A5)" id="Ellipse 3" r="24.8009" />
          </g>
          <circle cx="60" cy="60" data-figma-bg-blur-radius="29.0632" fill="var(--fill-0, white)" fillOpacity="0.89" id="Ellipse 5" r="60" />
        </g>
        <defs>
          <clipPath id="bgblur_0_260_1266_clip_path" transform="translate(29.0632 29.0632)">
            <circle cx="60" cy="60" r="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LineRoundedArrowRigth() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Line Rounded/Arrow rigth">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Line Rounded/Arrow rigth">
          <path d={svgPaths.p2d9a6580} id="Element" stroke="var(--stroke-0, #18A87D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49334" />
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[17.92px] shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#18a87d] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">Explore</p>
      </div>
      <LineRoundedArrowRigth />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Text Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#303742] text-[18px] w-full whitespace-pre-wrap">Find All Product Guides Here</p>
      <Buttons />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="1">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <BlobTop />
          <BlobBottom />
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p15c9de80} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function SideNavItem8() {
  return (
    <div className="bg-[rgba(24,168,125,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="_side nav item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[15px] relative size-full">
          <Icon4 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px]">
            <p className="leading-[16px] whitespace-pre-wrap">Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideNavItem9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="side nav item">
      <SideNavItem8 />
    </div>
  );
}

function AvatarMedium() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="_Avatar_medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #035B60)" id="bg" r="20" />
      </svg>
      <div className="absolute inset-0 rounded-[40px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function SideNavItem10() {
  return (
    <div className="bg-[rgba(24,168,125,0)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="_side nav item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[15px] relative size-full">
          <AvatarMedium />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px]">
            <p className="leading-[16px] whitespace-pre-wrap">My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideNavItem11() {
  return (
    <div className="content-stretch flex h-[54px] items-start relative shrink-0 w-full" data-name="side nav item">
      <SideNavItem10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 1">
            <line id="Line 1" stroke="var(--stroke-0, #E8E8E8)" x2="224" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <SideNavItem9 />
      <SideNavItem11 />
    </div>
  );
}

function LNav1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="l-nav">
      <Component />
      <Frame />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="Navigation">
      <LNav />
      <LNav1 />
    </div>
  );
}

function SideBar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative w-full" data-name="SideBar">
      <Navigation />
    </div>
  );
}

export default function SideNav() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[30px] items-start px-[16px] py-[24px] relative size-full" data-name="_Side Nav">
      <Heading />
      <SideBar />
    </div>
  );
}