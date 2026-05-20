import { notFound } from "next/navigation";
import { getFoundationBySlug, colorPages } from "@/lib/content";
import { FoundationTemplate } from "@/components/blocks/FoundationTemplate";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return colorPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getFoundationBySlug(slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function ColorPage({ params }: Props) {
  const { slug } = await params;
  const page = getFoundationBySlug(slug);
  if (!page) notFound();
  return <FoundationTemplate page={page} />;
}
