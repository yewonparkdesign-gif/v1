import { notFound } from "next/navigation";
import { getFoundationBySlug, diagramsPages } from "@/lib/content";
import { FoundationTemplate } from "@/components/blocks/FoundationTemplate";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return diagramsPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getFoundationBySlug(slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function DiagramsPage({ params }: Props) {
  const { slug } = await params;
  const page = getFoundationBySlug(slug);
  if (!page) notFound();
  return <FoundationTemplate page={page} />;
}
