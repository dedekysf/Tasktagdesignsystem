import { useState, useEffect } from "react";
import { HardHat, Zap, X, Search } from "lucide-react";
import { TextInput } from "../../components/TextInput";

interface Project {
  id: string;
  name: string;
  color: string;
  icon: "helmet" | "zap";
}

interface ProjectSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (project: Project) => void;
  selectedProjectId?: string | null;
}

const mockProjects: Project[] = [
  { id: "1", name: "11 N Raintree Hollow Court", color: "var(--purple)", icon: "helmet" },
  { id: "2", name: "LA Avenue 34 G", color: "var(--alert-red)", icon: "zap" },
  { id: "3", name: "LA Avenue 37 D", color: "var(--blue)", icon: "helmet" },
];

function ProjectIcon({ color, icon }: { color: string; icon: "helmet" | "zap" }) {
  const Icon = icon === "helmet" ? HardHat : Zap;
  
  return (
    <div
      className="flex items-center justify-center p-[6px] rounded-[2px] shrink-0"
      style={{ backgroundColor: color, width: '24px', height: '24px' }}
    >
      <Icon className="size-[12px]" style={{ color: 'white' }} />
    </div>
  );
}

function ProjectRow({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      className="bg-white flex gap-2 items-center w-full cursor-pointer transition-colors py-2"
      onClick={onClick}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <ProjectIcon color={project.color} icon={project.icon} />
      <div className="flex-1 min-w-0">
        <p 
          className="truncate text-[14px]"
          style={{ fontWeight: 'var(--font-weight-regular)', color: 'var(--text-primary)' }}
        >
          {project.name}
        </p>
      </div>
    </div>
  );
}

export function ProjectSelectModal({ isOpen, onClose, onSelect }: ProjectSelectModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(mockProjects);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProjects(mockProjects);
    } else {
      const filtered = mockProjects.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleProjectClick = (project: Project) => {
    onSelect(project);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[504px]">
        <div 
          className="bg-white relative rounded-[16px]"
          style={{ 
            border: '1px solid var(--border)',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.06)'
          }}
        >
          <div className="flex flex-col gap-4 px-4 py-6">
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <h4
                style={{
                  color: 'var(--text-primary)',
                  margin: 0,
                  fontWeight: 'var(--font-weight-semibold)'
                }}
              >
                Select Project
              </h4>
              <button
                onClick={onClose}
                className="flex items-center justify-center transition-colors"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  color: 'var(--text-primary)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--grey-05)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Input */}
            <TextInput
              size="md"
              placeholder="Search"
              value={searchQuery}
              onChange={setSearchQuery}
              icon={Search}
              showClearButton={true}
            />

            {/* Project List */}
            <div className="flex flex-col gap-4 w-full max-h-[300px] overflow-y-auto">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))
              ) : (
                <p 
                  className="text-[14px] py-4 text-center w-full" 
                  style={{ fontWeight: 'var(--font-weight-regular)', color: 'var(--text-secondary)' }}
                >
                  No projects found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}