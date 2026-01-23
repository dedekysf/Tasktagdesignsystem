import svgPaths from "./svg-xw4aapez10";
import imgImage from "figma:asset/5a25f2d5ce87a928ce8a7bd65315ec4f869999d7.png";
import imgImage1 from "figma:asset/122d56712a89ac8251f9bdc7f80a1a99b32e0685.png";
import imgBg from "figma:asset/13f12271db9a10bddbd63600d506f8cb6529da08.png";
import imgImage2 from "figma:asset/eaab501eb00f5327a51901cff520c485fb2f4a93.png";
import imgImage3 from "figma:asset/65db7763e6ad98ec28a5d0a8f99cc45a620ff9bf.png";

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
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="l-content">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">W</p>
      <div className="bg-[#0a1629] h-[20px] shrink-0 w-px" data-name="caret" />
    </div>
  );
}

function IconEnd() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon--end">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Close">
          <path d={svgPaths.p2f400} fill="var(--fill-0, #0A1629)" id="Vector" />
        </g>
      </svg>
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
          <IconEnd />
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

function LContent1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="l-content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[4px] relative size-full">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px]">Projects</p>
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative w-full" data-name="_tab">
      <LContent1 />
      <div className="bg-[#18a87d] h-px opacity-0 shrink-0 w-full" data-name="bar" />
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center min-w-[96px] px-[8px] relative shrink-0 w-[96px]" data-name="Tab">
      <Tab />
    </div>
  );
}

function LContent2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="l-content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[4px] relative size-full">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px]">Tasks</p>
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative w-full" data-name="_tab">
      <LContent2 />
      <div className="bg-[#18a87d] h-px opacity-0 shrink-0 w-full" data-name="bar" />
    </div>
  );
}

function Tab3() {
  return (
    <div className="content-stretch flex flex-col h-full items-center min-w-[96px] px-[8px] relative shrink-0 w-[96px]" data-name="Tab">
      <Tab2 />
    </div>
  );
}

function Number() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[7px] relative rounded-[200px] shrink-0 size-[20px]" data-name="Number">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.24px]">
        <p className="css-ew64yg leading-[16px]">6</p>
      </div>
    </div>
  );
}

function LContent3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="l-content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[4px] relative size-full">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#18a87d] text-[14px]">Files</p>
          <Number />
        </div>
      </div>
    </div>
  );
}

function Tab4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative w-full" data-name="_tab">
      <LContent3 />
      <div className="bg-[#18a87d] h-px shrink-0 w-full" data-name="bar" />
    </div>
  );
}

function Tab5() {
  return (
    <div className="content-stretch flex flex-col h-full items-center min-w-[108px] relative shrink-0 w-[108px]" data-name="Tab">
      <Tab4 />
    </div>
  );
}

function LContent4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="l-content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[4px] relative size-full">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px]">Contacts</p>
        </div>
      </div>
    </div>
  );
}

function Tab6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative w-full" data-name="_tab">
      <LContent4 />
      <div className="bg-[#18a87d] h-px opacity-0 shrink-0 w-full" data-name="bar" />
    </div>
  );
}

function Tab7() {
  return (
    <div className="content-stretch flex flex-col h-full items-center min-w-[96px] px-[8px] relative shrink-0 w-[96px]" data-name="Tab">
      <Tab6 />
    </div>
  );
}

function LTabs() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="l-Tabs">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start pt-[8px] px-[16px] relative size-full">
        <Tab1 />
        <Tab3 />
        <Tab5 />
        <Tab7 />
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_348_5765)" id="filter">
          <g id="Vector"></g>
          <path d={svgPaths.p1ee01d00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_348_5765">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center px-[16px] py-[8px] relative rounded-[8px]" data-name="Dropdown">
      <Filter />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px]">
        <p className="css-ew64yg leading-[16px]">Filter</p>
      </div>
    </div>
  );
}

function FilterSort() {
  return (
    <div className="content-stretch flex items-start relative" data-name="Filter & Sort">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <FilterSort />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="title">
      <div className="absolute h-[20px] left-[-1px] top-[-2px] w-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <g id="Rectangle 195">
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
          </g>
        </svg>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">White kitchen.3</p>
      </div>
    </div>
  );
}

function Folder() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.pc328b00} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Folder />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">120 Penn Station #302, 11</p>
    </div>
  );
}

function Chats() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="chats">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="chats">
          <path d={svgPaths.p3132da00} fill="var(--fill-0, #828282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Chats />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Tasktag x Headway</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="calendar">
          <path clipRule="evenodd" d={svgPaths.p1e630900} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Calendar />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Apr 10</p>
    </div>
  );
}

function LTaskInfo() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="l-task info">
      <Tag />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag1 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag2 />
    </div>
  );
}

function LTask() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="l-task">
      <Title />
      <LTaskInfo />
    </div>
  );
}

function LFile() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[11px] items-center min-h-px min-w-px relative" data-name="l-file">
      <div className="h-[46px] relative shrink-0 w-[60px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <LTask />
    </div>
  );
}

function LHeader() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="l-header">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">Nightly Team</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.7076">
        <g id="Group">
          <path d={svgPaths.p238a2b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p296cb500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p20214250} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pc919e80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p18c56900} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Layer_1">
      <Group />
    </div>
  );
}

function Office() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="office">
      <Layer />
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#18a87d] col-1 ml-0 mt-0 relative rounded-[4px] row-1 size-[24px]" data-name="logo">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-[34px] relative size-full">
          <Office />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="avatar">
      <Logo />
    </div>
  );
}

function TeamAvatarEdit() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="_teamAvatar edit">
      <Avatar />
    </div>
  );
}

function TeamAvatarEdit1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="teamAvatar edit">
      <TeamAvatarEdit />
    </div>
  );
}

function LTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="l-title">
      <LHeader />
      <TeamAvatarEdit1 />
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex items-center py-[11px] relative shrink-0" data-name="Cell">
      <LTitle />
    </div>
  );
}

function SearchRows() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[24px] py-[8px] relative shrink-0 w-[820px]" data-name="Search rows">
      <LFile />
      <Cell />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="title">
      <div className="absolute h-[20px] left-[-1px] top-[-2px] w-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <g id="Rectangle 195">
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
          </g>
        </svg>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">W345547.jpg</p>
      </div>
    </div>
  );
}

function Folder1() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.pc328b00} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Folder1 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">11520 Oliver Street</p>
    </div>
  );
}

function Chats1() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="chats">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="chats">
          <path d={svgPaths.p3132da00} fill="var(--fill-0, #828282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Chats1 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Group Chat</p>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="calendar">
          <path clipRule="evenodd" d={svgPaths.p1e630900} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Calendar1 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Apr 8</p>
    </div>
  );
}

function LTaskInfo1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="l-task info">
      <Tag3 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag4 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag5 />
    </div>
  );
}

function LTask1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="l-task">
      <Title1 />
      <LTaskInfo1 />
    </div>
  );
}

function LFile1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[11px] items-center min-h-px min-w-px relative" data-name="l-file">
      <div className="h-[46px] relative shrink-0 w-[60px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1} />
      </div>
      <LTask1 />
    </div>
  );
}

function LHeader1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="l-header">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">TaskTag Team</p>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="bg-black col-1 ml-0 mt-0 relative rounded-[4px] row-1 size-[24px]" data-name="logo">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-[34px] relative size-full">
          <div className="relative rounded-[100px] shrink-0 size-[20.571px]" data-name="bg">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgBg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="avatar">
      <Logo1 />
    </div>
  );
}

function TeamAvatarEdit2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="_teamAvatar edit">
      <Avatar1 />
    </div>
  );
}

function TeamAvatarEdit3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="teamAvatar edit">
      <TeamAvatarEdit2 />
    </div>
  );
}

function LTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="l-title">
      <LHeader1 />
      <TeamAvatarEdit3 />
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex items-center py-[11px] relative shrink-0" data-name="Cell">
      <LTitle1 />
    </div>
  );
}

function SearchRows1() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[24px] py-[8px] relative shrink-0 w-[820px]" data-name="Search rows">
      <LFile1 />
      <Cell1 />
    </div>
  );
}

function Doc() {
  return (
    <div className="relative shrink-0 size-[36.6px]" data-name="doc">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6001 36.6001">
        <g clipPath="url(#clip0_348_5705)" id="doc">
          <path d={svgPaths.pd015800} fill="var(--fill-0, #EDEEEF)" id="Vector" />
          <path d={svgPaths.p24bf7c00} fill="var(--fill-0, #B0B7BD)" id="Vector_2" />
          <path d={svgPaths.p3aa2d800} fill="var(--fill-0, #CAD1D8)" id="Vector_3" />
          <path d={svgPaths.p3618fb80} fill="var(--fill-0, #C91E08)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p6a34a80} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p1bb68e80} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p31c8df00} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
          <path d={svgPaths.p3c896b80} fill="var(--fill-0, #CAD1D8)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_348_5705">
            <rect fill="white" height="36.6001" width="36.6001" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LIcon() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex h-[48px] items-center justify-center p-[10.4px] relative rounded-[8px] shrink-0 w-[60px]" data-name="l-icon">
      <Doc />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="title">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">Contract w1.5</p>
      </div>
    </div>
  );
}

function Folder2() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.pc328b00} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Folder2 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">11520 Oliver Street</p>
    </div>
  );
}

function Chats2() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="chats">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="chats">
          <path d={svgPaths.p3132da00} fill="var(--fill-0, #828282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Chats2 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Group Chat</p>
    </div>
  );
}

function Calendar2() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="calendar">
          <path clipRule="evenodd" d={svgPaths.p1e630900} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Calendar2 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Mar 25</p>
    </div>
  );
}

function LTaskInfo2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="l-task info">
      <Tag6 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag7 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag8 />
    </div>
  );
}

function LTask2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="l-task">
      <Title2 />
      <LTaskInfo2 />
    </div>
  );
}

function LFile2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[11px] items-center min-h-px min-w-px relative" data-name="l-file">
      <LIcon />
      <LTask2 />
    </div>
  );
}

function LHeader2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="l-header">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">TaskTag Team</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.7076">
        <g id="Group">
          <path d={svgPaths.p238a2b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p296cb500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p20214250} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pc919e80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p18c56900} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Layer_1">
      <Group1 />
    </div>
  );
}

function Office1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="office">
      <Layer1 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="bg-black col-1 ml-0 mt-0 relative rounded-[4px] row-1 size-[24px]" data-name="logo">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-[34px] relative size-full">
          <Office1 />
          <div className="relative rounded-[100px] shrink-0 size-[20.571px]" data-name="bg">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgBg} />
          </div>
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-center text-white">AZ</p>
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="avatar">
      <Logo2 />
    </div>
  );
}

function TeamAvatarEdit4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="_teamAvatar edit">
      <Avatar2 />
    </div>
  );
}

function TeamAvatarEdit5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="teamAvatar edit">
      <TeamAvatarEdit4 />
    </div>
  );
}

function LTitle2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="l-title">
      <LHeader2 />
      <TeamAvatarEdit5 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex items-center py-[11px] relative shrink-0" data-name="Cell">
      <LTitle2 />
    </div>
  );
}

function SearchRows2() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[24px] py-[8px] relative shrink-0 w-[820px]" data-name="Search rows">
      <LFile2 />
      <Cell2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="title">
      <div className="absolute h-[20px] left-[-1px] top-[-2px] w-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <g id="Rectangle 195">
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
          </g>
        </svg>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">White Kitchen34</p>
      </div>
    </div>
  );
}

function Folder3() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.pc328b00} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Folder3 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Houston, TX 71102</p>
    </div>
  );
}

function Chats3() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="chats">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="chats">
          <path d={svgPaths.p3132da00} fill="var(--fill-0, #828282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Chats3 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Group Chat</p>
    </div>
  );
}

function Calendar3() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="calendar">
          <path clipRule="evenodd" d={svgPaths.p1e630900} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Calendar3 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Mar 25</p>
    </div>
  );
}

function LTaskInfo3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="l-task info">
      <Tag9 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag10 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag11 />
    </div>
  );
}

function LTask3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="l-task">
      <Title3 />
      <LTaskInfo3 />
    </div>
  );
}

function LFile3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[11px] items-center min-h-px min-w-px relative" data-name="l-file">
      <div className="h-[46px] relative shrink-0 w-[60px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <LTask3 />
    </div>
  );
}

function LHeader3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="l-header">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">TaskTag Team</p>
      </div>
    </div>
  );
}

function Logo3() {
  return (
    <div className="bg-black col-1 ml-0 mt-0 relative rounded-[4px] row-1 size-[24px]" data-name="logo">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-[34px] relative size-full">
          <div className="relative rounded-[100px] shrink-0 size-[20.571px]" data-name="bg">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgBg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="avatar">
      <Logo3 />
    </div>
  );
}

function TeamAvatarEdit6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="_teamAvatar edit">
      <Avatar3 />
    </div>
  );
}

function TeamAvatarEdit7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="teamAvatar edit">
      <TeamAvatarEdit6 />
    </div>
  );
}

function LTitle3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="l-title">
      <LHeader3 />
      <TeamAvatarEdit7 />
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex items-center py-[11px] relative shrink-0" data-name="Cell">
      <LTitle3 />
    </div>
  );
}

function SearchRows3() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[24px] py-[8px] relative shrink-0 w-[820px]" data-name="Search rows">
      <LFile3 />
      <Cell3 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="title">
      <div className="absolute h-[20px] left-[-1px] top-[-2px] w-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <g id="Rectangle 195">
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
          </g>
        </svg>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">wh bathroom.jpg</p>
      </div>
    </div>
  );
}

function Folder4() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.pc328b00} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag12() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Folder4 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">120 Penn Station #302, 11</p>
    </div>
  );
}

function Chats4() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="chats">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="chats">
          <path d={svgPaths.p3132da00} fill="var(--fill-0, #828282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag13() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Chats4 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Tasktag x Headway</p>
    </div>
  );
}

function Calendar4() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="calendar">
          <path clipRule="evenodd" d={svgPaths.p1e630900} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag14() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Calendar4 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Mar 11</p>
    </div>
  );
}

function LTaskInfo4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="l-task info">
      <Tag12 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag13 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag14 />
    </div>
  );
}

function LTask4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="l-task">
      <Title4 />
      <LTaskInfo4 />
    </div>
  );
}

function LFile4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[11px] items-center min-h-px min-w-px relative" data-name="l-file">
      <div className="h-[46px] relative shrink-0 w-[60px]" data-name="image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgImage3} />
        </div>
      </div>
      <LTask4 />
    </div>
  );
}

function LHeader4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="l-header">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">Nightly Team</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.7076">
        <g id="Group">
          <path d={svgPaths.p238a2b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p296cb500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p20214250} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pc919e80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p18c56900} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute contents inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Layer_1">
      <Group2 />
    </div>
  );
}

function Office2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="office">
      <Layer2 />
    </div>
  );
}

function Logo4() {
  return (
    <div className="bg-[#18a87d] col-1 ml-0 mt-0 relative rounded-[4px] row-1 size-[24px]" data-name="logo">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-[34px] relative size-full">
          <Office2 />
        </div>
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="avatar">
      <Logo4 />
    </div>
  );
}

function TeamAvatarEdit8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="_teamAvatar edit">
      <Avatar4 />
    </div>
  );
}

function TeamAvatarEdit9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="teamAvatar edit">
      <TeamAvatarEdit8 />
    </div>
  );
}

function LTitle4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="l-title">
      <LHeader4 />
      <TeamAvatarEdit9 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex items-center py-[11px] relative shrink-0" data-name="Cell">
      <LTitle4 />
    </div>
  );
}

function SearchRows4() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[24px] py-[8px] relative shrink-0 w-[820px]" data-name="Search rows">
      <LFile4 />
      <Cell4 />
    </div>
  );
}

function Xls() {
  return (
    <div className="relative shrink-0 size-[36.6px]" data-name="xls">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6001 36.6001">
        <g clipPath="url(#clip0_348_5694)" id="xls">
          <path d={svgPaths.pd015800} fill="var(--fill-0, #EDEEEF)" id="Vector" />
          <path d={svgPaths.p24bf7c00} fill="var(--fill-0, #B0B7BD)" id="Vector_2" />
          <path d={svgPaths.p3aa2d800} fill="var(--fill-0, #CAD1D8)" id="Vector_3" />
          <path d={svgPaths.p3618fb80} fill="var(--fill-0, #C91E08)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p15d18400} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p386b2700} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p152e0700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
          <path d={svgPaths.p3c896b80} fill="var(--fill-0, #CAD1D8)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_348_5694">
            <rect fill="white" height="36.6001" width="36.6001" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LIcon1() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex h-[48px] items-center justify-center p-[10.4px] relative rounded-[8px] shrink-0 w-[60px]" data-name="l-icon">
      <Xls />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="title">
      <div className="absolute h-[20px] left-[-1px] top-[-2px] w-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <g id="Rectangle 195">
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
          </g>
        </svg>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">w83u498hufer.pdf</p>
      </div>
    </div>
  );
}

function Folder5() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="folder">
          <path clipRule="evenodd" d={svgPaths.pc328b00} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag15() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Folder5 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">114 Maple Avenue, Austin, TX 78701</p>
    </div>
  );
}

function Chats5() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="chats">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="chats">
          <path d={svgPaths.p3132da00} fill="var(--fill-0, #828282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag16() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Chats5 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">TT group chat</p>
    </div>
  );
}

function Calendar5() {
  return (
    <div className="relative shrink-0 size-[14.222px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2222 14.2222">
        <g id="calendar">
          <path clipRule="evenodd" d={svgPaths.p1e630900} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag17() {
  return (
    <div className="bg-[rgba(247,248,250,0)] content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag">
      <Calendar5 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px]">Mar 10</p>
    </div>
  );
}

function LTaskInfo5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="l-task info">
      <Tag15 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag16 />
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #828282)" id="Ellipse 522" r="1.5" />
        </svg>
      </div>
      <Tag17 />
    </div>
  );
}

function LTask5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="l-task">
      <Title5 />
      <LTaskInfo5 />
    </div>
  );
}

function LFile5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[11px] items-center min-h-px min-w-px relative" data-name="l-file">
      <LIcon1 />
      <LTask5 />
    </div>
  );
}

function LHeader5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="l-header">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">
        <p className="css-ew64yg leading-[16px]">Nightly Team</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.7076">
        <g id="Group">
          <path d={svgPaths.p238a2b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p296cb500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p20214250} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pc919e80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p18c56900} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute contents inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Layer_1">
      <Group3 />
    </div>
  );
}

function Office3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="office">
      <Layer3 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="bg-[#18a87d] col-1 ml-0 mt-0 relative rounded-[4px] row-1 size-[24px]" data-name="logo">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-[34px] relative size-full">
          <Office3 />
        </div>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="avatar">
      <Logo5 />
    </div>
  );
}

function TeamAvatarEdit10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="_teamAvatar edit">
      <Avatar5 />
    </div>
  );
}

function TeamAvatarEdit11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="teamAvatar edit">
      <TeamAvatarEdit10 />
    </div>
  );
}

function LTitle5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="l-title">
      <LHeader5 />
      <TeamAvatarEdit11 />
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex items-center py-[11px] relative shrink-0" data-name="Cell">
      <LTitle5 />
    </div>
  );
}

function SearchRows5() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[24px] py-[8px] relative shrink-0 w-[820px]" data-name="Search rows">
      <LFile5 />
      <Cell5 />
    </div>
  );
}

function LList() {
  return (
    <div className="content-stretch flex flex-col h-[586px] items-start relative shrink-0 w-full" data-name="l-list">
      <div className="absolute h-[20px] left-[158px] top-[135px] w-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <g id="Rectangle 195">
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
            <path d="M0 0H14V20H0V0Z" fill="var(--fill-0, #FBE676)" />
          </g>
        </svg>
      </div>
      <SearchRows />
      <SearchRows1 />
      <SearchRows2 />
      <SearchRows3 />
      <SearchRows4 />
      <SearchRows5 />
    </div>
  );
}

function LContent5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="l-content">
      <LTabs />
      <Heading1 />
      <LList />
    </div>
  );
}

export default function Files() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[16px] relative rounded-[16px] size-full" data-name="Files">
      <ModalHeading />
      <SearchBar1 />
      <LContent5 />
    </div>
  );
}