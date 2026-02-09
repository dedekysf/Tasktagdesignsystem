import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileFrame } from './MobileFrame';
import { StatusBar } from './StatusBar';
import { HomeBar } from './HomeBar';
import { Avatar } from '../AvatarComponent';
import { 
  ChevronLeft, 
  MoreVertical, 
  HardHat, 
  Hammer, 
  UserPlus, 
  FileText, 
  Hash, 
  Zap, 
  FileImage, 
  Plus,
  ChevronRight
} from 'lucide-react';
import { FAB } from './FAB';
import { toast, Toaster } from 'sonner';
import { Banner } from './Banner';
import { motion, AnimatePresence } from 'motion/react';

export default function NudgePage() {
  const navigate = useNavigate();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const descriptionText = "This project involves a full residential home renovation aimed at improving functionality, comfort, safety, and visual appeal of the property. The scope includes initial assessment and planning, demolition of selected areas, structural adjustments, electrical and plumbing upgrades, flooring and wall finishing, cabinetry installation, painting, and final quality inspection. The project requires close coordination between contractors, suppliers, designers, and homeowners to ensure work is completed according to specifications, budget, and timeline. All tasks, files, approvals, progress updates, and communication will be managed within this project to maintain transparency, minimize delays, and ensure a smooth renovation process from start to handover.";

  const handleBack = () => {
    navigate(-1);
  };

  const handleMore = () => {
    toast.info("More options");
  };

  const handleSeeAllMembers = () => {
    toast.info("See all members");
  };

  const handleInvite = () => {
    toast.success("Invite sent!");
  };

  const handleCardClick = (cardName: string) => {
    toast.info(`Clicked ${cardName}`);
  };

  const handleNewUpdate = () => {
    toast.success("New update created");
  };

  return (
    <MobileFrame>
      <style>{`
        .mobile-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--grey-04) transparent;
        }
        .mobile-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .mobile-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .mobile-scrollbar::-webkit-scrollbar-thumb {
          background-color: var(--grey-04);
          border-radius: 4px;
        }
      `}</style>
      
      <StatusBar />
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-[44px] shrink-0 bg-background border-b border-[var(--grey-03)]">
        <div className="flex items-center gap-2">
          <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-[var(--grey-02)]">
            <ChevronLeft size={24} color="var(--text-primary)" />
          </button>
          <h1 className="text-mobile-large-label text-[var(--text-primary)]">Project Details</h1>
        </div>
        <button onClick={handleMore} className="p-2 -mr-2 rounded-full hover:bg-[var(--grey-02)]">
          <MoreVertical size={24} color="var(--text-primary)" />
        </button>
      </div>

      {/* Content */}
      <div 
        ref={scrollContainerRef} 
        className="flex-1 overflow-y-auto mobile-scrollbar bg-[var(--grey-02)] px-4 pt-4 pb-24 space-y-3"
      >
        {/* Project Card */}
        <div className="w-full bg-[var(--purple)] rounded-[8px] p-4 text-white">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <div className="shrink-0">
                <HardHat size={24} color="white" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-mobile-large-label mb-1 font-semibold">Raintree Hollow</h2>
                <p className="text-mobile-metadata-primary opacity-90 leading-4">11 N Raintree Hollow Ln, Houston, Texas 77027, USA</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Team Tag */}
              <div className="flex items-center gap-2">
                <div className="bg-black p-[6px] rounded-[4px] shrink-0">
                  <Hammer size={12} color="white" />
                </div>
                <p className="text-mobile-metadata-primary">Aquaworks Construct...</p>
              </div>
              
              {/* Owner Tag */}
              <div className="flex items-center gap-2">
                <Avatar 
                  size="xs" 
                  initials="AS" 
                  variant="initials" 
                  backgroundColor="var(--pastel-orange)"
                  style={{ width: '24px', height: '24px', border: 'none', color: 'white', fontSize: '12px' }}
                />
                <p className="text-mobile-metadata-primary">Alex Smith</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description Card */}
        <div className="w-full bg-white rounded-[8px] p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-mobile-label-emphasized text-[var(--text-primary)]">Description</h3>
            <button 
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="text-mobile-metadata-primary text-[var(--grey-05)]"
            >
              {isDescriptionExpanded ? "Show Less" : "See More"}
            </button>
          </div>
          <p className="text-mobile-metadata-primary text-[var(--text-secondary)] leading-[1.5] whitespace-pre-wrap">
            {isDescriptionExpanded ? descriptionText : `${descriptionText.slice(0, 150)}...`}
          </p>
        </div>

        {/* Member Card */}
        <div className="w-full bg-white rounded-[8px] p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-mobile-label-emphasized text-[var(--text-primary)]">Member (1)</h3>
            <button onClick={handleSeeAllMembers} className="text-mobile-metadata-primary text-[var(--grey-05)]">See All</button>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={handleInvite}>
              <div className="w-14 h-14 bg-[var(--grey-02)] rounded-full flex items-center justify-center">
                <UserPlus size={24} color="var(--text-secondary)" />
              </div>
              <span className="text-mobile-metadata-primary text-[var(--grey-05)]">Invite</span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <Avatar 
                size="xl" 
                initials="AS" 
                variant="initials" 
                backgroundColor="var(--pastel-orange)"
                style={{ width: '56px', height: '56px', fontSize: '24px', color: 'white', border: 'none' }}
              />
              <span className="text-mobile-metadata-primary text-[var(--grey-05)]">Alex Smith</span>
            </div>
          </div>
        </div>

        {/* Checklist Card */}
        <div 
          onClick={() => handleCardClick('Checklist')}
          className="w-full bg-white rounded-[8px] p-4 flex items-center justify-between cursor-pointer active:bg-[var(--grey-01)] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="bg-black p-[6px] rounded-[6px]">
              <FileText size={20} color="white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-mobile-label-emphasized text-[var(--text-primary)]">Checklist</h3>
              <p className="text-mobile-metadata-primary text-[var(--text-secondary)]">Start faster with a project template.</p>
            </div>
          </div>
          <ChevronRight size={24} color="var(--text-primary)" />
        </div>

        {/* Tasks Card */}
        <div 
          onClick={() => handleCardClick('Tasks')}
          className="w-full bg-white rounded-[8px] p-4 flex items-center justify-between cursor-pointer active:bg-[var(--grey-01)] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="bg-black p-[6px] rounded-[6px]">
              <Hash size={20} color="white" />
            </div>
            <h3 className="text-mobile-label-emphasized text-[var(--text-primary)]">Tasks</h3>
          </div>
          <ChevronRight size={24} color="var(--text-primary)" />
        </div>

        {/* Activity & Files Grid */}
        <div className="flex gap-3">
          {/* Activity Log */}
          <div 
            onClick={() => handleCardClick('Activity Log')}
            className="flex-1 bg-white rounded-[8px] p-4 flex flex-col items-start gap-3 cursor-pointer active:bg-[var(--grey-01)] transition-colors min-h-[95px]"
          >
            <div className="bg-black p-[6px] rounded-[6px]">
              <Zap size={20} color="white" />
            </div>
            <h3 className="text-mobile-label-emphasized text-[var(--text-primary)]">Activity Log</h3>
          </div>

          {/* Files & Media */}
          <div 
            onClick={() => handleCardClick('Files & Media')}
            className="flex-1 bg-white rounded-[8px] p-4 flex flex-col items-start gap-3 cursor-pointer active:bg-[var(--grey-01)] transition-colors min-h-[95px]"
          >
            <div className="bg-black p-[6px] rounded-[6px]">
              <FileImage size={20} color="white" />
            </div>
            <h3 className="text-mobile-label-emphasized text-[var(--text-primary)]">Files & Media</h3>
          </div>
        </div>
      </div>

      {/* New Update Button */}
      <div className="absolute bottom-[40px] right-4 z-10">
        <FAB 
          label="New Update" 
          onClick={handleNewUpdate}
          icon={<Plus size={20} color="white" />}
          className="bg-[var(--black)] px-6"
          absolute={false}
        />
      </div>

      <div className="absolute bottom-0 w-full z-50">
        <HomeBar />
      </div>
      
      {/* Nudge Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-0 left-0 right-0 z-[60] px-4 pb-8 flex justify-center"
          >
            <Banner 
              variant="2 CTA" 
              onPrimaryAction={() => toast.success("Project created!")}
              onSecondaryAction={() => setShowBanner(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster position="bottom-center" />
    </MobileFrame>
  );
}
