import svgPaths from "./svg-9a3peqml5d";

interface TeamPlanProps {
  memberCount: number;
}

function LText() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap whitespace-pre">Plan</p>
    </div>
  );
}

function LCard() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="l-card">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-nowrap text-right tracking-[0.28px] whitespace-pre">Team</p>
    </div>
  );
}

function LIcons() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="l-icons">
      <LCard />
    </div>
  );
}

function LContent() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="l-content">
      <LText />
      <LIcons />
    </div>
  );
}

function LText1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap whitespace-pre">Plan Status</p>
    </div>
  );
}

function LCard1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="l-card">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#18a87d] text-[14px] text-nowrap text-right tracking-[0.28px] whitespace-pre">Renews on Sep 17, 2026</p>
    </div>
  );
}

function LIcons1() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="l-icons">
      <LCard1 />
    </div>
  );
}

function LContent1() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="l-content">
      <LText1 />
      <LIcons1 />
    </div>
  );
}

function LText2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap whitespace-pre">Storaged Used</p>
    </div>
  );
}

function LCard2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="l-card">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#18a87d] text-[14px] text-nowrap text-right tracking-[0.28px] whitespace-pre">0 bytes / 2 GB</p>
    </div>
  );
}

function LIcons2() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="l-icons">
      <LCard2 />
    </div>
  );
}

function LContent2() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="l-content">
      <LText2 />
      <LIcons2 />
    </div>
  );
}

function LText3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap whitespace-pre">Total Team Members</p>
    </div>
  );
}

function LCard3(props: TeamPlanProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="l-card">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-nowrap text-right tracking-[0.28px] whitespace-pre">{props.memberCount}</p>
    </div>
  );
}

function LIcons3(props: TeamPlanProps) {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="l-icons">
      <LCard3 {...props} />
    </div>
  );
}

function LContent3(props: TeamPlanProps) {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="l-content">
      <LText3 />
      <LIcons3 {...props} />
    </div>
  );
}

function LText4() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap whitespace-pre">Total amount</p>
    </div>
  );
}

function LContent4(props: TeamPlanProps) {
  // Calculate total amount: $192.00 per member
  const totalAmount = (props.memberCount * 192).toFixed(2);
  
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="l-content">
      <LText4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-nowrap text-right tracking-[0.28px] whitespace-pre">${totalAmount}</p>
    </div>
  );
}

function List(props: TeamPlanProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="_list">
      <LContent4 {...props} />
    </div>
  );
}

function List1(props: TeamPlanProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="list">
      <List {...props} />
    </div>
  );
}

function LText5() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap whitespace-pre">Payment Method</p>
    </div>
  );
}

function Mastercard() {
  return (
    <div className="absolute inset-[20.96%_16.59%_23.21%_17.65%]" data-name="Mastercard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 14">
        <g id="Mastercard">
          <path d={svgPaths.p820be00} fill="#ED0006" id="Left" />
          <path d={svgPaths.p2de06700} fill="#F9A000" id="Right" />
          <path d={svgPaths.p35eae580} fill="#FF5E00" id="Middle" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethodIcon() {
  return (
    <div className="bg-white h-[24px] relative rounded-[4px] shrink-0 w-[34px]" data-name="Payment method icon">
      <div aria-hidden="true" className="absolute border border-[#f2f4f7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Mastercard />
    </div>
  );
}

function LCard4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="l-card">
      <PaymentMethodIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-nowrap text-right tracking-[0.28px] whitespace-pre">**** **** **** 3333</p>
    </div>
  );
}

function LContent5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="l-content">
      <LText5 />
      <LCard4 />
    </div>
  );
}

function List2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="_list">
      <LContent5 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="list">
      <List2 />
    </div>
  );
}

function TeamPlan(props: TeamPlanProps) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Team plan">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <LContent />
          <LContent1 />
          <LContent2 />
          <LContent3 {...props} />
          <List1 {...props} />
          <List3 />
        </div>
      </div>
    </div>
  );
}

export { TeamPlan };

export default function Plans() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Plans">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Billing</p>
          <TeamPlan memberCount={2} />
        </div>
      </div>
    </div>
  );
}
