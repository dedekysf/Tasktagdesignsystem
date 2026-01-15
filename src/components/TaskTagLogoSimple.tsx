import svgPathsGlyph from '../imports/svg-92e1ovrkrf';
import svgPathsFull from '../imports/svg-yh2vc4shao';

interface TaskTagLogoSimpleProps {
  isCollapsed?: boolean;
}

// Group8 - Left side (Green)
function Group8() {
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, right: '54.48%', bottom: '0.01%' }}>
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 45.62 93.37">
        <g>
          <path d={svgPathsGlyph.p13e73e00} fill="#00D9A5" />
          <path d={svgPathsGlyph.p1f5cde80} fill="#00D9A5" />
        </g>
      </svg>
    </div>
  );
}

// Group9 - Right side (Black)
function Group9() {
  return (
    <div style={{ position: 'absolute', left: '54.47%', top: 0, right: '0.01%', bottom: '0.01%' }}>
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 45.62 93.37">
        <g>
          <path d={svgPathsGlyph.p13e73e00} fill="black" />
          <path d={svgPathsGlyph.p1f5cde80} fill="black" />
        </g>
      </svg>
    </div>
  );
}

export function TaskTagLogoSimple({ isCollapsed = false }: TaskTagLogoSimpleProps) {
  if (isCollapsed) {
    // Glyph Logo / Color from Foundation > Logos
    return (
      <div style={{ 
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0
      }}>
        <Group8 />
        <Group9 />
      </div>
    );
  }

  // Full TaskTag logo when expanded - Main Logo from Foundation > Logos
  return (
    <div style={{ 
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      flexShrink: 0
    }}>
      <svg 
        viewBox="0 0 135 40.0027" 
        style={{ 
          display: 'block', 
          width: '100%', 
          height: '100%',
          objectFit: 'contain'
        }}
        fill="none" 
        preserveAspectRatio="xMidYMid meet"
      >
        <path d={svgPathsFull.p16969f00} fill="#00D9A5" />
        <path d={svgPathsFull.p1dd47500} fill="#00D9A5" />
        <path d={svgPathsFull.p1ee89780} fill="#00D9A5" />
        <path d={svgPathsFull.p37db8500} fill="#00D9A5" />
        <path d={svgPathsFull.p16c3cf70} fill="#00D9A5" />
        <path d={svgPathsFull.pa796300} fill="black" />
        <path d={svgPathsFull.pe82b970} fill="black" />
        <path d={svgPathsFull.p2b017000} fill="black" />
        <path d={svgPathsFull.p29b4e980} fill="black" />
      </svg>
    </div>
  );
}