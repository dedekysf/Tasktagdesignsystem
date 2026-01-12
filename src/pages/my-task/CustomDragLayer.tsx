import { useDragLayer } from "react-dnd";

const layerStyles: React.CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

function getItemStyles(
  currentOffset: { x: number; y: number } | null
) {
  if (!currentOffset) {
    return {
      display: "none",
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  
  return {
    transform,
    WebkitTransform: transform,
  };
}

export function CustomDragLayer() {
  const { itemType, isDragging, item, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

  if (!isDragging || itemType !== "TASK") {
    return null;
  }

  const selectedCount = item?.selectedTaskIds?.length || 0;
  const isMultiDrag = selectedCount > 1;

  // Only show badge for multi-drag
  if (!isMultiDrag) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(currentOffset)}>
        {/* Badge showing count - positioned near cursor */}
        <div 
          className="bg-[var(--text-primary)] text-white text-[12px] rounded-full size-6 flex items-center justify-center shadow-lg"
          style={{
            marginLeft: '20px',
            marginTop: '-10px',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          {selectedCount}
        </div>
      </div>
    </div>
  );
}
