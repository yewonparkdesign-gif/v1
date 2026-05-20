import type { NavSection } from "@/types/content";

export const navigation: NavSection[] = [
  {
    title: "Overview",
    pinned: true,
    items: [
      { label: "Introduction", href: "/" },
      { label: "Visual Direction", href: "/foundations/visual-direction" },
    ],
  },
  {
    title: "Visual Principles",
    items: [
      { label: "Agentic Glass", href: "/principles/agentic-glass" },
      { label: "Blur & Diffusion", href: "/principles/blur-diffusion" },
      { label: "Transparency", href: "/principles/transparency" },
      { label: "Layering", href: "/principles/layering" },
      { label: "Light Diffusion", href: "/principles/light-diffusion" },
    ],
  },
  {
    title: "Color",
    items: [
      { label: "Examples", href: "/color/examples" },
      { label: "Topic Areas", href: "/color/topic-areas" },
      { label: "LOBs", href: "/color/lobs" },
      { label: "Industries", href: "/color/industries" },
      { label: "Gradients", href: "/color/gradients" },
      { label: "Graphic Pattern", href: "/color/graphic-pattern" },
      { label: "Linear", href: "/color/linear" },
      { label: "Organic", href: "/color/organic" },
    ],
  },
  {
    title: "Product Visualization",
    items: [
      { label: "Key Features", href: "/product-visualization/key-features" },
      { label: "Key Capabilities", href: "/product-visualization/key-capabilities" },
      { label: "Hero Graphics", href: "/product-visualization/hero-graphics" },
      { label: "Video Thumbnails", href: "/product-visualization/video-thumbnails" },
      { label: "Product Trials & Tours", href: "/product-visualization/trials-tours" },
    ],
  },
  {
    title: "Hero",
    items: [
      { label: "Homepage", href: "/hero/homepage" },
      { label: "Topic Overview", href: "/hero/topic-overview" },
      { label: "Topic Pages", href: "/hero/topic-lobs", badge: "LOB" },
      { label: "Topic Pages", href: "/hero/topic-customized", badge: "Customized" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Resource Types", href: "/resources/resource-types" },
      { label: "Colors & Color Pairings", href: "/resources/color-pairings" },
    ],
  },
  {
    title: "Company Logos",
    items: [
      { label: "Partners", href: "/company-logos/partners" },
      { label: "Partner Apps", href: "/company-logos/partner-apps" },
      { label: "Customer Stories", href: "/company-logos/customer-stories" },
    ],
  },
  {
    title: "Analyst Reports",
    items: [
      { label: "Overview", href: "/analyst-reports" },
    ],
  },
  {
    title: "Diagrams & Graphics",
    items: [
      { label: "Overview", href: "/diagrams/overview" },
      { label: "In-Body Custom Graphics", href: "/diagrams/in-body-graphics" },
    ],
  },
];
