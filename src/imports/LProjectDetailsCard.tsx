import svgPaths from "./svg-xso2p07qcn";
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

export default function LProjectDetailsCard() {
  return (
    <div className="bg-[#7b61ff] content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative rounded-[8px] size-full" data-name="l-Project Details Card">
      <LTitle />
      <LTags />
    </div>
  );
}