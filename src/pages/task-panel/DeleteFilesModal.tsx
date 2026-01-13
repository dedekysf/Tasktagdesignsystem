import { Modal } from '../../components/Modal';
import { createPortal } from 'react-dom';

interface DeleteFilesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  count: number;
}

export function DeleteFilesModal({ isOpen, onClose, onConfirm, count }: DeleteFilesModalProps) {
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
          title="Delete File"
          description={`${count} item${count > 1 ? 's' : ''} will be deleted. This can't be undone.`}
          primaryButtonText="Delete"
          onPrimaryClick={handleConfirm}
          onClose={onClose}
        />
      </div>
    </>,
    document.body
  );
}
