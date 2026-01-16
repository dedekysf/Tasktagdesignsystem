import { useEffect } from "react";
import ProjectDetailsPage from "./project-details/ProjectDetailsPage";
import { Alert } from "../components/Alert";
import { PaywallProvider, usePaywall } from "../contexts/PaywallContext";

// PaywallCTAPage is a duplicate of ProjectDetailsPage with an alert banner
function PaywallCTAContent() {
  const { showSubscriptionModal } = usePaywall();

  useEffect(() => {
    // We no longer need tooltip event listeners here
    // All buttons now have built-in tooltips from their respective components:
    // - Save as Template: has Tooltip wrapper in ProjectDetailsPage
    // - Convert to Tasks: has Tooltip wrapper in ProjectDetailsPage
    // - Add item from template: has Tooltip wrapper in ProjectDetailsPage
    // - Invite: has Tooltip wrapper in ProjectDetailsPage
    // - Copy link: has Tooltip wrapper in TaskItem and ProjectDetailsPage
    // - Assignee: has Tooltip wrapper in AssigneeButton
    // - Priority, Due Date: handled in TaskItem
    
    // No event listeners needed anymore
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      {/* Project Details Content */}
      <ProjectDetailsPage />

      {/* Alert Banner - Absolute positioned at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px",
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <Alert
            variant="warning"
            title="Access to Team Plan for TaskTag Project has ended"
            description="Your access ended on January 17, 2026. Upgrade to a Team plan to use advanced project features."
            buttonText="Upgrade Now"
            onButtonClick={showSubscriptionModal}
          />
        </div>
      </div>
    </div>
  );
}

export default function PaywallCTAPage() {
  return (
    <PaywallProvider isExpiredMode={true}>
      <PaywallCTAContent />
    </PaywallProvider>
  );
}