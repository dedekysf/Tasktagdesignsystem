import { useState } from "react";
import linkSvgPaths from "../../../imports/svg-yoqo3girmi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import { SuccessTooltip } from "../../../components/SuccessTooltip";

export function CopyLinkButton() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = window.location.href;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      
      setIsCopied(true);
      
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip open={isCopied ? true : undefined}>
        <TooltipTrigger asChild>
          <button 
            onClick={handleCopyLink}
            className="size-8 flex items-center justify-center hover:bg-secondary rounded-lg transition-colors cursor-pointer"
          >
            <svg className="size-4" fill="none" viewBox="0 0 16 16">
              <path clipRule="evenodd" d={linkSvgPaths.p265eff80} fill="var(--text-primary)" fillRule="evenodd" />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent 
          side="bottom" 
          align="end"
          className={isCopied ? "p-0 border-none bg-transparent shadow-none" : "bg-[var(--text-secondary)] text-white text-[12px] px-3 py-2 rounded-lg"}
        >
          {isCopied ? <SuccessTooltip message="Link copied!" /> : "Copy link to invite"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}