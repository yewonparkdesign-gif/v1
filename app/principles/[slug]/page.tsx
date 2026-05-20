import { notFound } from "next/navigation";
import { getPrincipleBySlug, principles } from "@/lib/content";
import { PrincipleTemplate } from "@/components/blocks/PrincipleTemplate";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return principles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPrincipleBySlug(slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function PrinciplePage({ params }: Props) {
  const { slug } = await params;
  const page = getPrincipleBySlug(slug);
  if (!page) notFound();
  return <PrincipleTemplate page={page} />;
}
