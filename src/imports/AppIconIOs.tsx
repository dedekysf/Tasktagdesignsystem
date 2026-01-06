import svgPaths from "./svg-m3i9239kt";

function Group() {
  return (
    <div className="absolute inset-[21.34%_52.73%_21.85%_19.51%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.5196 93.1652">
        <g id="Group">
          <path d={svgPaths.pab1eb40} fill="var(--fill-0, #00D9A5)" id="Vector" />
          <path d={svgPaths.p3f7fb900} fill="var(--fill-0, #00D9A5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[21.34%_19.51%_21.85%_52.73%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.5198 93.1652">
        <g id="Group">
          <path d={svgPaths.pab1eb40} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1c939480} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[21.34%_19.51%_21.85%_19.51%]">
      <Group />
      <Group2 />
    </div>
  );
}

export default function AppIconIOs() {
  return (
    <div className="bg-black overflow-clip relative rounded-[36px] size-full" data-name="AppIcon/iOS">
      <Group1 />
    </div>
  );
}