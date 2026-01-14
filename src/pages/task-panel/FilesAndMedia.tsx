import { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { Tooltip as MainTooltip } from '../../components/Tooltip';
import { Checkbox } from '../../components/Checkbox';
import { TextInput } from '../../components/TextInput';
import { FileText, ChevronDown, ImagePlus, Plus, Eye, MoreVertical, FileImage, Circle, CheckCircle2, Loader2, X, Check, Search, Trash2 } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Checkbox as RadixCheckbox } from "../../components/ui/checkbox";
import Pdf from '../../imports/Pdf';
import Doc from '../../imports/Doc';
import Xls from '../../imports/Xls';
import Ppt from '../../imports/Ppt';
import Zip from '../../imports/Zip';
import Txt from '../../imports/Txt';
import Xml from '../../imports/Xml';
import Html from '../../imports/Html';
import Eps from '../../imports/Eps';

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
  );
}

interface FileItemProps {
  id: string;
  name: string;
  url?: string;
  type: 'image' | 'pdf' | 'doc' | 'xls' | 'ppt' | 'zip' | 'txt' | 'xml' | 'html' | 'eps';
  uploader: {
    name: string;
    initials: string;
    color: string;
    avatar?: string;
  };
  date: string;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  status?: 'uploaded' | 'uploading' | 'loading';
}

function FileItem({ id, name, url, type, uploader, date, isSelected, onSelect, status = 'uploaded' }: FileItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleClick = () => {
    if (status === 'uploaded' && onSelect) {
      onSelect(id);
    }
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div className="flex flex-col gap-[8px]">
      {/* Thumbnail with Selection Circle */}
      <div 
        className="relative rounded-[8px] overflow-hidden border transition-all"
        style={{ 
          aspectRatio: '1/1',
          borderColor: isSelected ? 'transparent' : 'var(--grey-03)',
          cursor: status === 'uploaded' ? 'pointer' : 'default'
        }}
        onMouseEnter={() => status === 'uploaded' && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Loading State */}
        {(status === 'uploading' || status === 'loading') && (
          <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'var(--grey-02)' }}>
            <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24" fill="none">
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        )}
        
        {/* Uploaded State */}
        {status === 'uploaded' && (
          <>
            {/* Thumbnail Background */}
            {type === 'image' && url && !imageError ? (
              <>
                {/* Image Overlay - halus untuk image */}
                <div 
                  className="absolute inset-0 bg-black transition-opacity pointer-events-none"
                  style={{
                    opacity: isSelected ? 0.2 : (isHovered ? 0.1 : 0)
                  }}
                />
                <img 
                  src={url} 
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </>
            ) : type === 'image' && imageError ? (
              <div 
                className="w-full h-full flex flex-col items-center justify-center gap-[8px]"
                style={{ backgroundColor: 'var(--grey-02)' }}
              >
                <FileImage className="w-12 h-12" style={{ color: 'var(--grey-04)' }} />
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
              </div>
            ) : (
              <div 
                className="w-full h-full flex flex-col items-center justify-center gap-[8px] transition-colors"
                style={{ 
                  backgroundColor: isSelected ? 'var(--grey-03)' : (isHovered ? 'var(--grey-03)' : 'var(--grey-02)')
                }}
              >
                {type === 'pdf' ? (
                  <>
                    <div style={{ width: '56px', height: '56px' }}>
                      <Pdf />
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
                ) : type === 'doc' ? (
                  <>
                    <div style={{ width: '56px', height: '56px' }}>
                      <Doc />
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
                ) : type === 'xls' ? (
                  <>
                    <div style={{ width: '56px', height: '56px' }}>
                      <Xls />
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
                ) : type === 'ppt' ? (
                  <>
                    <div style={{ width: '56px', height: '56px' }}>
                      <Ppt />
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
                ) : type === 'zip' ? (
                  <>
                    <div style={{ width: '56px', height: '56px' }}>
                      <Zip />
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
                ) : type === 'txt' ? (
                  <>
                    <div style={{ width: '56px', height: '56px' }}>
                      <Txt />
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
                ) : type === 'xml' ? (
                  <>
                    <div style={{ width: '56px', height: '56px' }}>
                      <Xml />
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
                ) : type === 'html' ? (
                  <>
                    <div style={{ width: '56px', height: '56px' }}>
                      <Html />
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
                ) : type === 'eps' ? (
                  <>
                    <div style={{ width: '56px', height: '56px' }}>
                      <Eps />
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
                ) : null}
              </div>
            )}
            
            {/* Selection Circle Icon - Top Right Corner (on hover or when selected) */}
            {(isHovered || isSelected) && (
              <div 
                className="absolute top-[8px] right-[8px] cursor-pointer z-10"
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
          </>
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
  const [isOpen, setIsOpen] = useState(false); // Collapsed by default
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0, percent: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Filter states from repository
  const [searchUploader, setSearchUploader] = useState('');
  const [filterMedia, setFilterMedia] = useState(false);
  const [filterDocument, setFilterDocument] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
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
      date: 'Jan 13, 2026',
      timestamp: new Date('2026-01-13').getTime()
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
      date: 'Jan 13, 2026',
      timestamp: new Date('2026-01-13').getTime()
    },
    {
      id: 'file-3',
      name: 'first_draft_inspection_report.pdf',
      type: 'pdf' as const,
      uploader: {
        name: 'Alex Chen',
        initials: 'AC',
        color: '#1572A1',
        avatar: undefined
      },
      date: 'Jan 10, 2026',
      timestamp: new Date('2026-01-10').getTime()
    },
    {
      id: 'file-4',
      name: 'electrical_safety_guidelines.doc',
      type: 'doc' as const,
      uploader: {
        name: 'James Wilson',
        initials: 'JW',
        color: '#138EFF',
        avatar: undefined
      },
      date: 'Jan 11, 2026',
      timestamp: new Date('2026-01-11').getTime()
    }
  ].sort((a, b) => b.timestamp - a.timestamp)); // Sort from latest to oldest

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

  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      await processFileUpload(selectedFiles);
      // Reset input so same file can be selected again
      e.target.value = '';
    }
  };

  const processFileUpload = async (selectedFiles: FileList) => {
    const totalFiles = selectedFiles.length;
    setIsUploading(true);
    setUploadProgress({ current: 0, total: totalFiles, percent: 0 });
    
    // Simulate progressive upload
    for (let i = 0; i < totalFiles; i++) {
      // Update progress
      setUploadProgress({ current: i, total: totalFiles, percent: Math.round((i / totalFiles) * 100) });
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // Get current timestamp to ensure new files are always at the top
    const currentTimestamp = Date.now();
    
    // Convert FileList to array and add to files state
    const newFiles = Array.from(selectedFiles).map((file, index) => {
      const fileType = file.type.startsWith('image/') ? 'image' : 
                      file.type === 'application/pdf' ? 'pdf' : 'doc';
      
      // Create object URL for image preview
      const url = fileType === 'image' ? URL.createObjectURL(file) : undefined;
      
      return {
        id: `file-upload-${currentTimestamp}-${index}`,
        name: file.name,
        url,
        type: fileType as 'image' | 'pdf' | 'doc',
        uploader: {
          name: 'Current User', // In real app, get from auth context
          initials: 'CU',
          color: '#138EFF',
          avatar: undefined
        },
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        // Use current timestamp + index to ensure newest files are always on top
        timestamp: currentTimestamp + index
      };
    });
    
    // Final progress
    setUploadProgress({ current: totalFiles, total: totalFiles, percent: 100 });
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Prepend new files to the beginning and sort by timestamp descending
    setFiles(prev => {
      const combined = [...newFiles, ...prev];
      return combined.sort((a, b) => b.timestamp - a.timestamp);
    });
    
    setIsUploading(false);
    setUploadProgress({ current: 0, total: 0, percent: 0 });
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Drag Enter');
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Drag Leave', e.currentTarget === e.target);
    // Only set isDragging to false if we're leaving the main container
    if (e.currentTarget === e.target) {
      setIsDragging(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    console.log('Drop!', e.dataTransfer.files);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      await processFileUpload(droppedFiles);
    }
  };

  useImperativeHandle(ref, () => ({
    addFiles: async (newFiles: FileList) => {
      // Handle file upload through parent component's drop handler
      console.log('Adding files:', newFiles);
      await processFileUpload(newFiles);
    },
    getSelectedCount: () => selectedFiles.size,
    clearSelection: () => setSelectedFiles(new Set()),
    deleteSelected: () => {
      setFiles(prev => prev.filter(f => !selectedFiles.has(f.id)));
      setSelectedFiles(new Set());
    }
  }));

  // Filter logic from repository - OR logic for checkboxes
  const filteredFiles = files.filter(file => {
    // Filter by uploader name (search)
    if (searchUploader && !file.uploader.name.toLowerCase().includes(searchUploader.toLowerCase())) {
      return false;
    }
    
    // Filter by type - OR logic (show both if both selected)
    if (filterMedia || filterDocument) {
      const isMedia = filterMedia && file.type === 'image';
      const isDocument = filterDocument && (file.type === 'pdf' || file.type === 'doc');
      
      // If both are checked, show both types
      // If only one is checked, show only that type
      if (!isMedia && !isDocument) {
        return false;
      }
    }
    
    return true;
  });

  const handleClearAll = () => {
    setSearchUploader('');
    setFilterMedia(false);
    setFilterDocument(false);
  };

  // Count active filters
  const activeFilterCount = (searchUploader ? 1 : 0) + (filterMedia ? 1 : 0) + (filterDocument ? 1 : 0);
  const hasActiveFilters = activeFilterCount > 0;

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
          {/* Upload Progress Indicator (shown when uploading) */}
          {isUploading && (
            <div className="flex items-center gap-[8px]">
              <Loader2 className="w-4 h-4 animate-spin" style={{ color: 'var(--text-secondary)' }} />
              <span style={{
                fontSize: '12px',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--text-secondary)',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap'
              }}>
                {uploadProgress.current} of {uploadProgress.total} files ({uploadProgress.percent}%)
              </span>
            </div>
          )}
          
          {/* Upload Icon Button with Tooltip */}
          <MainTooltip
            variant="bottom-right"
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
        <div 
          className="relative shrink-0 w-full px-[16px] pb-[16px] flex flex-col gap-[16px]"
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Filter Popover Button */}
          <div className="flex items-center justify-between gap-[8px]">
            <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <PopoverTrigger asChild>
                <button 
                  className="inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-[6px] transition-colors"
                  style={{
                    backgroundColor: isFilterOpen ? 'var(--grey-02)' : 'white',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!isFilterOpen) {
                      e.currentTarget.style.backgroundColor = 'var(--grey-02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isFilterOpen) {
                      e.currentTarget.style.backgroundColor = 'white';
                    }
                  }}
                >
                  {/* Filter Icon */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 5.83333H17.5" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M5 10H15" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M7.5 14.1667H12.5" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Filter
                  </span>
                  
                  {/* Number Indicator */}
                  {hasActiveFilters && (
                    <>
                      <div 
                        className="w-[20px] h-[20px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--success-green)' }}
                      >
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'white',
                          fontFamily: 'Inter, sans-serif'
                        }}>
                          {activeFilterCount}
                        </span>
                      </div>
                      
                      {/* Clear Button X */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClearAll();
                        }}
                        className="w-[20px] h-[20px] flex items-center justify-center rounded-[4px] transition-colors cursor-pointer"
                        style={{ backgroundColor: 'transparent' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--grey-03)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <X className="size-[14px]" style={{ color: 'var(--text-primary)', strokeWidth: 2.5 }} />
                      </div>
                    </>
                  )}
                </button>
              </PopoverTrigger>
              
              <PopoverContent align="start" className="w-[320px] p-0" style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--grey-03)' }}>
                <div className="flex flex-col">
                  {/* Search Input using Main Component */}
                  <div className="p-[16px] pb-[12px]">
                    <TextInput
                      size="sm"
                      placeholder="Search uploader"
                      value={searchUploader}
                      onChange={setSearchUploader}
                      icon={Search}
                      showClearButton={true}
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="flex flex-col px-[16px] py-[8px] gap-[12px]">
                    <div className="flex items-center gap-[12px]">
                      <RadixCheckbox 
                        id="filter-media"
                        checked={filterMedia}
                        onCheckedChange={(checked) => setFilterMedia(checked as boolean)}
                      />
                      <label 
                        htmlFor="filter-media"
                        className="cursor-pointer select-none"
                        style={{
                          fontSize: '14px',
                          fontWeight: 'var(--font-weight-regular)',
                          color: 'var(--text-primary)',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        Media
                      </label>
                    </div>

                    <div className="flex items-center gap-[12px]">
                      <RadixCheckbox 
                        id="filter-document"
                        checked={filterDocument}
                        onCheckedChange={(checked) => setFilterDocument(checked as boolean)}
                      />
                      <label 
                        htmlFor="filter-document"
                        className="cursor-pointer select-none"
                        style={{
                          fontSize: '14px',
                          fontWeight: 'var(--font-weight-regular)',
                          color: 'var(--text-primary)',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        Document
                      </label>
                    </div>
                  </div>

                  {/* Clear All Button */}
                  <div className="px-[16px] py-[12px]" style={{ borderTop: '1px solid var(--grey-03)' }}>
                    <button
                      onClick={handleClearAll}
                      disabled={!hasActiveFilters}
                      className="w-full py-[8px] rounded-[4px] transition-colors"
                      style={{
                        fontSize: '14px',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: hasActiveFilters ? 'pointer' : 'not-allowed',
                        opacity: hasActiveFilters ? 1 : 0.4
                      }}
                      onMouseEnter={(e) => {
                        if (hasActiveFilters) {
                          e.currentTarget.style.backgroundColor = 'var(--grey-02)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Drag & Drop Overlay */}
          {isDragging && (
            <div 
              className="absolute inset-0 z-10 flex items-center justify-center rounded-[8px] pointer-events-none"
              style={{ 
                backgroundColor: 'rgba(19, 142, 255, 0.1)',
                border: '2px dashed var(--primary)',
                margin: '0 16px 16px 16px'
              }}
            >
              <div className="flex flex-col items-center gap-[12px]">
                <ImagePlus className="w-12 h-12" style={{ color: 'var(--primary)' }} />
                <span style={{
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--primary)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Drop files here to upload
                </span>
              </div>
            </div>
          )}
          
          {/* Files Grid - 4 columns */}
          <div className="grid grid-cols-4 gap-[12px]">
            {filteredFiles.map(file => (
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