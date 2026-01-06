import svgPaths from "./svg-yh2vc4shao";

function Group() {
  return (
    <div className="absolute inset-[0_0_-0.01%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 40.0027">
        <g id="Group">
          <path d={svgPaths.p16969f00} fill="var(--fill-0, #00D9A5)" id="Vector" />
          <path d={svgPaths.p1dd47500} fill="var(--fill-0, #00D9A5)" id="Vector_2" />
          <path d={svgPaths.p1ee89780} fill="var(--fill-0, #00D9A5)" id="Vector_3" />
          <path d={svgPaths.p37db8500} fill="var(--fill-0, #00D9A5)" id="Vector_4" />
          <path d={svgPaths.p16c3cf70} fill="var(--fill-0, #00D9A5)" id="Vector_5" />
          <path d={svgPaths.pa796300} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.pe82b970} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p2b017000} fill="var(--fill-0, black)" id="Vector_8" />
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
    <div className="absolute h-[40px] left-0 top-0 w-[135px]" data-name="TaskTag">
      <LogoApp />
    </div>
  );
}

export default function TaskTagLogo() {
  return (
    <div className="relative size-full" data-name="TaskTag Logo">
      <TaskTag />
    </div>
  );
}