import { useState } from "react";
import { SectionHeader } from "../SectionHeader";
import { TabsContainer, TabPanel } from "../TabsContainer";
import { CodeExample } from "../CodeExample";
import { Image } from "lucide-react";
import { Banner } from "../mobile/Banner";

export function BannerComponentPage() {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <section>
      <SectionHeader
        icon={Image}
        title="Banner"
        description="A promotional or informational banner component used to invite members or display important messages."
      />

      <div>
        <div style={{ marginBottom: "var(--spacing-56)" }}>
          <TabsContainer
            activeTab={activeTab}
            onTabChange={setActiveTab}
            tabs={[
              { value: "preview", label: "Preview" },
              { value: "usage", label: "Usage" },
              { value: "github", label: "GitHub" },
            ]}
          >
            <TabPanel value="preview" activeTab={activeTab}>
              <div className="component-card">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-web-heading-18 mb-4">1 CTA Variant</h3>
                    <div className="max-w-md">
                      <Banner variant="1 CTA" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-web-heading-18 mb-4">2 CTA Variant</h3>
                    <div className="max-w-md">
                      <Banner variant="2 CTA" />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="usage" activeTab={activeTab}>
              <CodeExample
                title="Usage Example"
                code={`import { Banner } from './components/mobile/Banner';

// 1 CTA Variant (Default)
<Banner variant="1 CTA" />
// or simply <Banner />

// 2 CTA Variant
<Banner variant="2 CTA" />`}
              />
            </TabPanel>
            <TabPanel value="github" activeTab={activeTab}>
              <CodeExample
                title="GitHub URL"
                code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/mobile/Banner.tsx`}
              />
            </TabPanel>
          </TabsContainer>
        </div>
      </div>
    </section>
  );
}
