import { notFound } from "next/navigation";
import { getFoundationBySlug, foundations } from "@/lib/content";
import { FoundationTemplate } from "@/components/blocks/FoundationTemplate";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return foundations.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getFoundationBySlug(slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function FoundationPage({ params }: Props) {
  const { slug } = await params;
  const page = getFoundationBySlug(slug);
  if (!page) notFound();
  return <FoundationTemplate page={page} />;
}
