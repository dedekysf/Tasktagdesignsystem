import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  FolderPlus, 
  Plus, 
  RotateCcw, 
  Trash2, 
  Check, 
  ImagePlus,
  MapPin,
  Users,
  Folder,
  UserMinus,
  UserPlus,
  PenLine
} from 'lucide-react';
import { GlobalActivityFilterDropdown, ActivityFilterState } from './GlobalActivityFilterDropdown';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { UpgradePromptModal } from '../components/UpgradePromptModal';
import { SubscriptionModal } from '../components/SubscriptionModal';
import { FilePreviewModal } from '../components/FilePreviewModal';
import { Tooltip } from '../components/Tooltip';
import { SearchLoadingSpinner } from '../components/SearchLoadingSpinner';
import Pdf from '../imports/Pdf';
import CheckedInMap from '../imports/CheckedInMap';
import LocationMismatchMap from '../imports/LocationMismatchMap';

// Imports from Figma
import imgImage from "figma:asset/513dd7bc494865ca5a45fb92277a8d681c3397ff.png";
import imgImage1 from "figma:asset/7a9694031ea92e6b7b48ca2477d9e9ff5802fc71.png";
import imgImage5 from "figma:asset/2cc3ba92c0a402567bf37e095262f204b3eb3c99.png";

// Unsplash Images for New Grid Layout
const imgHouse = "https://images.unsplash.com/photo-1549791084-5f78368b208b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const imgBlueStone = "https://images.unsplash.com/photo-1741112654716-b82f484b702c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const imgPinkWall = "https://images.unsplash.com/photo-1534369066665-b0c37b9640d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const imgBrick = "https://images.unsplash.com/photo-1495578942200-c5f5d2137def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const imgDarkBlue = "https://images.unsplash.com/photo-1769025391025-7fe3a726d4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

// Types
interface ActivityAttachmentItem {
  type: 'image' | 'pdf';
  url?: string;
  name?: string;
  className?: string;
  count?: number; // for "+2" overlay
}

interface ActivityAttachment {
  type: 'image' | 'file' | 'doc-group' | 'custom-row' | 'grid';
  url?: string;
  name?: string;
  size?: string;
  count?: number; // for "+2"
  images?: string[]; // for doc-group or multi-image
  items?: ActivityAttachmentItem[]; // for custom-row or grid
}

interface ActivityItem {
  id: string;
  date: string;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
  };
  action: React.ReactNode;
  content?: React.ReactNode;
  tags?: {
    folder?: string;
    hash?: string | { label: string; variant: 'default' | 'crossed-grey' | 'black' };
  };
  attachments?: ActivityAttachment[];
  icon: {
    component: React.ReactNode;
    bgColor: string;
  };
}

// Mock Data based on Figma
const ACTIVITIES: ActivityItem[] = [
  // Dec 30, 2025 (New from Attachment)
  {
    id: 'dec30-1',
    date: 'Dec 30, 2025',
    timestamp: '11:20 AM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Preview of abstract buildings and their motifs</span>,
    tags: { folder: '1320 Smith Street Residential' },
    attachments: [
      { 
        type: 'grid', 
        items: [
          { type: 'image', url: imgImage1 },
          { type: 'pdf', name: 'first_draft_kitchen_sink.pdf' }
        ] 
      }
    ],
    icon: { component: <ImagePlus size={10} color="white" />, bgColor: 'var(--orange)' }
  },
  {
    id: 'dec30-2',
    date: 'Dec 30, 2025',
    timestamp: '11:00 AM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Preview of abstract buildings and their motifs</span>,
    tags: { folder: '1320 Smith Street Residential' },
    attachments: [
      { 
        type: 'grid', 
        items: [
          { type: 'image', url: "https://images.unsplash.com/photo-1696743297474-d674b8e3d82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHdoaXRlJTIwYnVpbGRpbmclMjBhYnN0cmFjdCUyMHdoaXRlJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY5NjQ1MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
        ] 
      }
    ],
    icon: { component: <ImagePlus size={10} color="white" />, bgColor: 'var(--orange)' }
  },

  // Jan 6, 2026
  {
    id: 'jan6-1',
    date: 'Jan 6, 2026',
    timestamp: '04:00 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">This task was deleted</span>,
    tags: { folder: '1320 Smith Street Residential', hash: { label: 'Plumbing Inspection', variant: 'crossed-grey' } },
    icon: { component: <Trash2 size={10} color="white" />, bgColor: 'var(--alert-red)' }
  },
  {
    id: 'jan6-2',
    date: 'Jan 6, 2026',
    timestamp: '02:44 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Added <span className="text-[var(--blue)]">@Dedek Yusuf</span> as Task Assignee</span>,
    tags: { folder: '1320 Smith Street Residential', hash: { label: 'Plumbing Inspection', variant: 'crossed-grey' } },
    icon: { component: <Plus size={10} color="white" />, bgColor: 'var(--blue)' }
  },
  {
    id: 'jan6-3',
    date: 'Jan 6, 2026',
    timestamp: '02:44 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Created this task</span>,
    tags: { folder: '1320 Smith Street Residential', hash: { label: 'Plumbing Inspection', variant: 'crossed-grey' } },
    icon: { component: <Plus size={10} color="white" />, bgColor: 'var(--blue)' }
  },
  {
    id: 'jan6-4',
    date: 'Jan 6, 2026',
    timestamp: '01:44 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Restored this task</span>,
    tags: { folder: '1320 Smith Street Residential', hash: { label: 'Foundation Inspection', variant: 'black' } },
    icon: { component: <RotateCcw size={10} color="white" />, bgColor: 'var(--text-secondary)' }
  },
  {
    id: 'jan6-5',
    date: 'Jan 6, 2026',
    timestamp: '01:44 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Completed this task</span>,
    tags: { folder: '1320 Smith Street Residential', hash: { label: 'Foundation Inspection', variant: 'black' } },
    icon: { component: <Check size={10} color="white" />, bgColor: 'var(--secondary-green)' }
  },

  // Jan 5, 2026 - Updated Section
  {
    id: 'jan5-1',
    date: 'Jan 5, 2026',
    timestamp: '11:25 AM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Preview of abstract buildings and sink document</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    attachments: [
      {
        type: 'grid',
        items: [
          { type: 'image', url: imgHouse },
          { type: 'pdf', name: 'first_draft_kitchen_sink.pdf' },
          { type: 'pdf', name: 'second_draft_kitchen_sink.pdf' },
          { type: 'image', url: imgBlueStone },
          { type: 'image', url: imgPinkWall },
          { type: 'image', url: imgBrick },
          { type: 'pdf', name: 'third_draft_kitchen_sink.pdf' },
          { type: 'image', url: imgDarkBlue, count: 2 }
        ]
      }
    ],
    icon: { component: <ImagePlus size={10} color="white" />, bgColor: 'var(--orange)' }
  },
  {
    id: 'jan5-2',
    date: 'Jan 5, 2026',
    timestamp: '11:20 AM',
    user: { name: 'Dedek Yusuf', avatar: imgImage5 },
    action: <span className="text-[var(--text-primary)]">Preview of abstract buildings and sink document</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    attachments: [
      {
        type: 'grid',
        items: [
          { type: 'image', url: imgHouse },
          { type: 'pdf', name: 'first_draft_kitchen_sink.pdf' },
          { type: 'pdf', name: 'second_draft_kitchen_sink.pdf' },
          { type: 'image', url: imgBlueStone },
          { type: 'image', url: imgPinkWall }
        ]
      }
    ],
    icon: { component: <ImagePlus size={10} color="white" />, bgColor: 'var(--orange)' }
  },
  {
    id: 'jan5-3',
    date: 'Jan 5, 2026',
    timestamp: '11:15 AM',
    user: { name: 'Dedek Yusuf', avatar: imgImage5 },
    action: <span className="text-[var(--text-primary)]">Preview of abstract buildings and sink document</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    attachments: [
      {
        type: 'grid',
        items: [
          { type: 'image', url: imgHouse },
          { type: 'pdf', name: 'first_draft_kitchen_sink.pdf' },
          { type: 'pdf', name: 'second_draft_kitchen_sink.pdf' },
          { type: 'image', url: imgBlueStone }
        ]
      }
    ],
    icon: { component: <ImagePlus size={10} color="white" />, bgColor: 'var(--orange)' }
  },
  {
    id: 'jan5-4',
    date: 'Jan 5, 2026',
    timestamp: '11:10 AM',
    user: { name: 'Dedek Yusuf', avatar: imgImage5 },
    action: <span className="text-[var(--text-primary)]">Preview of abstract buildings and sink document</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    attachments: [
      {
        type: 'grid',
        items: [
          { type: 'image', url: imgHouse },
          { type: 'pdf', name: 'first_draft_kitchen_sink.pdf' },
          { type: 'pdf', name: 'second_draft_kitchen_sink.pdf' }
        ]
      }
    ],
    icon: { component: <ImagePlus size={10} color="white" />, bgColor: 'var(--orange)' }
  },
  {
    id: 'jan5-5',
    date: 'Jan 5, 2026',
    timestamp: '11:05 AM',
    user: { name: 'Dedek Yusuf', avatar: imgImage5 },
    action: <span className="text-[var(--text-primary)]">Preview of abstract buildings and sink document</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    attachments: [
      {
        type: 'grid',
        items: [
          { type: 'image', url: imgHouse },
          { type: 'pdf', name: 'first_draft_kitchen_sink.pdf' }
        ]
      }
    ],
    icon: { component: <ImagePlus size={10} color="white" />, bgColor: 'var(--orange)' }
  },
  {
    id: 'jan5-6',
    date: 'Jan 5, 2026',
    timestamp: '11:00 AM',
    user: { name: 'Dedek Yusuf', avatar: imgImage5 },
    action: <span className="text-[var(--text-primary)]">Preview of abstract buildings and their motifs</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    attachments: [
      {
        type: 'grid',
        items: [
          { type: 'image', url: imgHouse }
        ]
      }
    ],
    icon: { component: <ImagePlus size={10} color="white" />, bgColor: 'var(--orange)' }
  },
  {
    id: 'jan5-7',
    date: 'Jan 5, 2026',
    timestamp: '08:10 AM',
    user: { name: 'Dedek Yusuf', avatar: imgImage5 },
    action: <span className="text-[var(--text-primary)]">Im ready to work</span>,
    content: (
      <div className="mt-2 w-[250px]">
         <CheckedInMap />
      </div>
    ),
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    icon: { component: <Check size={10} color="white" />, bgColor: 'var(--secondary-green)' }
  },
  {
    id: 'jan5-8',
    date: 'Jan 5, 2026',
    timestamp: '08:00 AM',
    user: { name: 'Dedek Yusuf', avatar: imgImage5 },
    action: <span className="text-[var(--text-primary)]">Im ready to work</span>,
    content: (
      <div className="mt-2 w-[250px]">
        <LocationMismatchMap />
      </div>
    ),
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    icon: { component: <MapPin size={10} color="white" />, bgColor: 'var(--alert-red)' }
  },

  // Jan 4, 2026
  {
    id: 'jan4-1',
    date: 'Jan 4, 2026',
    timestamp: '01:44 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Completed this task</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    icon: { component: <Check size={10} color="white" />, bgColor: 'var(--secondary-green)' }
  },
  {
    id: 'jan4-2',
    date: 'Jan 4, 2026',
    timestamp: '11:20 AM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Unassigned <span className="text-[var(--blue)]">@Gerald Oliver</span> from this task</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    icon: { component: <UserMinus size={10} color="white" />, bgColor: 'var(--alert-red)' }
  },
  {
    id: 'jan4-3',
    date: 'Jan 4, 2026',
    timestamp: '08:44 AM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Added <span className="text-[var(--blue)]">@Dedek Yusuf</span> as Task Assignee</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    icon: { component: <UserPlus size={10} color="white" />, bgColor: 'var(--blue)' }
  },
  {
    id: 'jan4-4',
    date: 'Jan 4, 2026',
    timestamp: '08:44 AM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Created this task</span>,
    tags: { folder: '1320 Smith Street Residential', hash: 'Foundation Inspection' },
    icon: { component: <Plus size={10} color="white" />, bgColor: 'var(--blue)' }
  },

  // Dec 29, 2025
  {
    id: '17',
    date: 'Dec 29, 2025',
    timestamp: '04:55 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Restored this project</span>,
    tags: { folder: '1320 Smith Street Residential' },
    icon: { component: <RotateCcw size={10} color="white" />, bgColor: 'var(--secondary-green)' }
  },
  {
    id: '18',
    date: 'Dec 29, 2025',
    timestamp: '04:50 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Archived this project</span>,
    tags: { folder: '1320 Smith Street Residential' },
    icon: { component: <Folder size={10} color="white" />, bgColor: 'var(--grey-05)' }
  },
  {
    id: '19',
    date: 'Dec 29, 2025',
    timestamp: '04:40 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Project description has been updated</span>,
    tags: { folder: '1320 Smith Street Residential' },
    icon: { component: <PenLine size={10} color="white" />, bgColor: 'var(--text-secondary)' }
  },
  {
    id: '20',
    date: 'Dec 29, 2025',
    timestamp: '04:32 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Project location: <span className="font-semibold">1520 Oliver Street</span></span>,
    tags: { folder: '1320 Smith Street Residential' },
    icon: { component: <MapPin size={10} color="white" />, bgColor: 'var(--secondary-green)' }
  },
  {
    id: '21',
    date: 'Dec 29, 2025',
    timestamp: '02:40 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Project name has been updated from <span className="font-semibold">1520 Oliver Street Residential Construction</span> to <span className="font-semibold">1320 Smith Street Residential</span></span>,
    tags: { folder: '1320 Smith Street Residential' },
    icon: { component: <PenLine size={10} color="white" />, bgColor: 'var(--text-secondary)' }
  },
  {
    id: '22',
    date: 'Dec 29, 2025',
    timestamp: '02:33 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Changed <span className="text-[var(--blue)]">@Dedek Yusuf</span> role from Admin to Editor</span>,
    tags: { folder: '1520 Oliver Street Residential' },
    icon: { component: <Users size={10} color="white" />, bgColor: 'var(--text-secondary)' }
  },
  {
    id: '23',
    date: 'Dec 29, 2025',
    timestamp: '01:22 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Unassigned <span className="text-[var(--blue)]">@Will Smith</span> from this project</span>,
    tags: { folder: '1520 Oliver Street Residential' },
    icon: { component: <UserMinus size={10} color="white" />, bgColor: 'var(--alert-red)' }
  },
  {
    id: '24',
    date: 'Dec 29, 2025',
    timestamp: '01:20 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Added <span className="text-[var(--blue)]">@Dedek Yusuf</span> as Project Editor</span>,
    tags: { folder: '1520 Oliver Street Residential' },
    icon: { component: <UserPlus size={10} color="white" />, bgColor: 'var(--blue)' }
  },
  {
    id: '25',
    date: 'Dec 29, 2025',
    timestamp: '12:20 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Added <span className="text-[var(--blue)]">@Tristan Enver Valerio</span> as Project Owner</span>,
    tags: { folder: '1520 Oliver Street Residential' },
    icon: { component: <UserPlus size={10} color="white" />, bgColor: 'var(--blue)' }
  },
  {
    id: '26',
    date: 'Dec 29, 2025',
    timestamp: '12:20 PM',
    user: { name: 'Tristan Enver Valerio', avatar: imgImage },
    action: <span className="text-[var(--text-primary)]">Created this project</span>,
    tags: { folder: '1520 Oliver Street Residential' },
    icon: { component: <Plus size={10} color="white" />, bgColor: 'var(--blue)' }
  }
];

const RecursiveHighlighter = ({ node, query }: { node: React.ReactNode, query: string }) => {
  if (!query || query.trim().length < 3) return node;

  if (typeof node === 'string') {
    if (node.toLowerCase().includes(query.toLowerCase())) {
        return (
            <>
                {node.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"))
                .map((part, index) =>
                    part.toLowerCase() === query.toLowerCase() ? (
                    <span key={index} className="bg-yellow-200 text-black">
                        {part}
                    </span>
                    ) : (
                    part
                    )
                )}
            </>
        )
    }
    return node;
  }

  if (React.isValidElement(node)) {
    const children = node.props.children;
    if (children) {
      const newChildren = React.Children.map(children, child => (
        <RecursiveHighlighter node={child} query={query} />
      ));
      return React.cloneElement(node, { ...node.props, children: newChildren } as any);
    }
    return node;
  }
  
  if (Array.isArray(node)) {
    return (
        <>
            {node.map((child, i) => <RecursiveHighlighter key={i} node={child} query={query} />)}
        </>
    );
  }

  return node;
};

// Helper function to extract text content from ReactNode for filtering
const getTextFromReactNode = (node: React.ReactNode): string => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  if (Array.isArray(node)) return node.map(getTextFromReactNode).join('');
  if (React.isValidElement(node)) {
    // @ts-ignore
    return getTextFromReactNode(node.props.children);
  }
  return '';
};

// Truncate helper
const truncateText = (text: string, maxLength: number = 20) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export default function GlobalActivityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUpgradePromptOpen, setIsUpgradePromptOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [filters, setFilters] = useState<ActivityFilterState>({
    projects: [],
    users: [],
    dateRange: null
  });

  // Preview Modal State
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewFiles, setPreviewFiles] = useState<any[]>([]);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [currentProjectName, setCurrentProjectName] = useState('');
  const [currentTaskName, setCurrentTaskName] = useState('');

  const handleAttachmentClick = (activity: ActivityItem, clickedItem: any) => {
    // 1. Flatten all attachments in this activity
    const allItems: any[] = [];
    
    activity.attachments?.forEach(att => {
      if (att.items) {
        att.items.forEach(item => {
           if (item.type === 'image' || item.type === 'pdf') {
             allItems.push(item);
           }
        });
      } else if (att.images) {
         att.images.forEach(img => {
           allItems.push({ type: 'image', url: img });
         });
      }
    });

    if (allItems.length === 0) return;

    // 2. Map to PreviewModal format
    const formattedFiles = allItems.map((item, idx) => ({
      id: `preview-${activity.id}-${idx}`,
      type: item.type === 'image' ? 'media' : 'document',
      name: item.name || `Attachment ${idx + 1}`,
      url: item.url || '',
      uploader: activity.user.name,
      uploadDate: activity.date,
      fileExtension: item.type === 'image' ? 'jpg' : (item.name?.split('.').pop() || 'pdf')
    }));

    // 3. Find index of clicked item
    let index = -1;
    if (typeof clickedItem === 'string') {
        index = allItems.findIndex(item => item.url === clickedItem);
    } else {
        index = allItems.indexOf(clickedItem);
    }
    
    if (index === -1) index = 0;
    
    // 4. Set project and task name
    const projectName = activity.tags?.folder || 'Project';
    const taskName = typeof activity.tags?.hash === 'string' ? activity.tags.hash : activity.tags?.hash?.label || 'Task';

    setPreviewFiles(formattedFiles);
    setPreviewIndex(index);
    setCurrentProjectName(projectName);
    setCurrentTaskName(taskName);
    setIsPreviewOpen(true);
  };

  // Extract unique values
  const uniqueProjects = useMemo(() => 
    Array.from(new Set(ACTIVITIES.map(a => a.tags?.folder).filter(Boolean) as string[])).sort(), 
    []
  );
  const uniqueUsers = useMemo(() => {
    const users = new Set<string>();
    
    ACTIVITIES.forEach(activity => {
      // 1. Add the actor
      users.add(activity.user.name);
      
      // 2. Extract mentions/added/assigned users from action text
      const actionText = getTextFromReactNode(activity.action);
      // Match @Name Name format (capitalized words)
      const matches = actionText.match(/@([A-Z][a-zA-Z]+(?:\s[A-Z][a-zA-Z]+)*)/g);
      
      if (matches) {
        matches.forEach(match => {
          // Remove the @ prefix
          users.add(match.substring(1));
        });
      }
    });

    return Array.from(users).sort();
  }, []);

  // Debounce logic
  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setIsLoading(false);
    }, 500); // 500ms debounce
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const filteredActivities = useMemo(() => {
    let result = ACTIVITIES;

    // 1. Text Search
    if (debouncedQuery && debouncedQuery.trim().length > 0) {
      const lowerQuery = debouncedQuery.toLowerCase();
      result = result.filter(activity => {
        // Check user name
        if (activity.user.name.toLowerCase().includes(lowerQuery)) return true;
        
        // Check tags
        if (activity.tags?.folder?.toLowerCase().includes(lowerQuery)) return true;
        if (activity.tags?.hash) {
          const hashLabel = typeof activity.tags.hash === 'string' 
              ? activity.tags.hash 
              : activity.tags.hash.label;
          if (hashLabel.toLowerCase().includes(lowerQuery)) return true;
        }

        // Check action description (extract text from ReactNode)
        const actionText = getTextFromReactNode(activity.action);
        if (actionText.toLowerCase().includes(lowerQuery)) return true;

        return false;
      });
    }

    // 2. Dropdown Filters
    // Projects
    if (filters.projects.length > 0) {
      result = result.filter(activity => 
        activity.tags?.folder && filters.projects.includes(activity.tags.folder)
      );
    }

    // Users
    if (filters.users.length > 0) {
      result = result.filter(activity => {
        // 1. Check if the actor is selected
        if (filters.users.includes(activity.user.name)) return true;

        // 2. Check if any mentioned/assigned/added user is selected
        const actionText = getTextFromReactNode(activity.action);
        const matches = actionText.match(/@([A-Z][a-zA-Z]+(?:\s[A-Z][a-zA-Z]+)*)/g);
        
        if (matches) {
          const mentionedUsers = matches.map(m => m.substring(1));
          return mentionedUsers.some(user => filters.users.includes(user));
        }

        return false;
      });
    }

    // Date Range
    if (filters.dateRange && filters.dateRange.start && filters.dateRange.end) {
      const start = filters.dateRange.start.getTime();
      // Set end date to end of day to include all activities on that day
      const endDate = new Date(filters.dateRange.end);
      endDate.setHours(23, 59, 59, 999);
      const endTime = endDate.getTime();

      result = result.filter(activity => {
          const activityDate = new Date(activity.date).getTime();
          return activityDate >= start && activityDate <= endTime;
      });
    }

    return result;
  }, [debouncedQuery, filters]);

  // Group activities by date
  const groupedActivities = filteredActivities.reduce((groups, activity) => {
    const date = activity.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(activity);
    return groups;
  }, {} as Record<string, ActivityItem[]>);

  // Sort dates descending
  const sortedDates = Object.keys(groupedActivities).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });


  const handleSubscriptionClick = () => {
    setIsUpgradePromptOpen(false);
    setIsSubscriptionModalOpen(true);
  };

  return (
    <div className="w-full h-full flex flex-col bg-background">
      {/* Header */}
      <header className="flex-none px-0 py-6 border-b border-border bg-white z-20">
        <div className="flex items-center justify-between pb-6 px-4">
          <h1 className="text-web-heading-22 text-[var(--text-primary)]">Global Activity Log</h1>
          <div className="flex items-center gap-3">
             <button className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
               <Search size={20} />
             </button>
             <Button
                variant="fill"
                size="sm"
                className="btn-black"
                style={{ width: "120px", borderRadius: "var(--radius-full)" }}
              >
                <Plus className="w-4 h-4" />
                <span>New Task</span>
              </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-border px-4">
          <div className="flex-1">
            <TextInput
              size="md"
              placeholder="Search..."
              maxLength={250}
              icon={Search}
              showClearButton={true}
              value={searchQuery}
              onChange={setSearchQuery}
              className="w-full"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <GlobalActivityFilterDropdown 
              projects={uniqueProjects}
              users={uniqueUsers}
              filters={filters}
              onFiltersChange={setFilters}
            />
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-[var(--text-primary)] hover:bg-[var(--grey-02)]"
                onClick={() => console.log('Export Timesheet')}
              >
                <FolderPlus size={16} />
                Export Timesheet
              </Button>
          </div>
        </div>
      </header>

      {/* Activity Content */}
      <div className="flex-1 overflow-y-auto relative bg-white">
        {isLoading && (
            <div className="w-full flex justify-center py-4">
                <SearchLoadingSpinner />
            </div>
        )}

        {!isLoading && sortedDates.length === 0 && debouncedQuery && (
             <div className="flex flex-col items-center justify-center py-12 text-[var(--text-secondary)]">
                 <p>No results found for "{debouncedQuery}"</p>
             </div>
        )}

        {!isLoading && sortedDates.map((date) => (
          <div key={date} className="relative">
            {/* Sticky Date Header */}
            <div className="sticky top-0 z-10 px-4 py-3 bg-[var(--grey-01)] border-b border-[var(--border)] text-web-label-small text-[var(--text-secondary)]">
              {date}
            </div>
            
            <div className="px-4 py-4 space-y-6">
              {groupedActivities[date].map((activity, index) => (
                <div 
                  key={activity.id} 
                  className="flex gap-4 group"
                >
                  {/* Avatar & Icon */}
                  <div className="flex-none relative h-12">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                      <ImageWithFallback 
                        src={activity.user.avatar} 
                        alt={activity.user.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Activity Icon Badge */}
                    <div 
                      className="absolute bottom-1 -right-1 rounded-full p-[2px] w-4 h-4 flex items-center justify-center"
                      style={{ backgroundColor: activity.icon.bgColor }}
                    >
                      {activity.icon.component}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 min-w-0 ${index !== groupedActivities[date].length - 1 ? 'border-b border-[var(--border)] pb-6' : ''}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[16px] font-semibold text-[var(--text-primary)]">
                        <RecursiveHighlighter node={activity.user.name} query={debouncedQuery} />
                      </span>
                      <span className="text-[12px] text-[var(--text-secondary)]">{activity.timestamp}</span>
                    </div>
                    
                    <div className="mb-2 text-[14px]">
                      <RecursiveHighlighter node={activity.action} query={debouncedQuery} />
                    </div>
                    
                    {/* Attachments Grid */}
                    {activity.attachments && activity.attachments.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-3">
                        {activity.attachments.map((att, idx) => {
                          const items = att.items || [];
                          const isJan5 = date === 'Jan 5, 2026';
                          const isDec30 = date === 'Dec 30, 2025';
                          
                          let renderMode = 'grid';

                          if (att.type === 'custom-row') {
                             renderMode = 'row';
                          } else if (att.type === 'grid') {
                             renderMode = 'grid';
                          } else if (att.type === 'doc-group') {
                             // legacy handling
                             return (
                                <div key={idx} className="flex gap-3 overflow-x-auto pb-2">
                                    {att.images?.map((img, i) => (
                                        <div 
                                            key={i} 
                                            className="w-[118px] h-[118px] rounded-lg overflow-hidden border border-[var(--border)] shrink-0 relative cursor-pointer hover:opacity-90 transition-opacity"
                                            onClick={() => handleAttachmentClick(activity, img)}
                                        >
                                            <ImageWithFallback 
                                                src={img} 
                                                alt="attachment" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                             );
                          }

                          if (renderMode === 'row') {
                            return (
                                <div key={idx} className="flex gap-3 flex-wrap">
                                    {items.map((item, i) => {
                                        if (item.type === 'image') {
                                            const isSingle = items.length === 1;
                                            const imageCount = items.filter(i => i.type === 'image').length;
                                            let defaultClass = isSingle ? 'w-[120px] h-[120px]' : 'w-[248px] h-[118px]';

                                            if (isJan5 && isSingle) {
                                              defaultClass = 'w-[120px] h-[120px]';
                                            } else if (isDec30 && imageCount === 2) {
                                              defaultClass = 'w-full max-w-[400px] h-[200px]';
                                            }
                                            
                                            return (
                                                <div 
                                                    key={i} 
                                                    className={`rounded-lg overflow-hidden border border-[var(--border)] shrink-0 relative ${item.className || defaultClass} cursor-pointer hover:opacity-90 transition-opacity`}
                                                    onClick={() => handleAttachmentClick(activity, item)}
                                                >
                                                    <ImageWithFallback 
                                                        src={item.url} 
                                                        alt="attachment" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            );
                                        } else if (item.type === 'pdf') {
                                            return (
                                                <div 
                                                    key={i} 
                                                    className="w-[118px] h-[118px] rounded-lg bg-[var(--grey-01)] border border-[var(--border)] flex flex-col items-center justify-center p-2 shrink-0 cursor-pointer hover:bg-[var(--grey-02)] transition-colors"
                                                    onClick={() => handleAttachmentClick(activity, item)}
                                                >
                                                    <div className="w-8 h-8 rounded bg-[var(--grey-03)] flex items-center justify-center mb-2">
                                                        <Pdf />
                                                    </div>
                                                    <span className="text-[10px] text-[var(--text-primary)] text-center w-full truncate block" title={item.name}>{item.name}</span>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            );
                          }

                          // Grid Mode
                          let gridCols = items.length === 2 ? 'grid-cols-2 max-w-[500px]' : 'grid-cols-8';

                          if (isJan5 || isDec30) {
                            gridCols = 'grid-cols-8';
                          }
                          
                          return (
                            <div key={idx} className={`grid ${gridCols} gap-3 w-full`}>
                              {items.map((item, i) => {
                                let colSpanClass = "";
                                let aspectClass = "aspect-square";
                                
                                // Fix: Single image should be 2 columns wide but maintain 1 column height
                                // aspect-[2/1] maintains the height of a single square column when spanning 2 columns
                                if (items.length === 1 && item.type === 'image') {
                                  colSpanClass = "col-span-2";
                                  aspectClass = "aspect-[2/1]";
                                } else if ((isJan5 || isDec30) && items.length === 1) {
                                  // Keep existing logic for specific dates if needed, though the above rule covers it generally
                                  colSpanClass = "col-span-2";
                                }

                                // Common container style
                                const containerClass = `${aspectClass} rounded-lg border border-[var(--border)] overflow-hidden relative ${colSpanClass}`;
                                
                                if (item.type === 'image') {
                                  return (
                                    <div 
                                        key={i} 
                                        className={`${containerClass} cursor-pointer hover:opacity-90 transition-opacity`}
                                        onClick={() => handleAttachmentClick(activity, item)}
                                    >
                                      <ImageWithFallback 
                                          src={item.url} 
                                          alt="attachment" 
                                          className="w-full h-full object-cover"
                                      />
                                      {item.count && (
                                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                                              <span className="text-white font-semibold text-lg">+{item.count}</span>
                                          </div>
                                      )}
                                    </div>
                                  );
                                } else if (item.type === 'pdf') {
                                  return (
                                      <div 
                                        key={i} 
                                        className={`aspect-square rounded-lg bg-[var(--grey-01)] border border-[var(--border)] flex flex-col items-center justify-center p-2 relative overflow-hidden ${colSpanClass} cursor-pointer hover:bg-[var(--grey-02)] transition-colors`}
                                        onClick={() => handleAttachmentClick(activity, item)}
                                      >
                                          <div className="w-8 h-8 rounded bg-[var(--grey-03)] flex items-center justify-center mb-2 shrink-0">
                                              <Pdf />
                                          </div>
                                          <span className="text-[10px] text-[var(--text-primary)] text-center w-full truncate block leading-tight px-1" title={item.name}>
                                            {item.name}
                                          </span>
                                      </div>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    
                    {/* Additional Content / Tags */}
                    {activity.content && (
                      <div className="text-sm mb-3">
                        {activity.content}
                      </div>
                    )}

                    {/* Tags */}
                    {activity.tags && (
                      <div className="flex items-center gap-2">
                        {activity.tags.folder && (
                          <div className="flex items-center gap-1 bg-[var(--secondary-green)] text-white px-2 py-1 rounded text-[10px] font-medium max-w-[200px]">
                            <Folder size={10} className="shrink-0" />
                            <span className="truncate">
                                <RecursiveHighlighter node={truncateText(activity.tags.folder)} query={debouncedQuery} />
                            </span>
                          </div>
                        )}
                        {activity.tags.hash && (
                          (() => {
                            const hash = activity.tags.hash;
                            const isString = typeof hash === 'string';
                            const label = isString ? hash : hash.label;
                            const variant = isString ? 'black' : (hash as any).variant || 'black';
                            
                            let bgClass = "bg-[var(--black)]";
                            let textClass = "text-white";
                            let extraClass = "";

                            if (variant === 'crossed-grey') {
                              bgClass = "bg-[var(--grey-03)]";
                              textClass = "text-[var(--grey-05)]";
                              extraClass = "line-through decoration-solid";
                            }
                            
                            return (
                              <div className={`flex items-center gap-1 ${bgClass} ${textClass} px-2 py-1 rounded text-[10px] font-medium max-w-[150px]`}>
                                <div className="w-2 h-2 flex items-center justify-center shrink-0">
                                  <span className="text-[10px]">#</span>
                                </div>
                                <span className={`truncate ${extraClass}`}>
                                    <RecursiveHighlighter node={truncateText(label)} query={debouncedQuery} />
                                </span>
                              </div>
                            );
                          })()
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isUpgradePromptOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9998,
            padding: 'var(--spacing-16)'
          }}
          onClick={() => setIsUpgradePromptOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <UpgradePromptModal 
              variant="confirmation"
              size="web"
              title="Reactivate Your Team"
              description="Your team access has expired. Upgrade to the Team Plan to restore collaboration and unlock all features."
              benefits={[
                "2TB shared team storage",
                "Unlimited projects & tasks",
                "Add unlimited users to projects & tasks",
                "Team admin & member roles",
                "Centralized billing",
                "Global activity log for full visibility"
              ]}
              benefitsTitle="Team Plan includes:"
              buttonText="Upgrade to Team Plan"
              onUpgradeClick={handleSubscriptionClick}
            />
          </div>
        </div>
      )}

      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />

      <FilePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        files={previewFiles}
        currentIndex={previewIndex}
        onNavigate={setPreviewIndex}
        projectName={currentProjectName}
        taskName={currentTaskName}
      />
    </div>
  );
}
