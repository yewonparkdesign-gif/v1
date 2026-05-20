import { notFound } from "next/navigation";
import { getAnalystReportsPage } from "@/lib/content";
import { FoundationTemplate } from "@/components/blocks/FoundationTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyst Reports",
  description: "Design standards for analyst report cards and layouts on SAP.com.",
};

export default function AnalystReportsPage() {
  const page = getAnalystReportsPage();
  if (!page) notFound();
  return <FoundationTemplate page={page} />;
}
