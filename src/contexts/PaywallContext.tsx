import { createContext, useContext, ReactNode, useState } from 'react';
import { UpgradePromptModal } from '../components/UpgradePromptModal';
import { SubscriptionModal } from '../components/SubscriptionModal';
import { Modal } from '../components/Modal';

interface PaywallContextType {
  isExpiredMode: boolean;
  showUpgradeModal: () => void;
  showSubscriptionModal: () => void;
}

const PaywallContext = createContext<PaywallContextType>({
  isExpiredMode: false,
  showUpgradeModal: () => {},
  showSubscriptionModal: () => {},
});

export function PaywallProvider({ children, isExpiredMode = false }: { children: ReactNode; isExpiredMode?: boolean }) {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const showUpgradeModal = () => {
    setIsUpgradeModalOpen(true);
  };

  const showSubscriptionModal = () => {
    setIsUpgradeModalOpen(false);
    setIsSubscriptionModalOpen(true);
  };

  const handleSubscriptionClose = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleLater = () => {
    setIsConfirmationModalOpen(false);
    setIsSubscriptionModalOpen(false);
  };

  const handleContinue = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <PaywallContext.Provider value={{ isExpiredMode, showUpgradeModal, showSubscriptionModal }}>
      {children}
      
      {/* Upgrade Prompt Modal with backdrop */}
      {isUpgradeModalOpen && (
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
          onClick={() => setIsUpgradeModalOpen(false)}
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
              onUpgradeClick={showSubscriptionModal}
            />
          </div>
        </div>
      )}
      
      {/* Subscription Modal */}
      {isSubscriptionModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--overlay)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 'var(--spacing-16)'
          }}
          onClick={handleSubscriptionClose}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <SubscriptionModal 
              variant="default"
              size="default"
              onClose={handleSubscriptionClose}
              onCheckout={() => {
                console.log('Checkout completed');
                setIsSubscriptionModalOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Confirmation Modal - Double Modal */}
      {isConfirmationModalOpen && (
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
            zIndex: 10000,
            padding: 'var(--spacing-16)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', width: '100%' }}>
            <Modal
              variant="two-action"
              size="web"
              title="Complete Your Team Plan"
              description="You're close to completing your team plan. Click Continue to move forward without losing your progress."
              primaryButtonText="Continue"
              secondaryButtonText="Later"
              primaryButtonClassName="btn-secondary"
              secondaryButtonClassName="btn-secondary"
              onPrimaryClick={handleContinue}
              onSecondaryClick={handleLater}
            />
          </div>
        </div>
      )}
    </PaywallContext.Provider>
  );
}

export function usePaywall() {
  return useContext(PaywallContext);
}