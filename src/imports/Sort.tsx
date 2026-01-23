import svgPaths from "./svg-d2wmufwehk";

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#303742] text-[16px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="_Select">
          <rect fill="var(--fill-0, white)" height="18" id="circle" rx="9" stroke="var(--stroke-0, #BDBDBD)" strokeWidth="2" width="18" x="1" y="1" />
        </g>
      </svg>
    </div>
  );
}

function ItemRadio() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0 w-[380px]" data-name="Item Radio">
      <X />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px] tracking-[0.28px]">
        <p className="css-4hzbpn leading-[16px]">Active</p>
      </div>
    </div>
  );
}

function X1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="_Select">
          <rect fill="var(--fill-0, #18A87D)" height="20" id="circle" rx="10" width="20" />
          <path d={svgPaths.p27503df0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemRadio1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0 w-[380px]" data-name="Item Radio">
      <X1 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px] tracking-[0.28px]">
        <p className="css-4hzbpn leading-[16px]">Archived</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <ItemRadio />
      <ItemRadio1 />
    </div>
  );
}

function ItemList() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Item List">
      <Frame />
      <Body />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <ItemList />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function TableTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Table Title">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#303742] text-[14px] text-center tracking-[0.28px]">Clear All</p>
    </div>
  );
}

function TableToolbar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table Toolbar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <TableTitle />
        </div>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Action">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <TableToolbar />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

export default function Sort() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] size-full" data-name="Sort">
      <Table />
      <Action />
    </div>
  );
}