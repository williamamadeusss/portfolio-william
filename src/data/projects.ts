export interface Project {
  title: string;
  projectSlug: string;
  shortDescription: string;
  url: string;
  thumbnail: string;
  video?: boolean;
  role: string;
  techStacks: string;
  timeline: string;
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    title: "Indramas",
    projectSlug: "indramas",
    shortDescription:
      "Developed a modern, responsive landing page to enhance Indramas' online presence and serve as a primary tool for capturing new client leads.",
    url: "indramas.flonkin.com",
    thumbnail: "/images/projects/homepage-indramas.webp",
    role: "Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Motion",
    timeline: "In Progress, August 2025",
    challenge: "yapppp",
    solution: "yapppers",
  },
  {
    title: "Personal Website",
    projectSlug: "personal-website",
    shortDescription:
      "A personal portfolio website to display William's biodata and projects accomplished.",
    url: "indramas.flonkin.com",
    thumbnail: "/images/projects/homepage-portfolio.webp",
    role: "Product Owner, Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Motion, Aceternity UI",
    timeline: "In Progress",
    challenge: "yapppp",
    solution: "yapppers",
  },
  {
    title: "Stokku",
    projectSlug: "stokku",
    shortDescription:
      "An inventory management system website built for final college assesment purposes (currently inactive).",
    url: "stokku.netlify.app",
    thumbnail: "/images/projects/homepage-stokku.webp",
    role: "Product Owner, Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Java, MongoDB",
    timeline: "4 Month, March 2025",
    challenge: "yapppp",
    solution: "yapppers",
  },
  {
    title: "GAEA",
    projectSlug: "gaea",
    shortDescription:
      "A landing page for GAEA to increase this company's visibility around the digital platform.",
    url: "gaea.co.id",
    thumbnail: "/images/projects/homepage-gaea.webp",
    role: "Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Motion, Wordpress, Supabase",
    timeline: "2 Months, July 2025",
    challenge: "yapppp",
    solution: "yapppers",
  },
  {
    title: "Tocoffee Landing Page",
    projectSlug: "tocoffee",
    shortDescription:
      "A landing page for Tocoffee cafe in BSD city to boost its visibility around the internet and attract potential customers.",
    url: "try.toco.id/tocoffee",
    thumbnail: "/images/projects/homepage-tocoffee.webp",
    role: "Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Motion, Supabase",
    timeline: "1 Month",
    challenge: "yapppp",
    solution: "yapppers",
  },
  {
    title: "Toco Seller Landing Page",
    projectSlug: "toco-seller",
    shortDescription:
      "A landing page for Toco Seller platform to introduce TOCO and attract potential users engagement.",
    url: "try.toco.id/seller",
    thumbnail: "/images/projects/homepage-tocoseller.mp4",
    video: true,
    role: "Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Motion, Supabase",
    timeline: "1 Month",
    challenge: "yapppp",
    solution: "yapppers",
  },
];
