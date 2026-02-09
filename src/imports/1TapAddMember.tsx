import svgPaths from "./svg-zhlscdp58k";
import imgBg from "figma:asset/13f12271db9a10bddbd63600d506f8cb6529da08.png";

function Helmet() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="helmet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="helmet">
          <path d={svgPaths.p2e410d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="icon">
      <Helmet />
    </div>
  );
}

function LName() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="l-Name">
      <Icon />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-white">
        <p className="leading-[24px] whitespace-pre-wrap">Raintree Hollow</p>
      </div>
    </div>
  );
}

function LAddress() {
  return (
    <div className="relative shrink-0 w-full" data-name="l-address">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[33px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic opacity-90 overflow-hidden relative text-[12px] text-ellipsis text-white whitespace-nowrap">
            <p className="leading-[16px] overflow-hidden">11 N Raintree Hollow Ln, Houston, Texas 77027, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start relative shrink-0 w-[310px]" data-name="l-title">
      <LName />
      <LAddress />
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[24px]" data-name="logo">
      <div className="relative rounded-[8px] shrink-0 size-[14px]" data-name="bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[150.91%] left-[-25%] max-w-none top-[-25.46%] w-[150%]" src={imgBg} />
        </div>
      </div>
    </div>
  );
}

function TagTeam() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag Team">
      <Logo />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Aquaworks Construct...</p>
    </div>
  );
}

function AvatarSm() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar/sm">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill="var(--fill-0, #CC7351)" id="bg" r="12" />
      </svg>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%+0.4px)] not-italic text-[12px] text-center text-white top-[calc(50%-8px)] tracking-[0.24px]">AS</p>
    </div>
  );
}

function TagOwner() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="_tag Owner">
      <AvatarSm />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Alex Smith</p>
    </div>
  );
}

function LTags() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="l-tags">
      <TagTeam />
      <TagOwner />
    </div>
  );
}

function LProjectDetailsCard() {
  return (
    <div className="bg-[#7b61ff] relative rounded-[8px] shrink-0 w-full" data-name="l-Project Details Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
          <LTitle />
          <LTags />
        </div>
      </div>
    </div>
  );
}

function LTitle1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[311px]" data-name="l-title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[16px] text-black">Description</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] text-center">See More</p>
    </div>
  );
}

function Members() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Members">
      <div className="content-stretch flex flex-col gap-[12px] items-start not-italic px-[15px] py-[16px] relative w-full">
        <LTitle1 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[#303742] text-[12px] text-ellipsis tracking-[0.24px] w-[min-content] whitespace-pre-wrap">This project involves a full residential home renovation aimed at improving functionality, comfort, safety, and visual appeal of the property. The scope includes initial assessment and planning, demolition of selected areas, structural adjustments, electrical and plumbing upgrades, flooring and wall finishing, cabinetry installation, painting, and final quality inspection. The project requires close coordination between contractors, suppliers, designers, and homeowners to ensure work is completed according to specifications, budget, and timeline. All tasks, files, approvals, progress updates, and communication will be managed within this project to maintain transparency, minimize delays, and ensure a smooth renovation process from start to handover.</p>
      </div>
    </div>
  );
}

function LTitle2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center not-italic relative shrink-0 w-full" data-name="l-title">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] min-h-px min-w-px relative text-[16px] text-black whitespace-pre-wrap">Member (1)</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] text-center">See All</p>
    </div>
  );
}

function UserPlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="user-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user-plus">
          <path clipRule="evenodd" d={svgPaths.p25235600} fill="var(--fill-0, #303742)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="wrapper">
      <UserPlus />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] min-h-px min-w-px relative rounded-[40px] self-stretch" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[56px]" data-name="button">
      <ButtonBase />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[56px]">
      <Button />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#828282] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">Invite</p>
    </div>
  );
}

function AvatarXl() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Avatar/XL">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" fill="var(--fill-0, #CC7351)" id="bg" r="28" />
      </svg>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[calc(50%+0.4px)] not-italic text-[28px] text-center text-white top-[calc(50%-16px)]">AS</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[56px]">
      <AvatarXl />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#828282] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">Alex Smith</p>
    </div>
  );
}

function Members2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="members">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Members1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Members">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[15px] relative w-full">
        <LTitle2 />
        <Members2 />
      </div>
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-text">
          <path clipRule="evenodd" d={svgPaths.p2cc4bf00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[6px] shrink-0" data-name="icon">
      <FileText />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[16px] text-black">Checklist</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[#303742] text-[12px] text-ellipsis w-[min-content] whitespace-pre-wrap">Start faster with a project template.</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative" data-name="Title">
      <Icon1 />
      <Frame2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.pcdb3800} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function LTitle3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="l-Title">
      <Title />
      <Icon2 />
    </div>
  );
}

function Tasks() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Tasks">
      <div className="content-stretch flex flex-col items-start p-[15px] relative w-full">
        <LTitle3 />
      </div>
    </div>
  );
}

function Hash() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="hash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="hash">
          <path clipRule="evenodd" d={svgPaths.p39148100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[6px] shrink-0" data-name="icon">
      <Hash />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <Icon3 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[16px] text-black">Tasks</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.pcdb3800} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function LTitle4() {
  return (
    <div className="content-stretch flex gap-[201px] items-center relative shrink-0" data-name="l-Title">
      <Title1 />
      <Icon4 />
    </div>
  );
}

function Tasks1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Tasks">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[15px] relative w-full">
        <LTitle4 />
      </div>
    </div>
  );
}

function Zap() {
  return (
    <div className="h-[19.583px] relative shrink-0 w-[20px]" data-name="zap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.5833">
        <g id="zap">
          <path clipRule="evenodd" d={svgPaths.p13b03580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip p-[6px] relative rounded-[6px] shrink-0" data-name="icon">
      <Zap />
    </div>
  );
}

function LText() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[16px] text-black">Activity Log</p>
    </div>
  );
}

function LLeft() {
  return (
    <div className="content-stretch flex h-[20.563px] items-center relative shrink-0" data-name="l-left">
      <LText />
    </div>
  );
}

function Log() {
  return (
    <div className="bg-white flex-[1_0_0] h-[95px] min-h-px min-w-px relative rounded-[8px]" data-name="Log">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pl-[15px] pr-[49px] py-[15px] relative size-full">
          <Icon5 />
          <LLeft />
        </div>
      </div>
    </div>
  );
}

function IcFileImage() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic_file-image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic_file-image">
          <path d={svgPaths.pca3d6f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-black content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[6px] relative rounded-[6px] shrink-0" data-name="icon">
      <IcFileImage />
    </div>
  );
}

function Media() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Media">
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[15px] pr-[49px] py-[15px] relative w-full">
        <Icon6 />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[16px] text-black">{`Files & Media`}</p>
      </div>
    </div>
  );
}

function LogMedia() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Log/media">
      <Log />
      <Media />
    </div>
  );
}

function LProjectCard() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[675px] items-center relative shrink-0 w-full" data-name="l-project card">
      <LProjectDetailsCard />
      <Members />
      <Members1 />
      <Tasks />
      <Tasks1 />
      <LogMedia />
    </div>
  );
}

function LContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[675px] items-center left-[16px] top-[104px] w-[342px]" data-name="l-content">
      <LProjectCard />
    </div>
  );
}

function IconStart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconStart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconStart">
          <path clipRule="evenodd" d={svgPaths.p1bc1c800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[156px] shrink-0" data-name="_buttonEdit">
      <IconStart />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">New Update</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bottom-[40px] content-stretch flex items-start right-[17px]" data-name="Button">
      <ButtonEdit />
    </div>
  );
}

function Bar() {
  return (
    <div className="absolute bg-white bottom-0 h-[24px] left-[0.13%] overflow-clip right-[-0.13%]" data-name="bar">
      <div className="-translate-x-1/2 absolute bg-[#303742] bottom-[9px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Line" />
    </div>
  );
}

function Action() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[19.89px] top-[calc(50%+2px)]" data-name="Action">
      <p className="-translate-x-1/2 absolute font-['Roboto:Black',sans-serif] font-black leading-[20px] left-[46.89px] text-[15px] text-black text-center top-[calc(50%-8px)] w-[54px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-y-1/2 absolute contents right-[14px] top-[calc(50%-0.48px)]" data-name="Battery">
      <div className="-translate-y-1/2 absolute h-[10.728px] right-[14px] top-[calc(50%-0.48px)] w-[22.854px]" data-name="Rectangle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8545 10.7275">
          <path d={svgPaths.p4fc900} fill="var(--fill-0, black)" id="Rectangle" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute bg-black h-[7.152px] right-[18.2px] rounded-[1.6px] top-[calc(50%-0.48px)] w-[16.791px]" data-name="Rectangle" />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute contents right-[14px] top-[calc(50%-0.48px)]" data-name="Container">
      <Battery />
      <div className="-translate-y-1/2 absolute h-[9.981px] right-[60.55px] top-[calc(50%-0.44px)] w-[15.951px]" data-name="Combined Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9512 9.98145">
          <path d={svgPaths.p293f6dc0} fill="var(--fill-0, black)" id="Combined Shape" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[10.315px] right-[41.52px] top-[calc(50%-0.46px)] w-[14.366px]" data-name="Wi-Fi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3657 10.3146">
          <path clipRule="evenodd" d={svgPaths.p3e12e7f0} fill="var(--fill-0, black)" fillRule="evenodd" id="Wi-Fi" />
        </svg>
      </div>
    </div>
  );
}

function StatusDefaultWhite() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Status / Default - White">
      <Action />
      <Container />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p1281c00} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Toucharea() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="toucharea">
      <Icon7 />
    </div>
  );
}

function LText1() {
  return (
    <div className="content-stretch flex flex-col h-[43px] items-start justify-center relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a1629] text-[18px] text-center">Project Details</p>
    </div>
  );
}

function LContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="l-content">
      <LText1 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p54c3100} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="icon">
      <Icon9 />
    </div>
  );
}

function LGroup() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="l-group">
      <Toucharea />
      <LContent2 />
      <Icon8 />
    </div>
  );
}

function LContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px px-[16px] relative w-[375px]" data-name="l-content">
      <LGroup />
    </div>
  );
}

function LHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="l-header">
      <LContent1 />
      <div className="h-0 relative shrink-0 w-[375px]" data-name="divider">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 0.5">
            <path d="M0 0.25H375" id="divider" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[88px] items-start left-0 top-0 w-[375px]" data-name="Header">
      <StatusDefaultWhite />
      <LHeader />
    </div>
  );
}

function Component4DirectToProjectDetail() {
  return (
    <div className="absolute bg-[#f7f8fa] h-[812px] left-0 overflow-clip top-0 w-[375px]" data-name="4. Direct to project detail">
      <LContent />
      <Button1 />
      <Bar />
      <Header />
    </div>
  );
}

export default function Component1TapAddMember() {
  return (
    <div className="relative size-full" data-name="1. Tap add member">
      <Component4DirectToProjectDetail />
    </div>
  );
}