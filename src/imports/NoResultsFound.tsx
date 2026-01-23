import svgPaths from "./svg-uuvpvp10vh";

function NoResultsIcon() {
  return (
    <div className="h-[70px] relative shrink-0 w-[124px]" data-name="no results icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 70">
        <g clipPath="url(#clip0_351_315)" id="no results icon">
          <g id="016">
            <path d={svgPaths.p2eb1280} fill="var(--fill-0, #E8E8E8)" id="Vector" />
            <path d={svgPaths.p32ad7880} fill="var(--fill-0, #303742)" id="Vector_2" />
            <path d={svgPaths.p15644000} fill="var(--fill-0, #231F20)" id="Vector_3" />
            <g id="Vector_4"></g>
            <path d={svgPaths.p20f90600} fill="var(--fill-0, #00D9A5)" id="Vector_5" />
            <g id="Vector_6"></g>
          </g>
          <path d={svgPaths.p2d812d00} fill="var(--fill-0, #035B60)" id="Vector 7" />
          <path d={svgPaths.p295641c0} fill="var(--fill-0, #168E95)" id="Vector_7" />
          <path d={svgPaths.p1d1bb4f2} fill="var(--fill-0, white)" fillOpacity="0.8" id="Vector_8" />
          <path d={svgPaths.p30ab4780} fill="var(--fill-0, #FFD200)" id="Subtract" />
          <path d={svgPaths.pab6e40} fill="var(--fill-0, #035B60)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_351_315">
            <rect fill="white" height="70" width="124" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 w-full">
      <p 
        className="text-web-large-label relative shrink-0" 
        style={{ 
          color: 'var(--text-primary)',
          fontWeight: 'var(--font-weight-medium)'
        }}
      >
        No results found
      </p>
      <p 
        className="text-web-secondary-body relative shrink-0 text-center w-full" 
        style={{ 
          color: 'var(--text-primary)',
          letterSpacing: '0.28px'
        }}
      >
        We couldn't find anything that matched yours search words.
      </p>
    </div>
  );
}

export default function NoResultsFound() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative size-full" data-name="No results found">
      <NoResultsIcon />
      <Frame />
    </div>
  );
}