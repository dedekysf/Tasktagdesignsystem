import svgPaths from "./svg-io9ye07clk";
import imgWrapper from "figma:asset/cfccd7c610f1c39738df0931009c0cf956fb04d2.png";
import imgIlCollaboration from "figma:asset/727e6b11c9799f58fcfa4a733691914bdec7af1f.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[16px] text-black w-full">Upgrade Team Plan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] tracking-[0.24px] w-full">Power up your collaboration with Team Plan features, like free to chat, assign task and more.</p>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="wrapper">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWrapper} />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#e8e8e8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
          <Wrapper />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] text-center whitespace-pre">Scott 1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-[352px]" data-name="Button">
      <ButtonBase />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[14px] w-[min-content] whitespace-pre-wrap">Team</p>
      <Button />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[16px] not-italic relative shrink-0 text-[#303742] whitespace-pre-wrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] w-full">Yearly</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px] tracking-[0.24px] w-full">$16 /member/month</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#dcf2ec] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" data-name="_tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#18a87d] text-[12px] whitespace-pre">Save 20%</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end min-h-px min-w-px relative">
      <Frame />
      <Tag1 />
    </div>
  );
}

function Yearly() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Yearly">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-end px-[12px] py-[10px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[16px] min-h-px min-w-px not-italic relative text-[#303742] whitespace-pre-wrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] w-full">Monthly</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px] tracking-[0.24px] w-full">$20 /member/month</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p1d8ed000} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Monthly() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Monthly">
      <div aria-hidden="true" className="absolute border border-[#18a87d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-end px-[12px] py-[10px] relative w-full">
          <Frame3 />
          <Check />
        </div>
      </div>
    </div>
  );
}

function PlanOptions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Plan Options">
      <Yearly />
      <Monthly />
    </div>
  );
}

function SubscriptionDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Subscription Details">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] w-full whitespace-pre-wrap">Billing Cycle</p>
      <PlanOptions />
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_254_1666)" id="chevron-up">
          <path clipRule="evenodd" d={svgPaths.p3ab4d870} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_254_1666">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ViewMore() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="View More">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#828282] text-[12px] tracking-[0.24px] whitespace-pre">view less</p>
      <ChevronUp />
    </div>
  );
}

function SubContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full" data-name="Sub Container">
      <SubscriptionDetails />
      <ViewMore />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start justify-center leading-[16px] not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Description">
      <p className="relative shrink-0 text-[#0a1629] text-[0px] text-[14px] tracking-[0.28px] w-full">
        <span className="text-[#303742]">You’ll be charged</span> <span className="font-['Inter:Medium',sans-serif] font-medium">$40 per month.</span>
      </p>
      <p className="relative shrink-0 text-[#303742] text-[12px] tracking-[0.24px] w-full">Applicable taxes will be calculated at checkout</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full" data-name="Container">
      <SubContainer />
      <Description />
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="bg-[#18a87d] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-pre">Continue to Checkout</p>
        </div>
      </div>
    </div>
  );
}

function SubscribeNow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Subscribe Now">
      <ButtonBase1 />
    </div>
  );
}

function SubscriptionPlanMaster() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Subscription Plan/Master">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Frame2 />
        <Frame4 />
        <Container />
        <SubscribeNow />
      </div>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p1547ca00} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Check1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px] whitespace-pre">{`Unlimited projects & tasks`}</p>
      </div>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p1547ca00} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Check2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px] whitespace-pre">Unlimited cloud-based messages</p>
      </div>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p1547ca00} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Check3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px] whitespace-pre">{`Unlimited users for projects & tasks`}</p>
      </div>
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p1547ca00} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Check4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px] whitespace-pre">{`Team admin & member roles`}</p>
      </div>
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p1547ca00} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Check5 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0a1629] text-[12px] tracking-[0.24px]">
        <p className="leading-[16px] whitespace-pre-wrap">{`Contacts free to chat, assign & add to project`}</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
        <ListItem4 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute right-[20px] size-[28px] top-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="icon">
          <path d={svgPaths.p10df4a00} fill="var(--fill-0, #0A1629)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#dcf2ec] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[24px] relative size-full">
          <div className="relative shrink-0 size-[200px]" data-name="il_collaboration">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIlCollaboration} />
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#0a1629] text-[18px] w-[min-content] whitespace-pre-wrap">Get more with the Team plan</p>
          <List />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Row">
      <SubscriptionPlanMaster />
      <Container1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="content">
      <Row />
    </div>
  );
}

export default function SubscriptionModalInitial() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Subscription Modal/Initial 2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}