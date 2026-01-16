import svgPaths from "./svg-79l6i3jeop";

function AlertTriangle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="alert-triangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="alert-triangle">
          <path clipRule="evenodd" d={svgPaths.p248b66f0} fill="var(--fill-0, #303742)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start not-italic relative w-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1629] text-[18px]">
          <span>{`Access to Team Plan for `}</span>TaskTag Project<span>{` has ended`}</span>
        </p>
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#303742] text-[14px] tracking-[0.28px]">Your access ended on September 17, 2025. Upgrade to a Team plan to use advanced project features.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[51px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <AlertTriangle />
        <Container />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white">Upgrade Now</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[24px] h-[51px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

export default function Alert() {
  return (
    <div className="bg-[#fdf4e0] content-stretch flex flex-col items-start pb-px pt-[16px] px-[16px] relative rounded-[10px] size-full" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#fbbd42] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container2 />
    </div>
  );
}