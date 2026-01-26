import { useState } from 'react';
import { X } from 'lucide-react';

interface InviteModalProps {
  open: boolean;
  onClose: () => void;
  onSend: (email: string, role: 'Admin' | 'Member') => void;
}

export function InviteModal({ open, onClose, onSend }: InviteModalProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'Admin' | 'Member'>('Member');

  if (!open) return null;

  const handleSend = () => {
    if (email.trim()) {
      onSend(email, role);
      setEmail('');
      setRole('Member');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-foreground" style={{ fontSize: '18px', fontWeight: 600 }}>Invite Team Member</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        
        <div className="px-6 py-4 space-y-4">
          <div>
            <label className="block caption text-foreground mb-2" style={{ fontWeight: 600 }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-border rounded-lg caption focus:outline-none focus:border-foreground text-foreground placeholder:text-muted-foreground transition-colors"
              autoFocus
            />
          </div>
          
          <div>
            <label className="block caption text-foreground mb-2" style={{ fontWeight: 600 }}>
              Role
            </label>
            <div className="flex gap-2">
              {(['Admin', 'Member'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 px-4 py-2 border rounded-lg caption transition-colors cursor-pointer ${
                    role === r
                      ? 'border-foreground bg-secondary text-foreground'
                      : 'border-border hover:bg-secondary text-muted-foreground'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors cursor-pointer caption text-foreground"
            style={{ fontWeight: 600 }}
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={!email.trim()}
            className="px-4 py-2 bg-foreground text-white rounded-lg hover:opacity-90 transition-opacity cursor-pointer caption disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontWeight: 600 }}
          >
            Send invite
          </button>
        </div>
      </div>
    </div>
  );
}
