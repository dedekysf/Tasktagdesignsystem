function Checklist() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Checklist">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="_Checklist">
          <g id="Rectangle 1">
            <mask fill="white" id="path-1-inside-1_352_218">
              <rect height="20" rx="1" width="20" />
            </mask>
            <rect height="20" mask="url(#path-1-inside-1_352_218)" rx="1" stroke="var(--stroke-0, #BDBDBD)" strokeWidth="4" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Checklist1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="_Checklist">
      <Checklist />
    </div>
  );
}

function ItemCheckbox() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0 w-[380px]" data-name="Item Checkbox">
      <Checklist1 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px] tracking-[0.28px]">
        <p className="css-4hzbpn leading-[16px]">My Upload</p>
      </div>
    </div>
  );
}

function Checklist2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Checklist">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="_Checklist">
          <g id="Rectangle 1">
            <mask fill="white" id="path-1-inside-1_352_218">
              <rect height="20" rx="1" width="20" />
            </mask>
            <rect height="20" mask="url(#path-1-inside-1_352_218)" rx="1" stroke="var(--stroke-0, #BDBDBD)" strokeWidth="4" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Checklist3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="_Checklist">
      <Checklist2 />
    </div>
  );
}

function ItemCheckbox1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0 w-[380px]" data-name="Item Checkbox">
      <Checklist3 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px] tracking-[0.28px]">
        <p className="css-4hzbpn leading-[16px]">Media</p>
      </div>
    </div>
  );
}

function Checklist4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_Checklist">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="_Checklist">
          <g id="Rectangle 1">
            <mask fill="white" id="path-1-inside-1_352_218">
              <rect height="20" rx="1" width="20" />
            </mask>
            <rect height="20" mask="url(#path-1-inside-1_352_218)" rx="1" stroke="var(--stroke-0, #BDBDBD)" strokeWidth="4" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Checklist5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="_Checklist">
      <Checklist4 />
    </div>
  );
}

function ItemCheckbox2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0 w-[380px]" data-name="Item Checkbox">
      <Checklist5 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303742] text-[14px] tracking-[0.28px]">
        <p className="css-4hzbpn leading-[16px]">Document</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[380px]" data-name="Body">
      <ItemCheckbox />
      <ItemCheckbox1 />
      <ItemCheckbox2 />
    </div>
  );
}

function ItemList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item List">
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
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#828282] text-[14px] text-center tracking-[0.28px]">Clear All</p>
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

export default function Filter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] size-full" data-name="Filter">
      <Table />
      <Action />
    </div>
  );
}