import svgPaths from "./svg-e3bf9ze1z3";

function LTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="l-title">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[22px]">
        <p className="css-ew64yg leading-[32px]">Create Project</p>
      </div>
    </div>
  );
}

function IconStart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconStart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconStart">
          <path clipRule="evenodd" d={svgPaths.p28fcbf80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="wrapper">
      <IconStart />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[8px]" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="button">
      <ButtonBase />
    </div>
  );
}

function LActions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="l-actions">
      <Button />
    </div>
  );
}

function LTaskHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="l-task header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative w-full">
          <LTitle />
          <LActions />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p38121400} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IContent() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="i-content">
      <Icon />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px]">Copy from existing project</p>
    </div>
  );
}

function LRow() {
  return (
    <div className="content-stretch flex gap-[109px] items-center relative shrink-0 w-full" data-name="l-row">
      <IContent />
    </div>
  );
}

function CreateChatNewGroupChat() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full" data-name="createChat/new group chat">
      <LRow />
    </div>
  );
}

function LList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="l-list">
      <CreateChatNewGroupChat />
    </div>
  );
}

function LAction() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[16px] py-[8px] relative w-[532px]" data-name="L-action">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <LList />
    </div>
  );
}

function LLabel() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-end not-italic relative shrink-0 w-full" data-name="l-label">
      <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px relative text-[#0a1629] text-[14px]">
        <p className="css-4hzbpn leading-[16px]">Name</p>
      </div>
      <p className="css-4hzbpn flex-[1_0_0] leading-[12px] min-h-px min-w-px relative text-[#303742] text-[10px] text-right">Required</p>
    </div>
  );
}

function Typing() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="typing">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">LA Avenue 34 G</p>
    </div>
  );
}

function CInput() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="c-input">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <Typing />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_input">
      <LLabel />
      <CInput />
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
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0a1629] text-[14px]">
        <p className="css-4hzbpn leading-[16px]">Description</p>
      </div>
    </div>
  );
}

function Typing1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="typing">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#0a1629] text-[14px] tracking-[0.28px]">This project focuses on inspecting and replacing faulty or burnt-out light bulbs across the designated areas.</p>
    </div>
  );
}

function CInput1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="c-input">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <Typing1 />
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_input">
      <LLabel1 />
      <CInput1 />
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
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0a1629] text-[14px]">
        <p className="css-4hzbpn leading-[16px]">Address</p>
      </div>
    </div>
  );
}

function IconStart1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon--start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon--start">
          <path clipRule="evenodd" d={svgPaths.p103c8a30} fill="var(--fill-0, #303742)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Typing2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="typing">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] tracking-[0.28px]">56 Broadway, New York, NY 10004</p>
    </div>
  );
}

function CInput2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="c-input">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <IconStart1 />
          <Typing2 />
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="_input">
      <LLabel2 />
      <CInput2 />
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="input">
      <Input4 />
    </div>
  );
}

function LInputs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="l-inputs">
      <Input5 />
    </div>
  );
}

function LLabel3() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="l-label">
      <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px relative text-[#0a1629] text-[14px]">
        <p className="css-4hzbpn leading-[16px]">Team</p>
      </div>
      <p className="css-4hzbpn h-[16px] leading-[12px] relative shrink-0 text-[#303742] text-[10px] text-right w-[266px]">Required</p>
    </div>
  );
}

function IconStart2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconStart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconStart">
          <path clipRule="evenodd" d={svgPaths.p2b265800} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="_buttonEdit">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center pl-[24px] pr-[64px] py-[16px] relative size-full">
          <IconStart2 />
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a1629] text-[14px] text-center">TaskTag Project</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="Button">
      <ButtonEdit />
    </div>
  );
}

function LMembers() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="l-members">
      <LLabel3 />
      <Button1 />
    </div>
  );
}

function Team() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Team">
      <LMembers />
    </div>
  );
}

function IconStart3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconStart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Select box">
          <rect fill="var(--fill-0, #FF4444)" height="24" id="Rectangle 2318" rx="12" width="24" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit1() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_buttonEdit">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[24px] py-[12px] relative w-full">
          <IconStart3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Button">
      <ButtonEdit1 />
    </div>
  );
}

function LColor() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 size-[72px]" data-name="l-color">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] w-full">
        <p className="css-4hzbpn leading-[16px]">Color</p>
      </div>
      <Button2 />
    </div>
  );
}

function IconStart4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconStart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconStart">
          <path clipRule="evenodd" d={svgPaths.p9ffde00} fill="var(--fill-0, #0A1629)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit2() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_buttonEdit">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[24px] py-[12px] relative w-full">
          <IconStart4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Button">
      <ButtonEdit2 />
    </div>
  );
}

function LColor1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[72px]" data-name="l-color">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1629] text-[14px] w-full">
        <p className="css-4hzbpn leading-[16px]">Icon</p>
      </div>
      <Button3 />
    </div>
  );
}

function LInputs1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="l-inputs">
      <Team />
      <LColor />
      <LColor1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0a1629] text-[14px]">
        <p className="css-4hzbpn leading-[16px]">Members</p>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus">
          <path clipRule="evenodd" d={svgPaths.p1ed18e80} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="wrapper">
      <Plus />
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="_Button Base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
          <Wrapper1 />
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#18a87d] text-[14px]">Add member</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex h-[52px] items-start relative shrink-0 w-full" data-name="button">
      <ButtonBase1 />
    </div>
  );
}

function LMembers1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="l-members">
      <Frame />
      <Button4 />
    </div>
  );
}

function LList1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative w-[532px]" data-name="l-list">
      <Input1 />
      <Input3 />
      <LInputs />
      <LInputs1 />
      <LMembers1 />
    </div>
  );
}

function LContent() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-full items-end overflow-clip pb-[24px] pt-0 px-[24px] relative" data-name="l-content">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <LAction />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <LList1 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative w-full">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-black">Cancel</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-black flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative w-full">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-white">Create Project</p>
        </div>
      </div>
    </div>
  );
}

function LButtons() {
  return (
    <div className="bg-white relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="l-buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[24px] py-0 relative w-full">
          <Button5 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

export default function ProjectCreation() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start pb-[24px] pt-[21px] px-0 relative shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] size-full" data-name="Project Creation">
      <LTaskHeader />
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
        <div className="flex-none h-full rotate-[180deg] scale-y-[-100%]">
          <LContent />
        </div>
      </div>
      <LButtons />
    </div>
  );
}