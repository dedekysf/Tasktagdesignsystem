import svgPaths from "./svg-78p0olr82q";
import imgImage from "figma:asset/513dd7bc494865ca5a45fb92277a8d681c3397ff.png";

function Frame() {
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

function Icon() {
  return (
    <div className="absolute bg-[#18a87d] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Check />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">01:44 PM</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Completed this task</p>
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

function Icon1() {
  return (
    <div className="absolute bg-[#f44] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserMinus />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">11:20 AM</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Unassigned `}</span>
        <span className="leading-[16px] text-[#138eff]">@Gerald Oliver</span>
        <span className="leading-[16px]">{` from this task`}</span>
      </p>
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

function Icon2() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserPlus />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">08:44 AM</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Added `}</span>
        <span className="leading-[16px] text-[#138eff]">@Dedek Yusuf</span>
        <span className="leading-[16px]">{` as Task Assignee`}</span>
      </p>
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

function Icon3() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Plus />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">08:44 AM</p>
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
      <LHeader3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Created this task</p>
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

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
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