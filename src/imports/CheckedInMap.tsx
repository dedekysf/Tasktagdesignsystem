import svgPaths from "./svg-038cv1l3k1";

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_401_4178)" id="check-circle">
          <path clipRule="evenodd" d={svgPaths.p34990e00} fill="var(--fill-0, #18A87D)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_401_4178">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Message() {
  return (
    <div className="bg-[#dcf2ec] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="message">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <CheckCircle />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#18a87d] text-[10px] whitespace-nowrap">
            <p className="leading-[12px]">Checked in for this project</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapFlat() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mapFlat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mapFlat">
          <g id="Group">
            <path d={svgPaths.p25ef6380} fill="var(--fill-0, #44C868)" id="Vector" />
            <path d={svgPaths.p1a477880} fill="var(--fill-0, #44C868)" id="Vector_2" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.pacf6a70} fill="var(--fill-0, #4CE166)" id="Vector_3" />
            <path d={svgPaths.p1d7c8a00} fill="var(--fill-0, #4CE166)" id="Vector_4" />
          </g>
          <path d={svgPaths.p3b8b5800} fill="var(--fill-0, #FFDB56)" id="Vector_5" />
          <path d={svgPaths.p1172200} fill="var(--fill-0, #A8EEFC)" id="Vector_6" />
          <g id="Group_3">
            <path d={svgPaths.pc986180} fill="var(--fill-0, #FFBB24)" id="Vector_7" />
            <path d={svgPaths.p23783a00} fill="var(--fill-0, #FFBB24)" id="Vector_8" />
          </g>
          <path d={svgPaths.p7b90600} fill="var(--fill-0, #FFDB56)" id="Vector_9" />
          <path d={svgPaths.p32785f80} fill="var(--fill-0, #FFBB24)" id="Vector_10" />
          <path d={svgPaths.pe12a980} fill="var(--fill-0, #FF4A4A)" id="Vector_11" />
          <path d={svgPaths.p2f6f400} fill="var(--fill-0, #E7343F)" id="Vector_12" />
          <path d={svgPaths.p68e3f00} fill="var(--fill-0, #FFDB56)" id="Vector_13" />
          <g id="Group_4">
            <path d={svgPaths.p279dd600} fill="var(--fill-0, #1EA4E9)" id="Vector_14" />
            <path d={svgPaths.p9816470} fill="var(--fill-0, #1EA4E9)" id="Vector_15" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative" data-name="l-text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] overflow-hidden relative shrink-0 text-[#828282] text-[10px] text-ellipsis w-full whitespace-nowrap">6002 Fort Hamilton Drive, Corner of W 6th Street</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#91929e] text-[8px] w-full whitespace-pre-wrap">Houston, TX 77007</p>
    </div>
  );
}

function LLoction() {
  return (
    <div className="relative shrink-0 w-full" data-name="l-loction">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <MapFlat />
          <LText />
        </div>
      </div>
    </div>
  );
}

export default function CheckedInMap() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] size-full" data-name="Map">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Message />
      <LLoction />
    </div>
  );
}
