import { PageWrapper, PageHeader } from "@/components/layout/PageWrapper";
import { ColorSystem } from "@/components/blocks/ColorSystem";
import { ContentRenderer } from "@/components/blocks/ContentRenderer";
import type { ColorSystemPage } from "@/types/content";

interface ColorSystemTemplateProps {
  page: ColorSystemPage;
}

export function ColorSystemTemplate({ page }: ColorSystemTemplateProps) {
  return (
    <PageWrapper>
      <PageHeader
        title={page.title}
        subtitle={page.subtitle}
        description={page.description}
        tags={page.tags}
        status={page.status}
        lastUpdated={page.lastUpdated}
      />
      <ColorSystem groups={page.groups} />
      {page.blocks && <ContentRenderer blocks={page.blocks} />}
    </PageWrapper>
  );
}
