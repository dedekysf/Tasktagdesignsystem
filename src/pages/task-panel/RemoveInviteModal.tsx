import { Modal } from '../../components/Modal';
import { createPortal } from 'react-dom';

interface RemoveInviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  email?: string;
}

export function RemoveInviteModal({ isOpen, onClose, onConfirm, email }: RemoveInviteModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9998,
        }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          width: 'fit-content',
        }}
      >
        <Modal
          variant="one-action"
          size="web"
          title="Remove Invite"
          description={`Are you sure you want to remove the invite for ${email}?`}
          primaryButtonText="Remove"
          onPrimaryClick={handleConfirm}
          onClose={onClose}
        />
      </div>
    </>,
    document.body
  );
}
