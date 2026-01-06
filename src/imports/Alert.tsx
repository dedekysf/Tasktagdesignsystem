import svgPaths from "./svg-70gpyfuxqk";

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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a1629] text-[18px] text-nowrap">Cancel Invite</p>
      <Close />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="basis-0 bg-black grow min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Cancel Invite</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[125px]" data-name="button">
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
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-[16px] px-[24px] relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)] shrink-0 w-[483px]" data-name="_Alert">
      <Heading />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-full">This will cancel the pending invitation for john.doe@gmail.com.</p>
      <LButtons />
    </div>
  );
}

export default function Alert1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Alert">
      <Alert />
    </div>
  );
}