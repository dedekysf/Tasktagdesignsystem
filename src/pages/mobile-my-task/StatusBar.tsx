import svgPaths from "../../imports/svg-ngfg9xj07v";

export function StatusBar() {
  return (
    <div className="h-8 relative shrink-0 w-full bg-white">
      {/* Time */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2">
        <p className="text-[15px] leading-5 text-center" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900 }}>
          9:41
        </p>
      </div>
      
      {/* Status icons (battery, wifi, signal) */}
      <div className="absolute h-[10.728px] right-[14px] top-1/2 -translate-y-1/2 w-[62.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.5 10.7276">
          <g>
            <g>
              <path d={svgPaths.p1c8f2bb0} fill="black" />
              <rect fill="black" height="7.15174" rx="1.6" width="16.791" x="41.5112" y="1.78793" />
            </g>
            <path d={svgPaths.p682c200} fill="black" />
            <path clipRule="evenodd" d={svgPaths.p25638380} fill="black" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}
