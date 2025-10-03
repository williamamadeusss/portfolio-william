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

  // {
  //   title: "Indramas",
  //   projectSlug: "indramas",
  //   shortDescription:
  //     "Developed a modern, responsive landing page to enhance Indramas' online presence and serve as a primary tool for capturing new client leads.",
  //   url: "indramas.flonkin.com",
  //   thumbnail: "/images/projects/homepage-indramas.webp",
  //   role: "Frontend Developer",
  //   techStacks: "Next.js, Tailwind CSS, Motion",
  //   timeline: "In Progress, August 2025",
  //   challenge: "yapppp",
  //   solution: "yapppers",
  // },
}

export const projects: Project[] = [
  {
    title: "Personal Website",
    projectSlug: "personal-website",
    shortDescription:
      "A personal portfolio website designed to showcase William's profile and past projects.",
    url: "williamamadeus.site",
    thumbnail: "/images/projects/homepage-portfolio.webp",
    role: "Product Owner, Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Motion, Zod, Aceternity UI, Vercel",
    timeline: "2 Months, September 2025",
    challenge:
      "I needed to establish a professional online presence that highlights my work and skills.",
    solution:
      "I designed and developed the portfolio from scratch, handling everything from ideation and UI/UX design to development and deployment.",
  },
  {
    title: "Stokku",
    projectSlug: "stokku",
    shortDescription:
      "An inventory management system web app built as a final college assessment project (currently inactive).",
    url: "stokku.netlify.app",
    thumbnail: "/images/projects/homepage-stokku.webp",
    role: "Product Owner, Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Java, MongoDB",
    timeline: "4 Months, March 2025",
    challenge:
      "Our team needed to provide a digital solution to help small businesses (UMKMs) streamline operations and minimize errors.",
    solution:
      "We developed an inventory management platform that enables UMKM owners to manage stock efficiently and reduce human error in day-to-day operations.",
  },
  {
    title: "GAEA",
    projectSlug: "gaea",
    shortDescription:
      "A company landing page created to strengthen GAEA’s digital presence and brand visibility.",
    url: "gaea.co.id",
    thumbnail: "/images/projects/homepage-gaea.webp",
    role: "Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Motion, Wordpress, Supabase",
    timeline: "2 Months, July 2025",
    challenge:
      "The challenge was to build a visually appealing, SEO-friendly website that effectively communicates GAEA’s offerings and attracts potential clients.",
    solution:
      "I implemented the given UI design and enhanced it with Framer Motion's animations, while optimizing performance and SEO to ensure maximum visibility and engagement.",
  },
  {
    title: "Toco Seller Landing Page",
    projectSlug: "toco-seller",
    shortDescription:
      "A promotional one-page landing site designed for Toco Seller’s e-commerce platform.",
    url: "try.toco.id/seller",
    thumbnail: "/images/projects/homepage-tocoseller.mp4",
    video: true,
    role: "Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Motion, Supabase",
    timeline: "1 Month, July 2024",
    challenge:
      "Toco's goal was to create a marketing-focused landing page that could strengthen Toco’s online presence and attract sellers.",
    solution:
      "We built a clean, responsive landing page that highlights seller benefits and includes a contact form for inquiries, helping Toco engage with potential partners more effectively.",
  },
  {
    title: "Tocoffee Landing Page",
    projectSlug: "tocoffee",
    shortDescription:
      "A promotional website for Tocoffee, a café based in BSD, Tangerang, designed to showcase its brand and services online.",
    url: "try.toco.id/tocoffee",
    thumbnail: "/images/projects/homepage-tocoffee.webp",
    role: "Frontend Developer",
    techStacks: "Next.js, Tailwind CSS, Motion, Supabase",
    timeline: "1 Month, October 2024",
    challenge:
      "Tocoffee needed an online platform to strengthen its presence, attract customers, and convey its café atmosphere digitally.",
    solution:
      "We developed a promotional website featuring a digital menu, online reservation form, and brand-driven visuals that capture the café’s cozy vibe, enhancing its local customer engagement.",
  },
];
