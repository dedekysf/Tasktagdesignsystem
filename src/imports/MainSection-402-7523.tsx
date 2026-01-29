import svgPaths from "./svg-t6iej6jh96";
import imgImage from "figma:asset/513dd7bc494865ca5a45fb92277a8d681c3397ff.png";
import imgUnsplashT5NXyxCf50I from "figma:asset/3a1636b747e2b8c750f8980cb0b94167080d3a27.png";
import imgImage1 from "figma:asset/7a9694031ea92e6b7b48ca2477d9e9ff5802fc71.png";
import imgImage2 from "figma:asset/a7c9e4ab6c8dce41676bf67741326a6f6c00e046.png";
import imgImage3 from "figma:asset/bd5ae5db281c1524f51f00f0803e6270f32e8284.png";
import imgImage4 from "figma:asset/5e1613842c1dbbf85fc6b4dbcede95e4bbc197ef.png";
import imgImage5 from "figma:asset/2cc3ba92c0a402567bf37e095262f204b3eb3c99.png";

function IconStart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconStart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconStart">
          <path clipRule="evenodd" d={svgPaths.p1c697d80} fill="var(--fill-0, #303742)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="wrapper">
      <IconStart />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[8px]" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="button">
      <ButtonBase />
    </div>
  );
}

function IconStart1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="iconStart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="iconStart">
          <path clipRule="evenodd" d={svgPaths.p1ed18e80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="wrapper">
      <IconStart1 />
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[40px]" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <Wrapper1 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white">New Task</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[122px]" data-name="button">
      <ButtonBase1 />
    </div>
  );
}

function LActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="l-actions">
      <Button />
      <Button1 />
    </div>
  );
}

function HeaderWeb() {
  return (
    <div className="bg-white h-[74px] relative shrink-0 w-full" data-name="Header_web">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[22px] text-black">Global Activity Log</p>
          <LActions />
        </div>
      </div>
    </div>
  );
}

function IconStart2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon--start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon--start">
          <path clipRule="evenodd" d={svgPaths.p1c697d80} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function CInput() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="c-input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <IconStart2 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#828282] text-[14px] text-ellipsis tracking-[0.28px] whitespace-nowrap">Search</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative w-full" data-name="_input">
      <CInput />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start justify-center relative w-full" data-name="input">
      <Input1 />
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_401_4190)" id="filter">
          <g id="Vector" />
          <path d={svgPaths.p1ee01d00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_401_4190">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Filter</p>
      </div>
    </div>
  );
}

function FolderPlus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="folder-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="folder-plus">
          <path clipRule="evenodd" d={svgPaths.p151a780} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center px-[16px] py-[8px] relative rounded-[8px]" data-name="Dropdown">
      <FolderPlus />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Export Timesheet</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
            <div className="-scale-y-100 flex-none w-full">
              <Input />
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <Dropdown />
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <Dropdown1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f7f8fa] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-right">Jan 6, 2026</p>
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

function Trash() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4099)" id="trash-2">
          <path clipRule="evenodd" d={svgPaths.pe345a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4099">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bg-[#f44] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Trash />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">04:00 PM</p>
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
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#e8e8e8] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash />
          <p className="[text-decoration-skip-ink:none] decoration-solid flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] line-through min-h-px min-w-px not-italic overflow-hidden relative text-[#828282] text-[10px] text-ellipsis whitespace-nowrap">Plumbing Inspection</p>
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

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">This task was deleted</p>
      <Tag />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar />
      <Container3 />
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

function Plus() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="plus">
          <path clipRule="evenodd" d={svgPaths.p3d34de00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Plus />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">02:44 PM</p>
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
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#e8e8e8] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash1 />
          <p className="[text-decoration-skip-ink:none] decoration-solid flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] line-through min-h-px min-w-px not-italic overflow-hidden relative text-[#828282] text-[10px] text-ellipsis whitespace-nowrap">Plumbing Inspection</p>
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

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Added `}</span>
        <span className="leading-[16px] text-[#138eff]">@Dedek Yusuf</span>
        <span className="leading-[16px]">{` as Task Assignee`}</span>
      </p>
      <Tag3 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar1 />
      <Container4 />
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="plus">
          <path clipRule="evenodd" d={svgPaths.p3d34de00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Plus1 />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">02:44 PM</p>
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
          <path clipRule="evenodd" d={svgPaths.p137fc20a} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#e8e8e8] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash2 />
          <p className="[text-decoration-skip-ink:none] decoration-solid flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] line-through min-h-px min-w-px not-italic overflow-hidden relative text-[#828282] text-[10px] text-ellipsis whitespace-nowrap">Plumbing Inspection</p>
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

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Created this task</p>
      <Tag6 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar2 />
      <Container5 />
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function RotateCcw() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="rotate-ccw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4166)" id="rotate-ccw">
          <path clipRule="evenodd" d={svgPaths.p2d4db3f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4166">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <RotateCcw />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">01:44 PM</p>
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

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Restored this task</p>
      <Tag9 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar3 />
      <Container6 />
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p3fe3ebb0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute bg-[#18a87d] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Check />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">01:44 PM</p>
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

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <LHeader4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Completed this task</p>
      <Tag12 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar4 />
      <Container7 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Container2 />
    </div>
  );
}

function Frame3() {
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

function AvatarMd5() {
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

function Icon5() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image />
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

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
      <FilesMediaMobile />
      <Tag15 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar5 />
      <Container9 />
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

function Icon6() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image1 />
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

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
      <FilesMediaMobile1 />
      <Tag18 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar6 />
      <Container10 />
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

function Icon7() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image2 />
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

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
      <FilesMediaMobile2 />
      <Tag21 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar7 />
      <Container11 />
    </div>
  );
}

function AvatarMd8() {
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

function Icon8() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image3 />
    </div>
  );
}

function Avatar8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd8 />
      <Icon8 />
    </div>
  );
}

function LHeader8() {
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

function Folder8() {
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

function Tag25() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder8 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag25 />
    </div>
  );
}

function Hash8() {
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

function Tag26() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash8 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag26 />
    </div>
  );
}

function Tag24() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project16 />
      <Project17 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
      <FilesMediaMobile3 />
      <Tag24 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar8 />
      <Container12 />
    </div>
  );
}

function AvatarMd9() {
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

function Icon9() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image4 />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd9 />
      <Icon9 />
    </div>
  );
}

function LHeader9() {
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

function Folder9() {
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

function Tag28() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder9 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag28 />
    </div>
  );
}

function Hash9() {
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

function Tag29() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash9 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag29 />
    </div>
  );
}

function Tag27() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project18 />
      <Project19 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and sink document</p>
      <FilesMediaMobile4 />
      <Tag27 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar9 />
      <Container13 />
    </div>
  );
}

function AvatarMd10() {
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

function Icon10() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image5 />
    </div>
  );
}

function Avatar10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd10 />
      <Icon10 />
    </div>
  );
}

function LHeader10() {
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

function Folder10() {
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

function Tag31() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder10 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag31 />
    </div>
  );
}

function Hash10() {
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

function Tag32() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash10 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag32 />
    </div>
  );
}

function Tag30() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project20 />
      <Project21 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader10 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and their motifs</p>
      <FilesMediaMobile5 />
      <Tag30 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar10 />
      <Container14 />
    </div>
  );
}

function AvatarMd11() {
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

function Icon11() {
  return (
    <div className="absolute bg-[#18a87d] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[133.333px] size-[16px] top-[24px]" data-name="Icon">
      <Location />
    </div>
  );
}

function Avatar11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd11 />
      <Icon11 />
    </div>
  );
}

function LHeader11() {
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

function Folder11() {
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

function Tag34() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder11 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag34 />
    </div>
  );
}

function Hash11() {
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

function Tag35() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash11 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag35 />
    </div>
  );
}

function Tag33() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project22 />
      <Project23 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader11 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">I’m ready to work</p>
      <Map />
      <Tag33 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar11 />
      <Container15 />
    </div>
  );
}

function AvatarMd12() {
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

function Icon12() {
  return (
    <div className="absolute bg-[#f44] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[133.333px] size-[16px] top-[24px]" data-name="Icon">
      <Location1 />
    </div>
  );
}

function Avatar12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd12 />
      <Icon12 />
    </div>
  );
}

function LHeader12() {
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

function Folder12() {
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

function Tag37() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder12 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag37 />
    </div>
  );
}

function Hash12() {
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

function Tag38() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash12 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag38 />
    </div>
  );
}

function Tag36() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project24 />
      <Project25 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <LHeader12 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">I’m ready to work</p>
      <Map2 />
      <Tag36 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar12 />
      <Container16 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame3 />
      <Container8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f7f8fa] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-right">Jan 4, 2026</p>
        </div>
      </div>
    </div>
  );
}

function AvatarMd13() {
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

function Check1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p3fe3ebb0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute bg-[#18a87d] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Check1 />
    </div>
  );
}

function Avatar13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd13 />
      <Icon13 />
    </div>
  );
}

function LHeader13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">01:44 PM</p>
    </div>
  );
}

function Folder13() {
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

function Tag40() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder13 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag40 />
    </div>
  );
}

function Hash13() {
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

function Tag41() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash13 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag41 />
    </div>
  );
}

function Tag39() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project26 />
      <Project27 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader13 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Completed this task</p>
      <Tag39 />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar13 />
      <Container18 />
    </div>
  );
}

function AvatarMd14() {
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

function UserMinus() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="user-minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4197)" id="user-minus">
          <path clipRule="evenodd" d={svgPaths.p345372f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4197">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute bg-[#f44] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserMinus />
    </div>
  );
}

function Avatar14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd14 />
      <Icon14 />
    </div>
  );
}

function LHeader14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:20 AM</p>
    </div>
  );
}

function Folder14() {
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

function Tag43() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder14 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag43 />
    </div>
  );
}

function Hash14() {
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

function Tag44() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash14 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag44 />
    </div>
  );
}

function Tag42() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project28 />
      <Project29 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Unassigned `}</span>
        <span className="leading-[16px] text-[#138eff]">@Gerald Oliver</span>
        <span className="leading-[16px]">{` from this task`}</span>
      </p>
      <Tag42 />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar14 />
      <Container19 />
    </div>
  );
}

function AvatarMd15() {
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

function UserPlus() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="user-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4187)" id="user-plus">
          <path clipRule="evenodd" d={svgPaths.p1b518b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4187">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserPlus />
    </div>
  );
}

function Avatar15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd15 />
      <Icon15 />
    </div>
  );
}

function LHeader15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">08:44 AM</p>
    </div>
  );
}

function Folder15() {
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

function Tag46() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder15 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag46 />
    </div>
  );
}

function Hash15() {
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

function Tag47() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash15 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag47 />
    </div>
  );
}

function Tag45() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project30 />
      <Project31 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader15 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Added `}</span>
        <span className="leading-[16px] text-[#138eff]">@Dedek Yusuf</span>
        <span className="leading-[16px]">{` as Task Assignee`}</span>
      </p>
      <Tag45 />
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar15 />
      <Container20 />
    </div>
  );
}

function AvatarMd16() {
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

function Plus2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="plus">
          <path clipRule="evenodd" d={svgPaths.p3d34de00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Plus2 />
    </div>
  );
}

function Avatar16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd16 />
      <Icon16 />
    </div>
  );
}

function LHeader16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">08:44 AM</p>
    </div>
  );
}

function Folder16() {
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

function Tag49() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder16 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag49 />
    </div>
  );
}

function Hash16() {
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

function Tag50() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="_tag">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Hash16 />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">Foundation Inspection</p>
        </div>
      </div>
    </div>
  );
}

function Project33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="Project">
      <Tag50 />
    </div>
  );
}

function Tag48() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project32 />
      <Project33 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <LHeader16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Created this task</p>
      <Tag48 />
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar16 />
      <Container21 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Item13 />
      <Item14 />
      <Item15 />
      <Item16 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Container17 />
    </div>
  );
}

function Frame8() {
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

function AvatarMd17() {
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

function Image6() {
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

function Icon17() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image6 />
    </div>
  );
}

function Avatar17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd17 />
      <Icon17 />
    </div>
  );
}

function LHeader17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:20 AM</p>
    </div>
  );
}

function Pdf10() {
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

function Doc10() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[118px]" data-name="doc">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Pdf10 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a1629] text-[10px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">first_draft_kitchen_sink.pdf</p>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <div className="relative rounded-[8px] shrink-0 size-[118px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <Doc10 />
    </div>
  );
}

function FilesMediaMobile6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Files & Media Mobile">
      <Row6 />
    </div>
  );
}

function Folder17() {
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

function Tag52() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder17 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag52 />
    </div>
  );
}

function Tag51() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project34 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader17 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and their motifs</p>
      <FilesMediaMobile6 />
      <Tag51 />
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar17 />
      <Container23 />
    </div>
  );
}

function AvatarMd18() {
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

function Image7() {
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

function Icon18() {
  return (
    <div className="absolute bg-[#fc7f5b] content-stretch flex gap-[3.636px] items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Image7 />
    </div>
  );
}

function Avatar18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd18 />
      <Icon18 />
    </div>
  );
}

function LHeader18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:00 AM</p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="row">
      <div className="flex-[1_0_0] h-[120px] min-h-px min-w-px relative rounded-[8px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function FilesMediaMobile7() {
  return (
    <div className="content-stretch flex flex-col h-[118px] items-start relative shrink-0 w-[248px]" data-name="Files & Media Mobile">
      <Row7 />
    </div>
  );
}

function Folder18() {
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

function Tag54() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder18 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag54 />
    </div>
  );
}

function Tag53() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tag">
      <Project35 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <LHeader18 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Preview of abstract buildings and their motifs</p>
      <FilesMediaMobile7 />
      <Tag53 />
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar18 />
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Item17 />
      <Item18 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame8 />
      <Container22 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f7f8fa] h-[32px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-right">Dec 29, 2025</p>
        </div>
      </div>
    </div>
  );
}

function AvatarMd19() {
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

function RotateCcw1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="rotate-ccw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4166)" id="rotate-ccw">
          <path clipRule="evenodd" d={svgPaths.p2d4db3f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4166">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <RotateCcw1 />
    </div>
  );
}

function Avatar19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd19 />
      <Icon19 />
    </div>
  );
}

function LHeader19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">04:55 PM</p>
    </div>
  );
}

function Folder19() {
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

function Tag56() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder19 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag56 />
    </div>
  );
}

function Tag55() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project36 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader19 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Restored this project</p>
      <Tag55 />
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar19 />
      <Container26 />
    </div>
  );
}

function AvatarMd20() {
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

function Folder20() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4184)" id="folder">
          <path clipRule="evenodd" d={svgPaths.p2b066200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4184">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute bg-[#828282] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Folder20 />
    </div>
  );
}

function Avatar20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd20 />
      <Icon20 />
    </div>
  );
}

function LHeader20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">04:50 PM</p>
    </div>
  );
}

function Folder21() {
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

function Tag58() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder21 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag58 />
    </div>
  );
}

function Tag57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project37 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader20 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Archived this project</p>
      <Tag57 />
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar20 />
      <Container27 />
    </div>
  );
}

function AvatarMd21() {
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

function Edit() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="edit-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="edit-3">
          <path clipRule="evenodd" d={svgPaths.p1032c870} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Edit />
    </div>
  );
}

function Avatar21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd21 />
      <Icon21 />
    </div>
  );
}

function LHeader21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">04:40 PM</p>
    </div>
  );
}

function Folder22() {
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

function Tag60() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder22 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag60 />
    </div>
  );
}

function Tag59() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project38 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader21 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Project description has been updated</p>
      <Tag59 />
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar21 />
      <Container28 />
    </div>
  );
}

function AvatarMd22() {
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

function Edit1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="edit-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="edit-3">
          <path clipRule="evenodd" d={svgPaths.p1032c870} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Edit1 />
    </div>
  );
}

function Avatar22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd22 />
      <Icon22 />
    </div>
  );
}

function LHeader22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">04:32 PM</p>
    </div>
  );
}

function Folder23() {
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

function Tag62() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder23 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag62 />
    </div>
  );
}

function Tag61() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project39 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader22 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[0px] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Project location: `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px]">1520 Oliver Street</span>
      </p>
      <Tag61 />
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar22 />
      <Container29 />
    </div>
  );
}

function AvatarMd23() {
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

function Edit2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="edit-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="edit-3">
          <path clipRule="evenodd" d={svgPaths.p1032c870} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Edit2 />
    </div>
  );
}

function Avatar23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd23 />
      <Icon23 />
    </div>
  );
}

function LHeader23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">02:40 PM</p>
    </div>
  );
}

function Folder24() {
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

function Tag64() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder24 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag64 />
    </div>
  );
}

function Tag63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project40 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader23 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`Project name has been updated `}</p>
        <p className="mb-0">
          <span className="leading-[20px]">{`from `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">{`1520 Oliver Street Residential Construction `}</span>
        </p>
        <p>
          <span className="leading-[20px]">{`to `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">1320 Smith Street Residential</span>
        </p>
      </div>
      <Tag63 />
    </div>
  );
}

function Item23() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar23 />
      <Container30 />
    </div>
  );
}

function AvatarMd24() {
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

function Edit3() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="edit-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="edit-3">
          <path clipRule="evenodd" d={svgPaths.p1032c870} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Edit3 />
    </div>
  );
}

function Avatar24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd24 />
      <Icon24 />
    </div>
  );
}

function LHeader24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">02:33 PM</p>
    </div>
  );
}

function Folder25() {
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

function Tag66() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder25 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag66 />
    </div>
  );
}

function Tag65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project41 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader24 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[0px] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Changed `}</span>
        <span className="leading-[16px] text-[#138eff]">@Dedek Yusuf</span>
        <span className="leading-[16px]">{` role from `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px]">Admin</span>
        <span className="leading-[16px]">{` to `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px]">Editor</span>
      </p>
      <Tag65 />
    </div>
  );
}

function Item24() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar24 />
      <Container31 />
    </div>
  );
}

function AvatarMd25() {
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

function UserMinus1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="user-minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4197)" id="user-minus">
          <path clipRule="evenodd" d={svgPaths.p345372f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4197">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute bg-[#f44] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserMinus1 />
    </div>
  );
}

function Avatar25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd25 />
      <Icon25 />
    </div>
  );
}

function LHeader25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">01:22 PM</p>
    </div>
  );
}

function Folder26() {
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

function Tag68() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder26 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag68 />
    </div>
  );
}

function Tag67() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project42 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader25 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Unassigned `}</span>
        <span className="leading-[16px] text-[#138eff]">@Will Smith</span>
        <span className="leading-[16px]">{` from this project`}</span>
      </p>
      <Tag67 />
    </div>
  );
}

function Item25() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar25 />
      <Container32 />
    </div>
  );
}

function AvatarMd26() {
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

function UserPlus1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="user-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4187)" id="user-plus">
          <path clipRule="evenodd" d={svgPaths.p1b518b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4187">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserPlus1 />
    </div>
  );
}

function Avatar26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd26 />
      <Icon26 />
    </div>
  );
}

function LHeader26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">01:20 PM</p>
    </div>
  );
}

function Folder27() {
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

function Tag70() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder27 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag70 />
    </div>
  );
}

function Tag69() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project43 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader26 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Added `}</span>
        <span className="leading-[16px] text-[#138eff]">@Dedek Yusuf</span>
        <span className="leading-[16px]">{` as Project Editor`}</span>
      </p>
      <Tag69 />
    </div>
  );
}

function Item26() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar26 />
      <Container33 />
    </div>
  );
}

function AvatarMd27() {
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

function UserPlus2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="user-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_401_4187)" id="user-plus">
          <path clipRule="evenodd" d={svgPaths.p1b518b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4187">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserPlus2 />
    </div>
  );
}

function Avatar27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd27 />
      <Icon27 />
    </div>
  );
}

function LHeader27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">12:20 PM</p>
    </div>
  );
}

function Folder28() {
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

function Tag72() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder28 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag72 />
    </div>
  );
}

function Tag71() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project44 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader27 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Added `}</span>
        <span className="leading-[16px] text-[#138eff]">@Tristan Enver Valerio</span>
        <span className="leading-[16px]">{` as Project Owner`}</span>
      </p>
      <Tag71 />
    </div>
  );
}

function Item27() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar27 />
      <Container34 />
    </div>
  );
}

function AvatarMd28() {
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

function Plus3() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="plus">
          <path clipRule="evenodd" d={svgPaths.p3d34de00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Plus3 />
    </div>
  );
}

function Avatar28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative self-stretch shrink-0" data-name="Avatar">
      <AvatarMd28 />
      <Icon28 />
    </div>
  );
}

function LHeader28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic pb-[4px] relative shrink-0 w-full" data-name="l-header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">12:20 PM</p>
    </div>
  );
}

function Folder29() {
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

function Tag74() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder29 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag74 />
    </div>
  );
}

function Tag73() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project45 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <LHeader28 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Created this project</p>
      <Tag73 />
    </div>
  );
}

function Item28() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar28 />
      <Container35 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Item19 />
      <Item20 />
      <Item21 />
      <Item22 />
      <Item23 />
      <Item24 />
      <Item25 />
      <Item26 />
      <Item27 />
      <Item28 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame10 />
      <Container25 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1114px]" data-name="Container">
      <Frame2 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Header />
        </div>
      </div>
      <Container1 />
    </div>
  );
}

export default function MainSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Main section">
      <HeaderWeb />
      <Container />
    </div>
  );
}