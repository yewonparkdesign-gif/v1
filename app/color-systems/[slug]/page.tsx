import { notFound } from "next/navigation";
import { getColorSystemBySlug, colorSystems } from "@/lib/content";
import { ColorSystemTemplate } from "@/components/blocks/ColorSystemTemplate";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return colorSystems.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getColorSystemBySlug(slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function ColorSystemPage({ params }: Props) {
  const { slug } = await params;
  const page = getColorSystemBySlug(slug);
  if (!page) notFound();
  return <ColorSystemTemplate page={page} />;
}
