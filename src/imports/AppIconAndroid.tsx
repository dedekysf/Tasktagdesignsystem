import svgPaths from "./svg-ghwm9ru124";

function Group() {
  return (
    <div className="absolute inset-[0_54.48%_0.35%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0574 81.9699">
        <g id="Group">
          <path d={svgPaths.p2bfdc770} fill="var(--fill-0, #00D9A5)" id="Vector" />
          <path d={svgPaths.p29e7ac00} fill="var(--fill-0, #00D9A5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0.52%_0_0_54.53%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0165 81.8367">
        <g id="Group">
          <path d={svgPaths.p1d7a0d70} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14551c00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bottom-[24.84%] left-[23.17%] right-[23.17%] top-1/4">
      <Group />
      <Group1 />
    </div>
  );
}

export default function AppIconAndroid() {
  return (
    <div className="relative size-full" data-name="AppIcon/Android">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 164">
        <path d={svgPaths.p39389a80} fill="var(--fill-0, black)" id="Vector" />
      </svg>
      <Frame />
    </div>
  );
}