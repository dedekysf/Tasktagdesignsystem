import { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { Tooltip as MainTooltip } from '../../components/Tooltip';
import { FileText, ChevronDown, ImagePlus, Plus, Eye, MoreVertical, FileImage, Circle, CheckCircle2 } from 'lucide-react';

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
  );
}

interface FileItemProps {
  id: string;
  name: string;
  url?: string;
  type: 'image' | 'pdf' | 'doc';
  uploader: {
    name: string;
    initials: string;
    color: string;
    avatar?: string;
  };
  date: string;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
}

function FileItem({ id, name, url, type, uploader, date, isSelected, onSelect }: FileItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (onSelect) {
      onSelect(id);
    }
  };
  
  return (
    <div className="flex flex-col gap-[8px]">
      {/* Thumbnail with Selection Circle */}
      <div 
        className="relative rounded-[8px] overflow-hidden cursor-pointer"
        style={{ 
          aspectRatio: '1/1'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Thumbnail Background */}
        {type === 'image' && url ? (
          <img 
            src={url} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div 
            className="w-full h-full flex flex-col items-center justify-center gap-[8px]"
            style={{ 
              backgroundColor: type === 'pdf' ? 'var(--light-peach)' : 'var(--light-sky)'
            }}
          >
            {type === 'pdf' ? (
              <>
                <div 
                  className="w-[48px] h-[48px] rounded-[8px] flex items-center justify-center"
                  style={{ backgroundColor: 'var(--alert-red)' }}
                >
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif'
                  }}>PDF</span>
                </div>
                <p 
                  className="text-center px-2 truncate max-w-full"
                  style={{
                    fontSize: '10px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-secondary)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {name}
                </p>
              </>
            ) : (
              <>
                <div 
                  className="w-[48px] h-[48px] rounded-[8px] flex items-center justify-center"
                  style={{ backgroundColor: 'var(--blue)' }}
                >
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif'
                  }}>DOC</span>
                </div>
                <p 
                  className="text-center px-2 truncate max-w-full"
                  style={{
                    fontSize: '10px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-secondary)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {name}
                </p>
              </>
            )}
          </div>
        )}
        
        {/* Selection Circle Icon - Top Right Corner (on hover or when selected) */}
        {(isHovered || isSelected) && (
          <div 
            className="absolute top-[8px] right-[8px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            {isSelected ? (
              <CheckCircle2 
                className="w-5 h-5" 
                style={{ 
                  color: 'white',
                  fill: 'var(--primary)',
                  strokeWidth: 2
                }} 
              />
            ) : (
              <Circle 
                className="w-5 h-5" 
                style={{ 
                  color: 'white',
                  fill: 'rgba(255, 255, 255, 0.8)',
                  strokeWidth: 2
                }} 
              />
            )}
          </div>
        )}
      </div>
      
      {/* Uploader Info - Avatar + Name + Date (Horizontal Layout) */}
      <div className="flex items-center gap-[8px]">
        {/* Avatar */}
        <div 
          className="shrink-0 rounded-full"
          style={{ 
            width: '20px',
            height: '20px'
          }}
        >
          {uploader.avatar ? (
            <img 
              src={uploader.avatar} 
              alt={uploader.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div 
              className="w-full h-full rounded-full flex items-center justify-center"
              style={{ backgroundColor: uploader.color }}
            >
              <span style={{
                fontSize: '8px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'white',
                fontFamily: 'Inter, sans-serif'
              }}>
                {uploader.initials}
              </span>
            </div>
          )}
        </div>
        
        {/* Name and Date */}
        <div className="flex flex-col min-w-0 flex-1">
          <p 
            className="truncate"
            style={{
              fontSize: 'var(--text-caption)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--text-primary)',
              lineHeight: '16px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            {uploader.name}
          </p>
          <p 
            className="truncate"
            style={{
              fontSize: '10px',
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--grey-05)',
              lineHeight: '12px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export const FilesAndMedia = forwardRef<{
  addFiles: (files: FileList) => void;
  getSelectedCount: () => number;
  clearSelection: () => void;
  deleteSelected: () => void;
}>((props, ref) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [files, setFiles] = useState([
    {
      id: 'file-1',
      name: 'construction-site.jpg',
      url: 'https://images.unsplash.com/photo-1626233558206-28a3e90ef311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzY4MTkwMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'image' as const,
      uploader: {
        name: 'Logan Martinez',
        initials: 'LM',
        color: '#A85796',
        avatar: undefined
      },
      date: 'Oct 17, 2025'
    },
    {
      id: 'file-2',
      name: 'mechanical-part.jpg',
      url: 'https://images.unsplash.com/photo-1715322506425-2fc19fe0fc5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBnZWFyfGVufDF8fHx8MTc2ODIzMzM0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'image' as const,
      uploader: {
        name: 'Jose Rodriguez',
        initials: 'JR',
        color: '#1572A1',
        avatar: undefined
      },
      date: 'Oct 17, 2025'
    },
    {
      id: 'file-3',
      name: 'interior-hallway.jpg',
      url: 'https://images.unsplash.com/photo-1527781277828-b91cf323503a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGhhbGx3YXl8ZW58MXx8fHwxNzY4MjMzMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'image' as const,
      uploader: {
        name: 'Emma Davis',
        initials: 'ED',
        color: '#655D8A',
        avatar: undefined
      },
      date: 'Oct 16, 2025'
    },
    {
      id: 'file-4',
      name: 'blueprint.jpg',
      url: 'https://images.unsplash.com/photo-1721244654392-9c912a6eb236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnR8ZW58MXx8fHwxNzY4MjEzNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'image' as const,
      uploader: {
        name: 'Michael Chen',
        initials: 'MC',
        color: '#138EFF',
        avatar: undefined
      },
      date: 'Oct 16, 2025'
    },
    {
      id: 'file-5',
      name: 'safety-inspection.jpg',
      url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=300&h=300&fit=crop',
      type: 'image' as const,
      uploader: {
        name: 'David Garcia',
        initials: 'DG',
        color: '#FC7F5B',
        avatar: undefined
      },
      date: 'Oct 15, 2025'
    },
    {
      id: 'file-6',
      name: 'concrete-structure.jpg',
      url: 'https://images.unsplash.com/photo-1590496793907-4b85e0b49fa6?w=300&h=300&fit=crop',
      type: 'image' as const,
      uploader: {
        name: 'Sarah Williams',
        initials: 'SW',
        color: '#E6B566',
        avatar: undefined
      },
      date: 'Oct 15, 2025'
    },
    {
      id: 'file-7',
      name: 'first_draft_inspection_report.pdf',
      type: 'pdf' as const,
      uploader: {
        name: 'Alex Chen',
        initials: 'AC',
        color: '#1572A1',
        avatar: undefined
      },
      date: 'Oct 15, 2025'
    },
    {
      id: 'file-8',
      name: 'electrical_safety_guidelines.doc',
      type: 'doc' as const,
      uploader: {
        name: 'James Wilson',
        initials: 'JW',
        color: '#138EFF',
        avatar: undefined
      },
      date: 'Oct 18, 2025'
    }
  ]);

  const handleFileSelect = (id: string) => {
    setSelectedFiles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle file upload
      console.log('Files selected:', files);
      // Reset input so same file can be selected again
      e.target.value = '';
    }
  };

  useImperativeHandle(ref, () => ({
    addFiles: (newFiles: FileList) => {
      // Handle file upload
      console.log('Adding files:', newFiles);
    },
    getSelectedCount: () => selectedFiles.size,
    clearSelection: () => setSelectedFiles(new Set()),
    deleteSelected: () => {
      setFiles(prev => prev.filter(f => !selectedFiles.has(f.id)));
      setSelectedFiles(new Set());
    }
  }));

  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-lg shrink-0 w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,audio/*,video/*,.pdf,.doc,.docx,.txt"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      
      {/* Accordion Header */}
      <div 
        className="flex items-center justify-between w-full px-[16px] py-[16px] transition-colors"
        style={{ backgroundColor: isHovered ? 'var(--grey-01)' : 'transparent' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex items-center gap-[12px] cursor-pointer flex-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FileImage className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
          <span style={{
            fontWeight: 'var(--font-weight-semibold)',
            fontSize: '16px',
            color: 'var(--text-primary)',
            lineHeight: '21px',
            fontFamily: 'Inter, sans-serif'
          }}>
            Files & Media
          </span>
        </div>
        
        <div className="flex items-center gap-[16px]">
          {/* Upload Icon Button with Tooltip */}
          <MainTooltip
            variant="top-center"
            content="Upload File"
            size="sm"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleUploadClick();
              }}
              className="box-border flex gap-[8px] h-[32px] w-[32px] items-center justify-center rounded transition-colors"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--grey-02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ImagePlus className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
            </button>
          </MainTooltip>
          
          <div 
            className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronDownIcon isOpen={isOpen} />
          </div>
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="relative shrink-0 w-full px-[16px] pb-[16px]">
          {/* Files Grid - 4 columns */}
          <div className="grid grid-cols-4 gap-[12px]">
            {files.map(file => (
              <FileItem
                key={file.id}
                id={file.id}
                name={file.name}
                url={file.url}
                type={file.type}
                uploader={file.uploader}
                date={file.date}
                isSelected={selectedFiles.has(file.id)}
                onSelect={handleFileSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
});