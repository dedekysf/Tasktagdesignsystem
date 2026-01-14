import { ChevronLeft, ChevronRight, Download, RotateCw, ZoomIn, ZoomOut, MoreVertical, Folder, Hash } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface FileData {
  id: string;
  type: 'media' | 'document';
  name: string;
  url: string;
  uploader: string;
  uploadDate: string;
  fileExtension?: string;
}

interface FilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  files: FileData[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  projectName: string;
  taskName: string;
}

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <div 
      className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <span style={{
        fontFamily: 'var(--font-family-base)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: '14px',
        color: 'var(--white)'
      }}>
        {initials}
      </span>
    </div>
  );
}

function getAvatarColor(name: string): string {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#DDA15E', '#BC6C25'];
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
}

function DocumentIcon({ extension }: { extension?: string }) {
  const ext = extension?.toLowerCase() || 'file';
  
  // Different colors for different file types
  const getColor = () => {
    if (ext === 'pdf') return '#E53935';
    if (ext === 'doc' || ext === 'docx') return '#2196F3';
    if (ext === 'xls' || ext === 'xlsx') return '#0F9D58';
    if (ext === 'ppt' || ext === 'pptx') return '#F4B400';
    return '#757575';
  };

  const color = getColor();
  
  const getLabel = () => {
    if (ext === 'pdf') return 'PDF';
    if (ext === 'doc' || ext === 'docx') return 'DOC';
    if (ext === 'xls' || ext === 'xlsx') return 'XLS';
    if (ext === 'ppt' || ext === 'pptx') return 'PPT';
    return ext.toUpperCase();
  };

  return (
    <div className="flex flex-col items-center gap-[24px]">
      <div className="relative">
        {/* Document icon background - smaller size like repository */}
        <svg width="80" height="96" viewBox="0 0 40 48" fill="none">
          <path d="M0 3C0 1.34315 1.34315 0 3 0H26L40 14V45C40 46.6569 38.6569 48 37 48H3C1.34315 48 0 46.6569 0 45V3Z" fill="#E0E0E0"/>
          <path d="M26 0L40 14H29C27.3431 14 26 12.6569 26 11V0Z" fill="#BDBDBD"/>
        </svg>
        {/* Badge label */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2">
          <div 
            className="px-[12px] py-[4px] rounded-[4px]"
            style={{ backgroundColor: color }}
          >
            <span style={{
              fontFamily: 'var(--font-family-base)',
              fontWeight: 'var(--font-weight-semibold)',
              fontSize: '20px',
              color: 'var(--white)'
            }}>
              {getLabel()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectTag({ name }: { name: string }) {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" style={{ backgroundColor: 'var(--secondary-green)' }}>
      <Folder className="w-[16px] h-[16px]" style={{ color: 'var(--white)' }} />
      <span style={{
        fontSize: '14px',
        color: 'var(--white)',
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-family-base)',
        fontWeight: 'var(--font-weight-regular)'
      }}>
        {name}
      </span>
    </div>
  );
}

function TaskTag({ name }: { name: string }) {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" style={{ backgroundColor: 'var(--text-primary)' }}>
      <Hash className="w-[16px] h-[16px]" style={{ color: 'var(--white)' }} />
      <span style={{
        fontSize: '14px',
        color: 'var(--white)',
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-family-base)',
        fontWeight: 'var(--font-weight-regular)'
      }}>
        {name}
      </span>
    </div>
  );
}

export function FilePreviewModal({ isOpen, onClose, files, currentIndex, onNavigate, projectName, taskName }: FilePreviewModalProps) {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  if (!isOpen || files.length === 0) return null;

  const currentFile = files[currentIndex];
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < files.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  const handleDownload = () => {
    // Mock download
    console.log('Download file:', currentFile.name);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(200, prev + 25));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(25, prev - 25));
  };

  const handleResetZoom = () => {
    setZoom(100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100]"
      style={{ backgroundColor: 'var(--black)' }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-[60px] px-[24px] flex items-center justify-between z-10" style={{ backgroundColor: 'var(--grey-07)' }}>
        {/* Left - Back button + User info */}
        <div className="flex items-center gap-[12px]">
          <button
            onClick={onClose}
            className="w-[40px] h-[40px] flex items-center justify-center rounded transition-colors cursor-pointer"
            style={{ backgroundColor: 'transparent' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            title="Back"
          >
            <ChevronLeft className="w-[20px] h-[20px]" style={{ color: 'var(--white)' }} />
          </button>
          
          <Avatar name={currentFile.uploader} color={getAvatarColor(currentFile.uploader)} />
          <div className="flex flex-col">
            <span style={{
              fontFamily: 'var(--font-family-base)',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: '14px',
              color: 'var(--white)'
            }}>
              {currentFile.uploader}
            </span>
            <span style={{
              fontFamily: 'var(--font-family-base)',
              fontWeight: 'var(--font-weight-regular)',
              fontSize: '12px',
              color: '#B0B0B0'
            }}>
              {currentFile.uploadDate}
            </span>
          </div>
        </div>

        {/* Center - Filename (Absolute centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="max-w-[400px] truncate" style={{
            fontFamily: 'var(--font-family-base)',
            fontWeight: 'var(--font-weight-medium)',
            fontSize: '14px',
            color: 'var(--white)'
          }}>
            {currentFile.name}
          </span>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-[8px]">
          {/* Action Toolbar - Media */}
          {currentFile.type === 'media' && (
            <>
              <button
                onClick={handleDownload}
                className="w-[36px] h-[36px] flex items-center justify-center rounded transition-colors cursor-pointer"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="Download"
              >
                <Download className="w-[18px] h-[18px]" style={{ color: 'var(--white)' }} />
              </button>
              
              <button
                onClick={handleRotate}
                className="w-[36px] h-[36px] flex items-center justify-center rounded transition-colors cursor-pointer"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="Rotate"
              >
                <RotateCw className="w-[18px] h-[18px]" style={{ color: 'var(--white)' }} />
              </button>
              
              <button
                onClick={handleZoomOut}
                className="w-[36px] h-[36px] flex items-center justify-center rounded transition-colors cursor-pointer"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="Zoom Out"
              >
                <ZoomOut className="w-[18px] h-[18px]" style={{ color: 'var(--white)' }} />
              </button>
              
              <button
                onClick={handleZoomIn}
                className="w-[36px] h-[36px] flex items-center justify-center rounded transition-colors cursor-pointer"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="Zoom In"
              >
                <ZoomIn className="w-[18px] h-[18px]" style={{ color: 'var(--white)' }} />
              </button>
              
              <button
                onClick={handleResetZoom}
                className="px-[10px] h-[36px] flex items-center justify-center rounded transition-colors cursor-pointer"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="Reset Zoom"
              >
                <span style={{
                  fontFamily: 'var(--font-family-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: '13px',
                  color: 'var(--white)'
                }}>
                  {zoom}%
                </span>
              </button>
              
              <button
                className="w-[36px] h-[36px] flex items-center justify-center rounded transition-colors cursor-pointer"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="More Options"
              >
                <MoreVertical className="w-[18px] h-[18px]" style={{ color: 'var(--white)' }} />
              </button>
            </>
          )}
          
          {/* Action Toolbar - Document */}
          {currentFile.type === 'document' && (
            <>
              <button
                onClick={handleDownload}
                className="w-[36px] h-[36px] flex items-center justify-center rounded transition-colors cursor-pointer"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="Download"
              >
                <Download className="w-[18px] h-[18px]" style={{ color: 'var(--white)' }} />
              </button>
              
              <button
                className="w-[36px] h-[36px] flex items-center justify-center rounded transition-colors cursor-pointer"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="More Options"
              >
                <MoreVertical className="w-[18px] h-[18px]" style={{ color: 'var(--white)' }} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="absolute left-[24px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        >
          <ChevronLeft className="w-[24px] h-[24px]" style={{ color: 'var(--white)' }} />
        </button>
      )}

      {currentIndex < files.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-[24px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        >
          <ChevronRight className="w-[24px] h-[24px]" style={{ color: 'var(--white)' }} />
        </button>
      )}

      {/* Main Content */}
      <div className="absolute inset-0 top-[60px] bottom-[140px] flex items-center justify-center p-[24px]">
        {currentFile.type === 'media' ? (
          <div 
            className="max-w-full max-h-full flex items-center justify-center"
            style={{ transform: `scale(${zoom / 100}) rotate(${rotation}deg)` }}
          >
            <ImageWithFallback
              src={currentFile.url}
              alt={currentFile.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-[32px]">
            <DocumentIcon extension={currentFile.fileExtension} />
            <button
              onClick={handleDownload}
              className="px-[24px] py-[12px] rounded-[8px] transition-colors flex items-center gap-[8px] cursor-pointer"
              style={{
                backgroundColor: 'var(--white)',
                color: '#1a1a1a',
                fontFamily: 'var(--font-family-base)',
                fontWeight: 'var(--font-weight-medium)',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--white)'}
            >
              <Download className="w-[16px] h-[16px]" />
              Download
            </button>
          </div>
        )}
      </div>

      {/* Tags - Above Thumbnails */}
      <div className="absolute bottom-[100px] left-0 right-0 h-[40px] px-[24px] flex items-center justify-center gap-[8px] z-10" style={{ backgroundColor: 'var(--grey-07)' }}>
        <ProjectTag name={projectName} />
        <TaskTag name={taskName} />
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] px-[24px] flex items-center justify-center gap-[8px] overflow-x-auto z-10" style={{ backgroundColor: 'var(--grey-07)' }}>
        {files.map((file, index) => (
          <button
            key={file.id}
            onClick={() => onNavigate(index)}
            className={`flex-shrink-0 w-[60px] h-[45px] rounded-[4px] overflow-hidden transition-all cursor-pointer ${
              index === currentIndex 
                ? 'ring-2 ring-white' 
                : 'opacity-50 hover:opacity-75'
            }`}
          >
            {file.type === 'media' ? (
              <ImageWithFallback
                src={file.url}
                alt={file.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#3a3a3a] flex items-center justify-center">
                <span style={{
                  color: 'var(--white)',
                  fontSize: '10px',
                  fontFamily: 'var(--font-family-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase'
                }}>
                  {file.fileExtension || 'doc'}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}