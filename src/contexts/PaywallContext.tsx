import { createContext, useContext, ReactNode, useState } from 'react';
import { UpgradePromptModal } from '../components/UpgradePromptModal';
import { SubscriptionModal } from '../components/SubscriptionModal';
import { Modal } from '../components/Modal';
import { SuccessModal } from '../components/SuccessModal';
import PaymentPage from '../pages/PaymentPage';

interface PaywallContextType {
  isExpiredMode: boolean;
  showUpgradeModal: () => void;
  showSubscriptionModal: () => void;
  isSuccessModalOpen: boolean;
}

const PaywallContext = createContext<PaywallContextType>({
  isExpiredMode: false,
  showUpgradeModal: () => {},
  showSubscriptionModal: () => {},
  isSuccessModalOpen: false,
});

export function PaywallProvider({ children, isExpiredMode = false }: { children: ReactNode; isExpiredMode?: boolean }) {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isPaymentPageOpen, setIsPaymentPageOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  console.log('PaywallProvider render - isSuccessModalOpen:', isSuccessModalOpen);

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
    setIsPaymentPageOpen(false);
  };

  const handleContinue = () => {
    setIsConfirmationModalOpen(false);
    setIsPaymentPageOpen(true);
  };

  const handlePaymentBack = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleSubscribe = () => {
    console.log('handleSubscribe called');
    // Close payment page first
    setIsPaymentPageOpen(false);
    // Use requestAnimationFrame to ensure DOM is updated before showing success modal
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsSuccessModalOpen((prev) => {
          console.log('Setting isSuccessModalOpen from', prev, 'to true');
          return true;
        });
      }, 50);
    });
  };

  return (
    <PaywallContext.Provider value={{ isExpiredMode, showUpgradeModal, showSubscriptionModal, isSuccessModalOpen }}>
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
      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={handleSubscriptionClose}
        onSuccess={() => {
          setIsSubscriptionModalOpen(false);
          setIsPaymentPageOpen(true);
        }}
      />

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
            zIndex: 10002,
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

      {/* Payment Page */}
      {isPaymentPageOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--white)',
            zIndex: 10001,
            overflow: 'auto',
          }}
        >
          <PaymentPage onBack={handlePaymentBack} onSubscribe={handleSubscribe} />
        </div>
      )}

      {/* Success Modal */}
      <SuccessModal
        variant="default"
        size="default"
        isOpen={isSuccessModalOpen}
        title="Congratulations!"
        message="Your subscription to TaskTag Project is valid for 1 year and will automatically renew on September, 17 2026."
        buttonText="Got It"
        onClose={() => setIsSuccessModalOpen(false)}
        showCloseButton={false}
      />
    </PaywallContext.Provider>
  );
}

export function usePaywall() {
  return useContext(PaywallContext);
}