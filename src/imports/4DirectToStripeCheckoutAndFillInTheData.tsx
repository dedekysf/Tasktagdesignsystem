import svgPaths from "./svg-f8plhkkptx";

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p16b94680} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0_-0.01%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 40.0027">
        <g id="Group">
          <path d={svgPaths.p4fa6900} fill="var(--fill-0, #00D9A5)" id="Vector" />
          <path d={svgPaths.p521ed80} fill="var(--fill-0, #00D9A5)" id="Vector_2" />
          <path d={svgPaths.p220de870} fill="var(--fill-0, #00D9A5)" id="Vector_3" />
          <path d={svgPaths.p37db8500} fill="var(--fill-0, #00D9A5)" id="Vector_4" />
          <path d={svgPaths.p16c3cf70} fill="var(--fill-0, #00D9A5)" id="Vector_5" />
          <path d={svgPaths.p13f82880} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p2ef6f200} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.pcbff480} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p29b4e980} fill="var(--fill-0, black)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function LogoApp() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Logo/App">
      <Group />
    </div>
  );
}

function TaskTag() {
  return (
    <div className="h-[40px] relative shrink-0 w-[135px]" data-name="TaskTag">
      <LogoApp />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Icon />
      <TaskTag />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start justify-center not-italic relative shrink-0 text-[#303742] w-full" data-name="Description">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[14px] tracking-[0.28px] w-full">Subscribe to Team Plan</p>
      <p className="css-4hzbpn leading-[0] relative shrink-0 text-[0px] tracking-[0.24px] w-full">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] text-[28px]">$384.00</span>
        <span className="leading-[16px] text-[12px]">{` per year`}</span>
      </p>
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[14px] tracking-[0.28px] w-full">$16 /month/member billed annually</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[24px] not-italic p-[24px] relative text-[16px] w-full">
          <p className="css-ew64yg relative shrink-0 text-[#0a1629]">Team Plan</p>
          <p className="css-ew64yg relative shrink-0 text-[#303742]">$384.00 / year</p>
        </div>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[32px] relative shrink-0 w-[56px]" data-name="Toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 32">
        <g id="_Toggle">
          <rect fill="var(--fill-0, #18A87D)" height="32" id="base" rx="16" width="56" />
          <circle cx="40" cy="16" fill="var(--fill-0, white)" id="circle" r="12" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#dcf2ec] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" data-name="_tag">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#18a87d] text-[12px]">Save 20%</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="tag">
      <Tag />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f7f8fa] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Toggle />
          <Tag1 />
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#828282] text-[12px] tracking-[0.24px]">with annual billing</p>
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px] tracking-[0.24px]">$16 /month/member</p>
        </div>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Description">
      <div className="content-stretch flex flex-col items-end justify-center overflow-clip relative rounded-[inherit] w-full">
        <Frame5 />
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px] w-full">
      <p className="css-4hzbpn flex-[1_0_0] min-h-px min-w-px relative">Subtotal</p>
      <p className="css-ew64yg relative shrink-0">$384.00</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_301_2470)" id="icon">
          <path clipRule="evenodd" d={svgPaths.p223a2580} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_301_2470">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">Tax</p>
      <Icon1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame8 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[14px] tracking-[0.28px]">$0.00</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] items-start leading-[21px] not-italic relative shrink-0 text-[#0a1629] text-[16px] w-full">
      <p className="css-4hzbpn flex-[1_0_0] min-h-px min-w-px relative">Total due today</p>
      <p className="css-ew64yg relative shrink-0">$384.00</p>
    </div>
  );
}

function Description2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Description">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] py-0 relative w-full">
          <Frame6 />
          <Frame7 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 592 1">
                <line id="Line 2" stroke="var(--stroke-0, #E8E8E8)" x2="592" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f7f8fa] content-stretch flex flex-col gap-[40px] h-[1080px] items-start left-0 overflow-clip pl-[200px] pr-[120px] py-[40px] top-0 w-[960px]">
      <Frame3 />
      <Description />
      <Description1 />
      <Description2 />
    </div>
  );
}

function IconCard() {
  return (
    <div className="absolute inset-[8.33%]" data-name="icon/card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon/card">
          <path clipRule="evenodd" d={svgPaths.p3380e600} fill="var(--fill-0, #303742)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCard1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon/card">
      <IconCard />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="toggle">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[12px] relative w-full">
          <IconCard1 />
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px]">Card</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#303742] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.0613">
        <g id="Group">
          <path d={svgPaths.p3a345500} fill="var(--fill-0, #303742)" id="Vector" />
          <path d={svgPaths.p23537700} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p30cc2600} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2c350110} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1ac6a180} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[4.95%_3.13%_3.12%_3.13%]" data-name="Layer_1">
      <Group1 />
    </div>
  );
}

function Office() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="office">
      <Layer />
    </div>
  );
}

function Toggle2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="toggle">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[12px] relative w-full">
          <Office />
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px]">US Bank Account</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ToggleList() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative" data-name="toggle list">
      <Toggle1 />
      <Toggle2 />
    </div>
  );
}

function ToggleList1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="toggle list">
      <ToggleList />
    </div>
  );
}

function LLabel() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="l-label">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0a1629] text-[12px] tracking-[0.24px]">
        <p className="css-4hzbpn leading-[16px]">Card information</p>
      </div>
    </div>
  );
}

function IconEnd() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon--end">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon--end">
          <path clipRule="evenodd" d={svgPaths.p35449880} fill="var(--fill-0, white)" fillRule="evenodd" id="AMEX" />
          <g id="Payment Method/Visa">
            <rect fill="var(--fill-0, white)" height="16" id="BASE" rx="2" stroke="var(--stroke-0, #D9D9D9)" width="23" x="0.5" y="3.5" />
            <path clipRule="evenodd" d={svgPaths.p11b50500} fill="var(--fill-0, #172B85)" fillRule="evenodd" id="visa-logo" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Mastercard() {
  return (
    <div className="absolute inset-[18.7%_13.04%_19.51%_14.91%]" data-name="Mastercard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.292 10.5039">
        <g id="Mastercard">
          <path d={svgPaths.p8826500} fill="var(--fill-0, #ED0006)" id="Left" />
          <path d={svgPaths.pf31fe40} fill="var(--fill-0, #F9A000)" id="Right" />
          <path d={svgPaths.p933f200} fill="var(--fill-0, #FF5E00)" id="Middle" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethodMastercard() {
  return (
    <div className="absolute h-[17px] left-0 top-[3px] w-[24px]" data-name="Payment Method/Mastercard">
      <div className="absolute bg-white border border-[#d9d9d9] border-solid inset-0 rounded-[2.5px]" data-name="BASE" />
      <Mastercard />
    </div>
  );
}

function IconEnd1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon--end">
      <PaymentMethodMastercard />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <IconEnd />
      <IconEnd1 />
    </div>
  );
}

function CInput() {
  return (
    <div className="bg-white h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="c-input">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] tracking-[0.28px]">
            <p className="css-4hzbpn leading-[16px]">1234 1234 1234 1234</p>
          </div>
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function CInput1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-bl-[8px]" data-name="c-input">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-l border-solid inset-0 pointer-events-none rounded-bl-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] tracking-[0.28px]">
            <p className="css-4hzbpn leading-[16px]">MM / YY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CInput2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-br-[8px]" data-name="c-input">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-br-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] tracking-[0.28px]">
            <p className="css-4hzbpn leading-[16px]">CVC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <CInput1 />
      <CInput2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <CInput />
      <Frame11 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="_input">
      <LLabel />
      <Frame10 />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input">
      <Input />
    </div>
  );
}

function LLabel1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="l-label">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0a1629] text-[12px] tracking-[0.24px]">
        <p className="css-4hzbpn leading-[16px]">Cardholder name</p>
      </div>
    </div>
  );
}

function CInput3() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="c-input">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[14px] tracking-[0.28px]">Full name on card</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="_input">
      <LLabel1 />
      <CInput3 />
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input">
      <Input2 />
    </div>
  );
}

function LLabel2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="l-label">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0a1629] text-[12px] tracking-[0.24px]">
        <p className="css-4hzbpn leading-[16px]">Billing address</p>
      </div>
    </div>
  );
}

function IconEnd2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon--end">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon--end">
          <path clipRule="evenodd" d={svgPaths.p2b042d70} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function CInput4() {
  return (
    <div className="bg-white h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="c-input">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px] tracking-[0.28px]">
            <p className="css-4hzbpn leading-[16px]">United States</p>
          </div>
          <IconEnd2 />
        </div>
      </div>
    </div>
  );
}

function CInput5() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="c-input">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] tracking-[0.28px]">
            <p className="css-4hzbpn leading-[16px]">Address line 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CInput6() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="c-input">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] tracking-[0.28px]">
            <p className="css-4hzbpn leading-[16px]">Address line 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CInput7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="c-input">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] tracking-[0.28px]">
            <p className="css-4hzbpn leading-[16px]">City</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CInput8() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="c-input">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] tracking-[0.28px]">
            <p className="css-4hzbpn leading-[16px]">ZIP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <CInput7 />
      <CInput8 />
    </div>
  );
}

function IconEnd3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon--end">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon--end">
          <path clipRule="evenodd" d={svgPaths.p2b042d70} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function CInput9() {
  return (
    <div className="bg-white h-[48px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="c-input">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] tracking-[0.28px]">
            <p className="css-4hzbpn leading-[16px]">State</p>
          </div>
          <IconEnd3 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <CInput4 />
      <CInput5 />
      <CInput6 />
      <Frame14 />
      <CInput9 />
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="_input">
      <LLabel2 />
      <Frame15 />
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input">
      <Input4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <ToggleList1 />
      <Input1 />
      <Input3 />
      <Input5 />
    </div>
  );
}

function LCardInformation() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="l-card information">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a1629] text-[18px] w-full">Payment method</p>
      <Frame />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#18a87d] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Subscribe</p>
        </div>
      </div>
    </div>
  );
}

function SubscribeNow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Subscribe Now">
      <ButtonBase />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px] text-center tracking-[0.24px] w-full">
      <div className="relative shrink-0 w-full">
        <p className="css-4hzbpn mb-0">{`By subscribing, you authorize Todoist to charge you according to `}</p>
        <p className="css-4hzbpn">the terms until you cancel.</p>
      </div>
      <p className="css-4hzbpn relative shrink-0 text-[0px] w-full">
        <span>{`Powered by `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold">stripe</span>
        <span>{`    |   Terms    Privacy`}</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] h-[1080px] items-center justify-center left-[960px] overflow-clip pl-[120px] pr-[200px] py-[40px] top-0 w-[960px]">
      <LCardInformation />
      <SubscribeNow />
      <Frame12 />
    </div>
  );
}

function SubscriptionStripe() {
  return (
    <div className="absolute bg-white h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="Subscription/Stripe">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Component4DirectToStripeCheckoutAndFillInTheData() {
  return (
    <div className="relative size-full" data-name="4. Direct to Stripe Checkout and fill in the data">
      <SubscriptionStripe />
    </div>
  );
}