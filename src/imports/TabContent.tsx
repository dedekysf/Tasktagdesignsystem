import svgPaths from "./svg-c1y7cic29o";
import svgPathsPlans from "./svg-9a3peqml5d";
import imgLIcon from "figma:asset/cfccd7c610f1c39738df0931009c0cf956fb04d2.png";
import { TeamPlan } from "./Plans";

interface TabContentProps {
  memberCount: number;
}

function LIcon() {
  const fallbackImage = "https://images.unsplash.com/photo-1768321901750-f7b96d774456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGhvdXNlfGVufDF8fHx8MTc2OTIwMzc1MXww&ixlib=rb-4.1.0&q=80&w=400";
  
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[48px]" data-name="l-icon">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
        <div className="absolute bg-black inset-0 rounded-[4px]" />
        <img 
          alt="Project icon" 
          className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" 
          src={fallbackImage}
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#303742] text-[22px] text-nowrap text-right whitespace-pre">Scott 1</p>
    </div>
  );
}

function LHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="l-header">
      <LIcon />
      <Container />
    </div>
  );
}

function LText() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a1629] text-[18px] text-nowrap whitespace-pre">Location</p>
    </div>
  );
}

function LContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="l-content">
      <LText />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#303742] text-[16px] text-nowrap text-right whitespace-pre">Houston, TX</p>
    </div>
  );
}

function List() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="_list">
      <LContent />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="list">
      <List />
    </div>
  );
}

function LText1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a1629] text-[18px] text-nowrap whitespace-pre">My Role</p>
    </div>
  );
}

function LContent1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="l-content">
      <LText1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#303742] text-[16px] text-nowrap text-right whitespace-pre">Owner</p>
    </div>
  );
}

function List2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="_list">
      <LContent1 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="list">
      <List2 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" data-name="_tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap whitespace-pre">Carpenter</p>
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

function Tag2() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" data-name="_tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap whitespace-pre">Electrician</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="tag">
      <Tag2 />
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#f7f8fa] content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" data-name="_tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-nowrap whitespace-pre">Manager</p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="tag">
      <Tag4 />
    </div>
  );
}

function LText2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="l-text">
      <Tag1 />
      <Tag3 />
      <Tag5 />
    </div>
  );
}

function LData() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="l-data">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#0a1629] text-[16px] text-nowrap whitespace-pre">Skills</p>
      <LText2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <List1 />
      <List3 />
      <LData />
    </div>
  );
}

function Details() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0" data-name="Details">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <LHeader />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Plans({ memberCount }: { memberCount: number }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0" data-name="Plans">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Billing</p>
          <TeamPlan memberCount={memberCount} />
        </div>
      </div>
    </div>
  );
}

function Container1({ memberCount }: { memberCount: number }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Details />
      <Plans memberCount={memberCount} />
    </div>
  );
}

export default function TabContent({ memberCount }: TabContentProps) {
  return (
    <div className="relative size-full" data-name="Tab Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Container1 memberCount={memberCount} />
        </div>
      </div>
    </div>
  );
}
