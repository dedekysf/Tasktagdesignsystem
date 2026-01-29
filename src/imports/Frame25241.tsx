import svgPaths from "./svg-rm39qo6qyz";
import imgImage from "figma:asset/513dd7bc494865ca5a45fb92277a8d681c3397ff.png";

function Frame() {
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

function Icon() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <RotateCcw />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">04:55 PM</p>
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
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Restored this project</p>
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

function Folder1() {
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

function Icon1() {
  return (
    <div className="absolute bg-[#828282] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Folder1 />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">04:50 PM</p>
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

function Tag3() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder2 />
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
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Archived this project</p>
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

function Icon2() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Edit />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">04:40 PM</p>
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

function Tag5() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder3 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag5 />
    </div>
  );
}

function Tag4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Project description has been updated</p>
      <Tag4 />
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

function Icon3() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Edit1 />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">04:32 PM</p>
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

function Tag7() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder4 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag7 />
    </div>
  );
}

function Tag6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[0px] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Project location: `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px]">1520 Oliver Street</span>
      </p>
      <Tag6 />
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

function Icon4() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Edit2 />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">02:40 PM</p>
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

function Tag9() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder5 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1320 Smith Street Residential</p>
    </div>
  );
}

function Project4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag9 />
    </div>
  );
}

function Tag8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader4 />
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
      <Tag8 />
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

function Icon5() {
  return (
    <div className="absolute bg-[#303742] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Edit3 />
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">02:33 PM</p>
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

function Tag11() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder6 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag11 />
    </div>
  );
}

function Tag10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[0px] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Changed `}</span>
        <span className="leading-[16px] text-[#138eff]">@Dedek Yusuf</span>
        <span className="leading-[16px]">{` role from `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px]">Admin</span>
        <span className="leading-[16px]">{` to `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px]">Editor</span>
      </p>
      <Tag10 />
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

function Icon6() {
  return (
    <div className="absolute bg-[#f44] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserMinus />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">01:22 PM</p>
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

function Tag13() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder7 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag13 />
    </div>
  );
}

function Tag12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Unassigned `}</span>
        <span className="leading-[16px] text-[#138eff]">@Will Smith</span>
        <span className="leading-[16px]">{` from this project`}</span>
      </p>
      <Tag12 />
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

function Icon7() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserPlus />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">01:20 PM</p>
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

function Tag15() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder8 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag15 />
    </div>
  );
}

function Tag14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Added `}</span>
        <span className="leading-[16px] text-[#138eff]">@Dedek Yusuf</span>
        <span className="leading-[16px]">{` as Project Editor`}</span>
      </p>
      <Tag14 />
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

function AvatarMd8() {
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

function Icon8() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <UserPlus1 />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">12:20 PM</p>
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

function Tag17() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder9 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag17 />
    </div>
  );
}

function Tag16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LHeader8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[16px]">{`Added `}</span>
        <span className="leading-[16px] text-[#138eff]">@Tristan Enver Valerio</span>
        <span className="leading-[16px]">{` as Project Owner`}</span>
      </p>
      <Tag16 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar8 />
      <Container9 />
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

function Icon9() {
  return (
    <div className="absolute bg-[#138eff] content-stretch flex items-center justify-center p-[2px] right-0 rounded-[100px] size-[16px] top-[24px]" data-name="Icon">
      <Plus />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#303742] text-[16px]">Tristan Enver Valerio</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#828282] text-[12px] whitespace-pre-wrap">12:20 PM</p>
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

function Tag19() {
  return (
    <div className="bg-[#18a87d] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 w-[128px]" data-name="_tag">
      <Folder10 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[12px] min-h-px min-w-px not-italic overflow-hidden relative text-[10px] text-ellipsis text-white whitespace-nowrap">1520 Oliver Street Residential Construction</p>
    </div>
  );
}

function Project9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Project">
      <Tag19 />
    </div>
  );
}

function Tag18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <Project9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-[20px] pt-[8px] relative" data-name="Container">
      <LHeader9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-[min-content] whitespace-pre-wrap">Created this project</p>
      <Tag18 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[1082px]" data-name="Item">
      <Avatar9 />
      <Container10 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
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