import { useState } from 'react';
import { ChevronDown, File, Image as ImageIcon, Trash2, Download, Eye, MoreVertical, Upload } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import type { FileItem } from './types';

const mockFiles: FileItem[] = [
  {
    id: '1',
    name: 'circuit-diagram.pdf',
    type: 'pdf',
    size: '2.4 MB',
    uploadedBy: 'Melissa Smith',
    uploadedAt: 'Oct 15, 2025',
    url: '#',
  },
  {
    id: '2',
    name: 'electrical-panel.jpg',
    type: 'image',
    size: '1.8 MB',
    uploadedBy: 'Logan Smith',
    uploadedAt: 'Oct 14, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200&h=200&fit=crop',
  },
  {
    id: '3',
    name: 'safety-checklist.docx',
    type: 'docx',
    size: '156 KB',
    uploadedBy: 'Melissa Smith',
    uploadedAt: 'Oct 13, 2025',
  },
];

function FileIcon({ type }: { type: string }) {
  if (type === 'image') {
    return <ImageIcon className="size-5" style={{ color: 'var(--blue)' }} />;
  }
  return <File className="size-5" style={{ color: 'var(--text-secondary)' }} />;
}

function FileCard({ file, onDelete }: { file: FileItem; onDelete: (id: string) => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg border transition-all overflow-hidden"
      style={{
        backgroundColor: isHovered ? 'var(--grey-01)' : 'var(--white)',
        borderColor: 'var(--border)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail or Icon */}
      {file.thumbnail ? (
        <div className="w-full h-40 overflow-hidden">
          <img
            src={file.thumbnail}
            alt={file.name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div
          className="w-full h-40 flex items-center justify-center"
          style={{ backgroundColor: 'var(--grey-02)' }}
        >
          <FileIcon type={file.type} />
        </div>
      )}

      {/* File Info */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <p
            className="flex-1 truncate"
            style={{
              fontSize: 'var(--text-label)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--text-primary)',
            }}
          >
            {file.name}
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 rounded hover:bg-[var(--grey-02)]">
                <MoreVertical className="size-4" style={{ color: 'var(--text-secondary)' }} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer">
                <Eye className="size-4 mr-2" />
                <span style={{ fontSize: 'var(--text-label)' }}>View</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Download className="size-4 mr-2" />
                <span style={{ fontSize: 'var(--text-label)' }}>Download</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                style={{ color: 'var(--alert-red)' }}
                onClick={() => onDelete(file.id)}
              >
                <Trash2 className="size-4 mr-2" />
                <span style={{ fontSize: 'var(--text-label)' }}>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p
          style={{
            fontSize: 'var(--text-caption)',
            color: 'var(--text-secondary)',
          }}
        >
          {file.size} • {file.uploadedAt}
        </p>
        <p
          style={{
            fontSize: 'var(--text-caption)',
            color: 'var(--text-secondary)',
          }}
        >
          Uploaded by {file.uploadedBy}
        </p>
      </div>
    </div>
  );
}

export function FilesAndMedia() {
  const [isOpen, setIsOpen] = useState(true);
  const [files, setFiles] = useState<FileItem[]>(mockFiles);

  const handleDelete = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleUpload = () => {
    // Simulated file upload
    const newFile: FileItem = {
      id: Date.now().toString(),
      name: 'new-file.pdf',
      type: 'pdf',
      size: '1.2 MB',
      uploadedBy: 'You',
      uploadedAt: 'Just now',
    };
    setFiles(prev => [newFile, ...prev]);
  };

  return (
    <div className="flex flex-col items-start overflow-clip rounded-lg shrink-0 w-full">
      {/* Accordion Header */}
      <div
        className="flex items-center justify-between w-full px-4 py-4 cursor-pointer transition-colors"
        style={{ backgroundColor: isOpen ? 'var(--grey-01)' : 'transparent' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <ImageIcon className="size-5" style={{ color: 'var(--text-secondary)' }} />
          <span
            style={{
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
            }}
          >
            Files & Media
          </span>
          <span
            className="px-2 py-0.5 rounded"
            style={{
              fontSize: 'var(--text-caption)',
              backgroundColor: 'var(--grey-02)',
              color: 'var(--text-secondary)',
            }}
          >
            {files.length}
          </span>
        </div>

        <div
          className="w-6 h-6 flex items-center justify-center transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown className="size-5" style={{ color: 'var(--text-secondary)' }} />
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="w-full px-4 pb-4 space-y-4">
          {/* Upload Button */}
          <button
            onClick={handleUpload}
            className="w-full rounded-lg transition-colors"
            style={{ backgroundColor: 'var(--grey-02)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--grey-03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--grey-02)';
            }}
          >
            <div className="flex items-center justify-center gap-2 px-4 py-4">
              <Upload className="size-4" style={{ color: 'var(--secondary-green)' }} />
              <p
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--secondary-green)',
                }}
              >
                Upload Files
              </p>
            </div>
          </button>

          {/* Files Grid */}
          <div className="grid grid-cols-2 gap-3">
            {files.map((file) => (
              <FileCard key={file.id} file={file} onDelete={handleDelete} />
            ))}
          </div>

          {files.length === 0 && (
            <div
              className="flex flex-col items-center justify-center py-12 rounded-lg"
              style={{ backgroundColor: 'var(--grey-02)' }}
            >
              <ImageIcon className="size-12 mb-3" style={{ color: 'var(--grey-04)' }} />
              <p
                style={{
                  fontSize: 'var(--text-label)',
                  color: 'var(--text-secondary)',
                }}
              >
                No files uploaded yet
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
