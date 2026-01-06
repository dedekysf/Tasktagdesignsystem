import svgPaths from "./svg-jxuoqelcpm";

function Group() {
  return (
    <div className="absolute inset-[0_0_-0.01%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 16.0011">
        <g id="Group">
          <path d={svgPaths.p30e92600} fill="var(--fill-0, #00D9A5)" id="Vector" />
          <path d={svgPaths.p26b0fb80} fill="var(--fill-0, #00D9A5)" id="Vector_2" />
          <path d={svgPaths.p248ab600} fill="var(--fill-0, #00D9A5)" id="Vector_3" />
          <path d={svgPaths.p4fa4100} fill="var(--fill-0, #00D9A5)" id="Vector_4" />
          <path d={svgPaths.p16630980} fill="var(--fill-0, #00D9A5)" id="Vector_5" />
          <path d={svgPaths.p3be45f00} fill="var(--fill-0, #0A1629)" id="Vector_6" />
          <path d={svgPaths.p268d2080} fill="var(--fill-0, #0A1629)" id="Vector_7" />
          <path d={svgPaths.p31bd1200} fill="var(--fill-0, #0A1629)" id="Vector_8" />
          <path d={svgPaths.p33884500} fill="var(--fill-0, #0A1629)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function LogoApp() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[54px]" data-name="Logo/App">
      <Group />
    </div>
  );
}

function LDirectory() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap" data-name="l-directory">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Tokens</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] relative shrink-0">/</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">Typography</p>
    </div>
  );
}

function LLogo() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="l-logo">
      <LogoApp />
      <LDirectory />
    </div>
  );
}

function LLogo1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="l-logo">
      <LLogo />
    </div>
  );
}

function LTilte() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0" data-name="l-tilte">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[56px] not-italic relative shrink-0 text-[#0a1629] text-[48px] text-nowrap">Typography</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start px-[32px] py-[64px] relative shrink-0 w-[1086px]" data-name="header">
      <LLogo1 />
      <LTilte />
      <div className="h-0 relative shrink-0 w-full" data-name="hr">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1022 1">
            <line id="hr" stroke="var(--stroke-0, #E8E8E8)" x2="1022" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start not-italic p-[64px] relative shrink-0 text-nowrap" data-name="l-container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a1629] text-[16px]">Mobile</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#0a1629] text-[28px]">{`Heading `}</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#0a1629] text-[22px]">{`Heading `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1629] text-[18px]">Large Label</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1629] text-[16px]">Label / emphasized body</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a1629] text-[16px]">Button</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a1629] text-[14px]">{`Label small `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a1629] text-[16px]">{`Body `}</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#138eff] text-[14px] underline">Link</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">{`Secondary body `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a1629] text-[12px]">Metadata</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a1629] text-[10px]">Metadata</p>
    </div>
  );
}

function LContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start not-italic p-[64px] relative shrink-0 text-nowrap" data-name="l-container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a1629] text-[16px]">Web</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[#0a1629] text-[32px]">{`Heading `}</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#0a1629] text-[22px]">{`Heading `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1629] text-[18px]">Large Label</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0a1629] text-[16px]">Label / emphasized body</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a1629] text-[16px]">Button</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a1629] text-[14px]">{`Label small `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a1629] text-[16px]">{`Body `}</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#138eff] text-[14px] underline">Link</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a1629] text-[16px]">{`Secondary body `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a1629] text-[12px]">Metadata</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a1629] text-[10px]">Metadata</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0">
      <LContainer />
      <LContainer1 />
    </div>
  );
}

export default function Typography() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-start justify-center relative size-full" data-name="Typography">
      <Header />
      <Frame />
    </div>
  );
}