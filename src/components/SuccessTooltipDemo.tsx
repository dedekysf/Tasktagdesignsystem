import { useState } from 'react';
import { Tooltip } from './Tooltip';
import { Button } from './Button';
import { SuccessTooltip } from './SuccessTooltip';

export function SuccessTooltipDemo() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <Tooltip 
      variant="bottom-center"
      forceShow={showSuccess}
      content={showSuccess ? <SuccessTooltip message="Link copied!" /> : "Copy link"}
      size="sm"
      style={showSuccess ? "custom" : "default"}
    >
      <Button variant="fill" size="sm" className="btn-primary" onClick={handleClick}>
        Click to copy
      </Button>
    </Tooltip>
  );
}