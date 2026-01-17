import svgPaths from "./svg-n1cd0ikf4";
import imgChatGptImageOct102025022341Am1 from "figma:asset/7cd9aa2d594bd4c7e8917b669e4dc624351b0afe.png";

function Close() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.099px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0987 20">
        <g id="Close">
          <path d={svgPaths.p225690c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="heading">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a1629] text-[18px]">Congratulations!</p>
      <Close />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white">Got It</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="button">
      <ButtonBase />
    </div>
  );
}

function LButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="l-buttons">
      <Button />
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="_Alert">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[24px] py-[16px] relative w-full">
          <Heading />
          <div className="relative shrink-0 size-[150px]" data-name="ChatGPT Image Oct 10, 2025, 02_23_41 AM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageOct102025022341Am1} />
          </div>
          <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[12px] text-center tracking-[0.24px] w-[min-content]">Your subscription to TaskTag Project is valid for 1 year and will automatically renew on September, 17 2026.</p>
          <LButtons />
        </div>
      </div>
    </div>
  );
}

export default function Alert1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Alert">
      <Alert />
    </div>
  );
}