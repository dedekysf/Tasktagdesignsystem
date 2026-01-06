import svgPaths from "./svg-glyhd4x7fk";

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
          <path d={svgPaths.p3be45f00} fill="var(--fill-0, #303742)" id="Vector_6" />
          <path d={svgPaths.p268d2080} fill="var(--fill-0, #303742)" id="Vector_7" />
          <path d={svgPaths.p31bd1200} fill="var(--fill-0, #303742)" id="Vector_8" />
          <path d={svgPaths.p33884500} fill="var(--fill-0, #303742)" id="Vector_9" />
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
    <div className="content-stretch flex gap-[8px] items-center leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-nowrap" data-name="l-directory">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Tokens</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] relative shrink-0">/</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">Color Palette</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[56px] not-italic relative shrink-0 text-[48px] text-black text-nowrap">Color Palette</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start px-[32px] py-[64px] relative w-full">
          <LLogo1 />
          <LTilte />
          <div className="h-0 relative shrink-0 w-full" data-name="hr">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1006 1">
                <line id="hr" stroke="var(--stroke-0, #E8E8E8)" x2="1006" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#00d9a5] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">00D9A5</p>
    </div>
  );
}

function Color() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="Color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#303742] text-[32px] text-nowrap">Brand Green</p>
      <LContent />
    </div>
  );
}

function LContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#18a87d] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">18A87D</p>
    </div>
  );
}

function Color1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="Color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#303742] text-[32px] text-nowrap">Secondary Green</p>
      <LContent1 />
    </div>
  );
}

function LContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#035b60] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[#303742] text-[24px] text-center tracking-[-0.264px] w-[311px]">035B60</p>
    </div>
  );
}

function Color2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="Color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#303742] text-[32px] text-nowrap">Dark Green</p>
      <LContent2 />
    </div>
  );
}

function LContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#fbbd42] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">FBBD42</p>
    </div>
  );
}

function Color3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="Color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#303742] text-[32px] text-nowrap">Vivid Yellow</p>
      <LContent3 />
    </div>
  );
}

function LContent4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#f44] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">FF4444</p>
    </div>
  );
}

function Color4() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="Color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#303742] text-[32px] text-nowrap">Alert Red</p>
      <LContent4 />
    </div>
  );
}

function LContent5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#0a1629] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">0A1629</p>
    </div>
  );
}

function Color5() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="Color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#303742] text-[32px] text-nowrap">Text Primary</p>
      <LContent5 />
    </div>
  );
}

function LContent6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#303742] h-[257px] opacity-70 rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">303742</p>
    </div>
  );
}

function Color6() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="Color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#303742] text-[32px] text-nowrap">Text Secondary</p>
      <LContent6 />
    </div>
  );
}

function LContent7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#1572a1] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">1572A1</p>
    </div>
  );
}

function Color7() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Pastel / Blue</p>
      <LContent7 />
    </div>
  );
}

function LContent8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#655d8a] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">655D8A</p>
    </div>
  );
}

function Color8() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Pastel / Purple</p>
      <LContent8 />
    </div>
  );
}

function LContent9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#a85796] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">A85796</p>
    </div>
  );
}

function Color9() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Pastel / magenta</p>
      <LContent9 />
    </div>
  );
}

function LContent10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#cc7351] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">CC7351</p>
    </div>
  );
}

function Color10() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Pastel / Orange</p>
      <LContent10 />
    </div>
  );
}

function LContent11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#e6b566] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">E6B566</p>
    </div>
  );
}

function Color11() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Pastel / Yellow</p>
      <LContent11 />
    </div>
  );
}

function LContent12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#fbe676] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">FBE676</p>
    </div>
  );
}

function Color12() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Bright Yellow</p>
      <LContent12 />
    </div>
  );
}

function LColumns() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start p-[64px] relative shrink-0" data-name="l-columns">
      <Color />
      <Color1 />
      <Color2 />
      <Color3 />
      <Color4 />
      <Color5 />
      <Color6 />
      <Color7 />
      <Color8 />
      <Color9 />
      <Color10 />
      <Color11 />
      <Color12 />
    </div>
  );
}

function LContent13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-white h-[257px] relative rounded-[24px] shrink-0 w-full" data-name="shape">
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">FFFFFF</p>
    </div>
  );
}

function Color13() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">White</p>
      <LContent13 />
    </div>
  );
}

function LContent14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#f7f8fa] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">F7F8FA</p>
    </div>
  );
}

function Color14() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Grey 01</p>
      <LContent14 />
    </div>
  );
}

function LContent15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#e8e8e8] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">E8E8E8</p>
    </div>
  );
}

function Color15() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Grey 02</p>
      <LContent15 />
    </div>
  );
}

function LContent16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#bdbdbd] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">BDBDBD</p>
    </div>
  );
}

function Color16() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Grey 03</p>
      <LContent16 />
    </div>
  );
}

function LContent17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#828282] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">828282</p>
    </div>
  );
}

function Color17() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Grey 04</p>
      <LContent17 />
    </div>
  );
}

function LContent18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#303742] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">303742</p>
    </div>
  );
}

function Color18() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Grey 05</p>
      <LContent18 />
    </div>
  );
}

function LContent19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-black h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">000000</p>
    </div>
  );
}

function Color19() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Black</p>
      <LContent19 />
    </div>
  );
}

function LContent20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[rgba(0,0,0,0.5)] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">000000</p>
    </div>
  );
}

function Color20() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Overlay</p>
      <LContent20 />
    </div>
  );
}

function LContent21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#138eff] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">138EFF</p>
    </div>
  );
}

function Color21() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Blue</p>
      <LContent21 />
    </div>
  );
}

function LContent22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#7b61ff] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">7B61FF</p>
    </div>
  );
}

function Color22() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Purple</p>
      <LContent22 />
    </div>
  );
}

function LContent23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#c072cd] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">C072CD</p>
    </div>
  );
}

function Color23() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Light Magenta</p>
      <LContent23 />
    </div>
  );
}

function LContent24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#a620b2] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">A620B2</p>
    </div>
  );
}

function Color24() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Dark Magenta</p>
      <LContent24 />
    </div>
  );
}

function LContent25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="l-content">
      <div className="bg-[#fc7f5b] h-[257px] rounded-[24px] shrink-0 w-full" data-name="shape" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.264px] w-[311px]">FC7F5B</p>
    </div>
  );
}

function Color25() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-black text-nowrap">Orange</p>
      <LContent25 />
    </div>
  );
}

function LColumns1() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start p-[64px] relative shrink-0" data-name="l-columns">
      <Color13 />
      <Color14 />
      <Color15 />
      <Color16 />
      <Color17 />
      <Color18 />
      <Color19 />
      <Color20 />
      <Color21 />
      <Color22 />
      <Color23 />
      <Color24 />
      <Color25 />
    </div>
  );
}

function LContainer() {
  return (
    <div className="content-stretch flex gap-[64px] items-start p-[64px] relative shrink-0" data-name="l-container">
      <LColumns />
      <LColumns1 />
    </div>
  );
}

export default function ColorPalette() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-center justify-center relative size-full" data-name="Color Palette">
      <Header />
      <LContainer />
    </div>
  );
}